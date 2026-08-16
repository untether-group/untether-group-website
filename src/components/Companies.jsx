import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MousePointer2, Gamepad2, Swords, Trophy, Target, Shield, Crown, Zap } from 'lucide-react';
import uberactLogo from '../assets/company-logos/uberact-logotype.svg';
import relentlessGamesLogo from '../assets/company-logos/relentless-games-logo.svg';
import untetherStudioLogo from '../assets/company-logos/untether-studio-logo.svg';

const Shuffler = () => {
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
    <div className="relative h-28 w-full">
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
  );
};

const TypewriterTerminal = ({ messages }) => {
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
  }, [charIndex, msgIndex, messages]);

  return (
    <div className="bg-dark rounded-xl p-4 min-h-[100px] border border-dark/20 flex items-start">
      <p className="font-mono text-xs text-primary leading-relaxed">
        <span className="text-accent mr-2">{'>'}</span>
        {text}
        <span className="inline-block w-2 h-3 bg-accent ml-1 animate-pulse"></span>
      </p>
    </div>
  );
};

const CompanyLogoCard = ({ name, logo }) => (
  <div className="bg-surface border border-dark/10 rounded-[2rem] shadow-sm p-8 flex flex-col items-center justify-center h-full">
    <div className="h-24 w-full flex items-center justify-center mb-6">
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-h-full max-w-full h-full w-auto object-contain"
      />
    </div>
    <p className="font-mono text-xs text-dark/60 text-left w-full min-h-[80px] mb-6">
      A leading studio crafting interactive and immersive experiences.
    </p>
  </div>
);

const UberactCard = () => {
  const messages = [
    "INITIALIZING UBERACT...",
    "CONNECTING SYSTEMS...",
    "MAPPING INTERACTIONS...",
    "UBERACT READY."
  ];

  return (
    <a href="https://uberact.com/" target="_blank" rel="noopener noreferrer" className="bg-surface border border-dark/10 rounded-[2rem] shadow-sm p-8 flex flex-col items-center h-full min-h-[320px] cursor-pointer">
      <div className="h-24 w-full flex items-center justify-center mb-6">
        <img
          src={uberactLogo}
          alt="Uberact logo"
          className="max-h-full max-w-full h-full w-auto object-contain"
        />
      </div>
      <p className="font-mono text-xs text-dark/60 text-left w-full min-h-[80px] mb-6">
        A leading studio crafting interactive, immersive experiences. We transform physical spaces into living environments that intuitively respond to human presence.
      </p>
      <p className="w-full text-left mb-4">
        https://uberact.com
      </p>
      <div className="w-full mt-auto">
        <TypewriterTerminal messages={messages} />
      </div>
    </a>
  );
};

const Scheduler = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const days = [Gamepad2, Swords, Trophy, Target, Shield, Crown, Zap];
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
    <div ref={containerRef} className="relative w-full">
      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((Icon, i) => (
          <div 
            key={i} 
            className={`aspect-square rounded-lg border flex items-center justify-center font-mono text-xs transition-colors duration-300 ${
              activeDay === i ? 'bg-accent text-primary border-accent' : 'border-dark/10 text-dark/40 bg-white/50'
            }`}
          >
            <Icon size={18} />
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
  );
};

const RelentlessGamesCard = () => (
    <a href="https://relentless.games/" target="_blank" rel="noopener noreferrer" className="bg-surface border border-dark/10 rounded-[2rem] shadow-sm p-8 flex flex-col items-center h-full min-h-[320px] cursor-pointer">
      <div className="h-24 w-full flex items-center justify-center mb-6">
        <img
          src={relentlessGamesLogo}
          alt="Relentless Games logo"
          className="max-h-full max-w-full h-full w-auto object-contain"
        />
      </div>
    <p className="font-mono text-xs text-dark/60 text-left w-full min-h-[80px] mb-6">
      An innovative gaming startup developing next-generation VR experiences. Our mission is to make virtual reality accessible through frictionless onboarding and intuitive gameplay.
    </p>
    <p className="w-full text-left mb-4">
      https://relentless.games
    </p>
    <div className="w-full mt-auto">
      <Scheduler />
    </div>
  </a>
);

const UntetherStudioCard = () => (
    <a href="https://untether.studio/" target="_blank" rel="noopener noreferrer" className="bg-surface border border-dark/10 rounded-[2rem] shadow-sm p-8 flex flex-col items-center h-full min-h-[320px] cursor-pointer">
      <div className="h-24 w-full flex items-center justify-center mb-6">
        <img
          src={untetherStudioLogo}
          alt="Untether Studio logo"
          className="max-h-full max-w-full h-full w-auto object-contain"
        />
      </div>
    <p className="font-mono text-xs text-dark/60 text-left w-full min-h-[80px] mb-6">
      A software studio that transforms client ideas into interactive realities. We are a highly experienced software studio delivering world class VR, gaming, web, and mobile applications tailored to your unique vision.
    </p>
    <p className="w-full text-left mb-4">
      https://untether.studio
    </p>
    <div className="w-full mt-auto">
      <Shuffler />
    </div>
  </a>
);

export default function Companies() {
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
    <section id="companies" ref={sectionRef} className="px-6 py-24 md:px-16 lg:px-24 bg-primary mx-auto max-w-[1400px]">
      <div className="mb-16">
        <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tighter uppercase">
          Companies
        </h2>
        <p className="font-mono text-sm mt-4 text-dark/60 max-w-md">
          Three systems drive the Untether experience: Interaction, software, and world building. Our artworks evolve and react to human presence, creating an immersive experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 items-stretch">
        <div className="feature-card h-full">
          <UberactCard />
        </div>
        <div className="feature-card h-full">
          <RelentlessGamesCard />
        </div>
        <div className="feature-card h-full">
          <UntetherStudioCard />
        </div>
      </div>
      
    </section>
  );
}
