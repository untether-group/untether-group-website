import { useEffect, useRef } from 'react';

function Foodtopia() {
    const gameContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize Godot game when component mounts
        const initializeGame = async () => {
            try {
                // Wait for Godot Engine to be available
                if (window.Engine) {
                    const engine = new window.Engine();
                    
                    // Configure the engine
                    await engine.init('/godot/foodtopia.wasm');
                    
                    // Start the game
                    engine.startGame({
                        'canvas': gameContainerRef.current?.querySelector('canvas'),
                        'executable': 'foodtopia',
                        'mainPack': '/godot/foodtopia.pck',
                        'args': [],
                        'canvasResizePolicy': 1, // Adaptive resize
                        'experimentalVK': false,
                        'persistentPaths': ['/userfs'],
                        'persistentDrops': false,
                        'gdnativeLibs': []
                    });
                }
            } catch (error) {
                console.error('Failed to initialize Godot game:', error);
            }
        };

        // Load Godot engine script if not already loaded
        if (!document.querySelector('script[src*="godot"]')) {
            const script = document.createElement('script');
            script.src = '/godot/foodtopia.js'; // Path to your Godot web export
            script.onload = initializeGame;
            script.onerror = () => console.error('Failed to load Godot engine script');
            document.head.appendChild(script);
        } else {
            initializeGame();
        }

        // Cleanup function
        return () => {
            // Add any necessary cleanup here
            if (window.Engine) {
                // Stop the engine if needed
            }
        };
    }, []);

    return (
        <main className="flex-grow bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Foodtopia
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Welcome to Foodtopia! Embark on a culinary adventure in this interactive game experience.
                    </p>
                </div>
                
                <div className="flex justify-center">
                    <div 
                        ref={gameContainerRef}
                        className="relative bg-black rounded-lg overflow-hidden shadow-2xl"
                        style={{ width: '1024px', height: '600px', maxWidth: '100%' }}
                    >
                        <canvas 
                            id="foodtopia-canvas"
                            className="w-full h-full"
                            width="1024"
                            height="600"
                        />
                        
                        {/* Loading indicator */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75" id="loading-overlay">
                            <div className="text-center text-white">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                                <p className="text-lg">Loading Foodtopia...</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 text-center">
                    <div className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold text-white mb-4">Game Controls</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                            <div>
                                <strong className="text-white">Movement:</strong> WASD or Arrow Keys
                            </div>
                            <div>
                                <strong className="text-white">Interact:</strong> Spacebar
                            </div>
                            <div>
                                <strong className="text-white">Menu:</strong> ESC
                            </div>
                            <div>
                                <strong className="text-white">Fullscreen:</strong> F11
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

// Extend Window interface to include Godot Engine
declare global {
    interface Window {
        Engine: {
            new(): {
                init(wasmPath: string): Promise<void>;
                startGame(config: {
                    canvas?: HTMLCanvasElement | null;
                    executable: string;
                    mainPack: string;
                    args: string[];
                    canvasResizePolicy: number;
                    experimentalVK: boolean;
                    persistentPaths: string[];
                    persistentDrops: boolean;
                    gdnativeLibs: unknown[];
                }): void;
            };
        };
    }
}

export default Foodtopia;