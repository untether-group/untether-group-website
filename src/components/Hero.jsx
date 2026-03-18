import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  const handleScrollToNextSection = () => {
    const nextSection = document.getElementById('features');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-text', 
        { y: 60, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15 }
      )
      .fromTo('.hero-btn', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }, 
        '-=0.8'
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden bg-dark">
      {/* Unity WebGL Background */}
      <iframe
        src="/unity-scene/index.html"
        className="absolute inset-0 w-full h-full border-none z-0"
        title="Unity WebGL Application"
        style={{ pointerEvents: 'auto', width: '100vw', height: '100vh', maxWidth: '100%', maxHeight: '100%', left: 0, top: 0 }}
        allowFullScreen
      ></iframe>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end p-4 landscape:p-3 md:p-16 lg:p-24 pb-10 landscape:pb-3 md:pb-20 pointer-events-none">
        <div className="max-w-4xl text-primary">
          <h1 className="flex flex-col gap-2 landscape:gap-0">
            <span className="hero-text font-sans font-bold text-xl landscape:text-sm md:text-5xl lg:text-6xl tracking-tighter uppercase whitespace-nowrap text-primary" style={{ pointerEvents: 'none' }}>
              Experience
            </span>
            <span className="hero-text font-drama italic text-[2.5rem] landscape:text-[1.4rem] md:text-8xl lg:text-[9rem] leading-none text-primary/90 block -ml-1 landscape:ml-0 md:-ml-2" style={{ pointerEvents: 'none' }}>
              Living Systems
            </span>
          </h1>
          <p className="hero-text mt-3 md:mt-8 text-xs landscape:text-xs md:text-lg font-sans text-primary/70 max-w-xl" style={{ pointerEvents: 'none' }}>
            A playful window into a world of characters that respond to your presence and actions.
          </p>
          <div className="hero-btn mt-5 landscape:mt-2 md:mt-12">
            <a href="#contact" className="magnetic-btn magnetic-btn-accent group">
              <span>Contact &rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleScrollToNextSection}
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary text-2xl leading-none pointer-events-auto"
      >
        ↓
      </button>
    </section>
  );
}
