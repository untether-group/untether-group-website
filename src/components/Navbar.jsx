import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Contact button in top right */}
      <div className="hidden md:block fixed top-6 right-8 z-[110]">
        <a href="#contact" className="magnetic-btn magnetic-btn-accent px-4 py-1 text-xs flex items-center justify-center">
          <span>Contact</span>
        </a>
      </div>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[600px]">
        <div 
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] gap-x-12 ${
            scrolled 
              ? 'glass-nav text-dark' 
              : 'bg-transparent text-primary'
          }`}
        >
        <div className="font-sans font-bold tracking-tighter text-xl">
          untether.
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-sans font-medium">
          <a href="" className="hover:text-accent transition-colors">Home</a>
          <a href="#features" className="hover:text-accent transition-colors">Features</a>
          <a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a>
          <a href="#protocol" className="hover:text-accent transition-colors">Protocol</a>
        </div>
        
        {/* Contact button moved to top right, so removed from here */}

        <button className="md:hidden p-2">
          <Menu size={20} className={scrolled ? 'text-dark' : 'text-primary'} />
        </button>
      </div>
      </nav>
    </>
  );
}
