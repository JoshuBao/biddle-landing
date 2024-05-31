'use client';

import { get } from 'http';
import { useState } from 'react';

interface PokePlace {
  name: string;
  location: {
    address1: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  image_url: string;
}

const PokeFinder = () => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [nearestPoke, setNearestPoke] = useState<PokePlace | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [gettingLocation, setGettingLocation] = useState<boolean>(false);

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
          const pokePlace = await response.json();
          console.log('Nearest Poke place:', pokePlace);
          setNearestPoke(pokePlace);
        } catch (error) {
          console.error('Error getting nearest Poke place:', error);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="bg-white p-8 rounded-3xl shadow-lg">
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
        {nearestPoke && !loading && (
          <div className="mt-4 text-center">
            <img src={nearestPoke.image_url} alt={nearestPoke.name} className="w-full h-48 object-cover rounded-3xl mb-4"/>
            <h1 className="text-xl font-bold">{nearestPoke.name}</h1>
            <p>{nearestPoke.location.address1}</p>
            <a
              className="text-blue-500 underline"
              href={`https://www.google.com/maps/dir/?api=1&destination=${nearestPoke.coordinates.latitude},${nearestPoke.coordinates.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokeFinder;
