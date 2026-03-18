import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RotatingCircles = () => (
  <svg viewBox="0 0 200 200" className="w-64 h-64 opacity-80 mix-blend-screen">
    <g className="origin-center animate-[spin_20s_linear_infinite]">
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
      <rect x="85" y="85" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" className="origin-center animate-[spin_10s_linear_infinite_reverse]" />
    </g>
  </svg>
);

const LaserGrid = () => (
  <div className="relative w-64 h-64 bg-dark/20 border border-primary/20 overflow-hidden">
    <div className="absolute inset-0 z-0 flex flex-wrap gap-2 p-2 opacity-30">
      {Array.from({ length: 144 }).map((_, i) => (
        <div key={i} className="w-2 h-2 rounded-full bg-primary/50"></div>
      ))}
    </div>
    <div className="absolute top-0 left-0 right-0 h-1 bg-accent z-10 shadow-[0_0_15px_#E63B2E] animate-[scan_3s_ease-in-out_infinite_alternate] drop-shadow-lg"></div>
  </div>
);

const PulsingWaveform = () => (
  <svg viewBox="0 0 200 100" className="w-80 h-40">
    <path 
      d="M0,50 L40,50 L50,20 L60,80 L70,50 L100,50 L110,10 L120,90 L130,50 L200,50" 
      fill="none" 
      stroke="#E63B2E" 
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="dash-animate"
      style={{
        strokeDasharray: "400",
        strokeDashoffset: "400",
        animation: "dash 3s linear infinite"
      }}
    />
  </svg>
);

export default function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, index) => {
        // Scale and blur effect for the card underneath when next card scrolls in
        if (index < cards.length - 1) {
          const innerContent = card.querySelector('.card-inner');
          gsap.to(innerContent, {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(20px)',
            ease: 'none',
            scrollTrigger: {
              trigger: cards[index + 1],
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            }
          });
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="relative w-full bg-dark text-primary">
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(256px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
      
      {/* Card 1 */}
      <div className="protocol-card sticky top-0 h-screen w-full flex items-center justify-center p-8 md:p-16 bg-dark border-b border-primary/10 overflow-hidden">
        <div className="card-inner max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xl text-accent block mb-4">01</span>
            <h2 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter uppercase mb-6">Initialize</h2>
            <p className="font-mono text-sm text-primary/70 max-w-md leading-relaxed">
              Establishing base layer connection. Begin mind sync to map parameters. Understand the foundation of art space. Commence design of unique living system.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <RotatingCircles />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="protocol-card sticky top-0 h-screen w-full flex items-center justify-center p-8 md:p-16 bg-[#161616] border-b border-primary/10 drop-shadow-2xl overflow-hidden">
        <div className="card-inner max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xl text-accent block mb-4">02</span>
            <h2 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter uppercase mb-6">Calibrate</h2>
            <p className="font-mono text-sm text-primary/70 max-w-md leading-relaxed">
              Iteration of art systems. Real-time experimentation and feedback. Adjust parameters to refine responsiveness and aesthetics. Co-evolve with the system to create a unique living artwork.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <LaserGrid />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="protocol-card sticky top-0 h-screen w-full flex items-center justify-center p-8 md:p-16 bg-[#1a1a1a] drop-shadow-2xl overflow-hidden">
        <div className="card-inner max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xl text-accent block mb-4">03</span>
            <h2 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter uppercase mb-6">Integrate</h2>
            <p className="font-mono text-sm text-primary/70 max-w-md leading-relaxed">
              Seamless resonance achieved. The digital divide dissolves, leaving 
              a living atmospheric architecture that reflects your intent.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <PulsingWaveform />
          </div>
        </div>
      </div>
    </section>
  );
}
