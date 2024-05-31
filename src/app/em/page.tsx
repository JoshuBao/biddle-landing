import PokeFinder from './PokeFinder';

const HomePage = () => {
    return (
        <div className="bg-pink-200 flex flex-col items-center justify-center min-h-screen py-4">
            <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="text-4xl font-bold">The Poke Bowl Compass</h1>
                <p className="text-lg">Tap the button below to find Poke</p>
                <PokeFinder />
            </div>
        </div>
    );
};

export default HomePage;
