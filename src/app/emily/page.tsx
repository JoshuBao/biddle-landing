import PokeFinder from './PokeFinder';

const HomePage = () => {
    return (
        <div className="bg-pink-200 flex flex-col items-center justify-center min-h-screen py-4">
            <h1 className="text-4xl font-bold">Hi Emily</h1>
            <p className="text-lg my-2">I made you a poke bowl compass</p>
            <PokeFinder />
        </div>
    );
};

export default HomePage;
