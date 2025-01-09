import React from 'react';

function Home() {
    return (
        <main className="flex-grow">
            <div className="relative h-screen">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                    alt="Hero background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Welcome to the Future
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                            Innovative technology companies with shared ownership
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
