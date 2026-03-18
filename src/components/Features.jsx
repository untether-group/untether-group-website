import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MousePointer2 } from 'lucide-react';

const ShufflerCard = () => {
  const [cards, setCards] = useState([
    { id: 1, label: 'Creating Lifeforms', status: '...' },
    { id: 2, label: 'Environmental Design', status: '---' },
    { id: 3, label: 'Emotion Driven', status: '+++' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[320px] bg-surface border border-dark/10 rounded-[2rem] shadow-sm p-8 flex flex-col justify-between overflow-hidden">
      <div className="z-20">
        <h3 className="font-sans font-bold text-xl uppercase tracking-tighter">Living Landscapes</h3>
        <p className="font-mono text-xs text-dark/60 mt-2">World building: Unique and highly immersive environments</p>
      </div>
      <div className="relative h-28 w-full mt-auto">
        {cards.map((card, i) => (
          <div 
            key={card.id}
            className="absolute left-0 right-0 p-4 border border-dark/10 rounded-xl bg-surface transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex justify-between items-center"
            style={{
              transform: `translateY(${i * 12}px) scale(${1 - i * 0.05})`,
              zIndex: 10 - i,
              opacity: 1 - i * 0.2,
              boxShadow: i === 0 ? '0 10px 20px -10px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            <span className="font-mono text-xs font-bold">{card.label}</span>
            <span className="font-mono text-[10px] bg-dark text-primary px-2 py-1 rounded-full">{card.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TypewriterCard = () => {
  const messages = [
    "INITIALIZING SENSORS...",
    "DETECTING PRESENCE...",
    "ADJUSTING LIGHT LEVELS...",
    "ENVIRONMENT SYNCED."
  ];
  const [text, setText] = useState('');
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < messages[msgIndex].length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + messages[msgIndex][charIndex]);
        setCharIndex(c => c + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCharIndex(0);
        setMsgIndex((prev) => (prev + 1) % messages.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, msgIndex]);

  return (
    <div className="relative w-full h-[320px] bg-surface border border-dark/10 rounded-[2rem] shadow-sm p-8 flex flex-col">
      <div className="flex justify-between items-start z-20">
        <div>
          <h3 className="font-sans font-bold text-xl uppercase tracking-tighter">Sensory-Reactive</h3>
          <p className="font-mono text-xs text-dark/60 mt-2">Interactive: Art that responds to human presence</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <span className="font-mono text-[10px] uppercase font-bold text-accent">Live Feed</span>
        </div>
      </div>
      
      <div className="mt-auto bg-dark rounded-xl p-4 min-h-[100px] border border-dark/20 flex items-start">
        <p className="font-mono text-xs text-primary leading-relaxed">
          <span className="text-accent mr-2">{'>'}</span>
          {text}
          <span className="inline-block w-2 h-3 bg-accent ml-1 animate-pulse"></span>
        </p>
      </div>
    </div>
  );
};

const SchedulerCard = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDay, setActiveDay] = useState(-1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      tl.set(cursorRef.current, { x: 0, y: 150, opacity: 0 })
        .to(cursorRef.current, { opacity: 1, duration: 0.3 })
        .to(cursorRef.current, { x: 90, y: 40, duration: 1, ease: "power2.inOut" })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1, onStart: () => setActiveDay(3) })
        .to(cursorRef.current, { x: 180, y: 110, duration: 1, ease: "power2.inOut", delay: 0.5 })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.2 });

        return () => {
          setActiveDay(-1);
        }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[320px] bg-surface border border-dark/10 rounded-[2rem] shadow-sm p-8 flex flex-col">
      <div className="z-20">
        <h3 className="font-sans font-bold text-xl uppercase tracking-tighter">Immersion</h3>
        <p className="font-mono text-xs text-dark/60 mt-2">Software: AI tools used by highly skilled and experienced humans</p>
      </div>
      
      <div className="mt-auto relative">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {days.map((day, i) => (
            <div 
              key={i} 
              className={`aspect-square rounded-lg border flex items-center justify-center font-mono text-xs transition-colors duration-300 ${
                activeDay === i ? 'bg-accent text-primary border-accent' : 'border-dark/10 text-dark/40 bg-white/50'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-dark text-primary font-mono text-[10px] uppercase px-4 py-2 rounded-lg get-save-btn">
            Compile
          </button>
        </div>

        {/* Animated Cursor */}
        <div ref={cursorRef} className="absolute top-0 left-0 z-50 pointer-events-none drop-shadow-md text-dark">
          <MousePointer2 size={24} fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="px-6 py-24 md:px-16 lg:px-24 bg-primary mx-auto max-w-[1400px]">
      <div className="mb-16">
        <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tighter uppercase">
          Interactive Artworks
        </h2>
        <p className="font-mono text-sm mt-4 text-dark/60 max-w-md">
          Three systems drive the Untether experience: Interaction, software, and world building. Our artworks evolve and react to human presence, creating an immersive experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="feature-card">
          <TypewriterCard />
        </div>
        <div className="feature-card">
          <SchedulerCard />
        </div>
        <div className="feature-card">
          <ShufflerCard />
        </div>
      </div>
    </section>
  );
}
