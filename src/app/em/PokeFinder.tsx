'use client';

import { useState } from 'react';

interface PokePlace {
  id: string;
  name: string;
  location: {
    address1: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  image_url: string;
  distance: number;
  is_closed: boolean;
}

const PokeFinder = () => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [nearestPokes, setNearestPokes] = useState<PokePlace[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [gettingLocation, setGettingLocation] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleGetLocation = () => {
    console.log('Button clicked, getting location...');
    setGettingLocation(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        console.log('Position obtained:', position);
        setLocation(position);
        setGettingLocation(false);
        setLoading(true);
        try {
          const response = await fetch(
            `/api/poke?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const pokePlaces = await response.json();
          console.log('Nearest Poke places:', pokePlaces);
          setNearestPokes(pokePlaces);
          setCurrentIndex(0); // Reset to the first place
        } catch (error) {
          console.error('Error getting nearest Poke places:', error);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error('Error getting geolocation:', error);
        setGettingLocation(false);
      }
    );
  };

  const convertToMiles = (distance: number) => (distance / 1609.34).toFixed(2);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nearestPokes.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + nearestPokes.length) % nearestPokes.length);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-lg relative">
        <div className="flex flex-col items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleGetLocation}
          >
            Find Nearest Poke Bowl
          </button>
          {gettingLocation && <div className="mt-4">Getting location...</div>}
          {loading && <div className="mt-4">Loading...</div>}
        </div>
        {nearestPokes.length > 0 && !loading && (
          <div className="mt-4">
            <div className="relative flex items-center">
              <button
                className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full"
                onClick={handlePrevious}
              >
                ◀
              </button>
              <div className="w-full transition-transform duration-500 ease-in-out transform">
                <div key={nearestPokes[currentIndex].id} className="text-center">
                  <img src={nearestPokes[currentIndex].image_url} alt={nearestPokes[currentIndex].name} className="w-full h-48 object-cover rounded-3xl mb-4"/>
                  <h1 className="text-xl font-bold">{nearestPokes[currentIndex].name}</h1>
                  <p>{nearestPokes[currentIndex].location.address1}</p>
                  <p>{convertToMiles(nearestPokes[currentIndex].distance)} miles away</p>
                  <p className={nearestPokes[currentIndex].is_closed ? 'text-red-500' : 'text-green-500'}>
                    {nearestPokes[currentIndex].is_closed ? 'Closed' : 'Open'}
                  </p>
                  <a
                    className="text-blue-500 underline"
                    href={`https://www.google.com/maps/dir/?api=1&destination=${nearestPokes[currentIndex].coordinates.latitude},${nearestPokes[currentIndex].coordinates.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              <button
                className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full"
                onClick={handleNext}
              >
                ▶
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokeFinder;
