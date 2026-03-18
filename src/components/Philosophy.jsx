// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- NEW: Helper Component to split strings into individual animated letters ---
const SplitText = ({ text, className }) => (
  <span className={`inline-block ${className || ''}`}>
    {text.split('').map((char, i) => (
      <span 
        key={i} 
        className="phil-letter inline-block origin-center will-change-transform"
        style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
      >
        {char}
      </span>
    ))}
  </span>
);

class Boid {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    const angle = Math.random() * 2 * Math.PI;
    this.vx = Math.cos(angle) * 2;
    this.vy = Math.sin(angle) * 2;
    this.visualVx = this.vx; 
    this.visualVy = this.vy;
    this.size = 18 + Math.random() * 8;
  }

  update(boids, width, height, mouseRef, foodRef) {
    const separationDist = 40;
    const alignmentDist = 80;
    const cohesionDist = 80;
    let sepX = 0, sepY = 0, sepCount = 0;
    let aliX = 0, aliY = 0, aliCount = 0;
    let cohX = 0, cohY = 0, cohCount = 0;

    for (const other of boids) {
      if (other === this) continue;
      const dx = other.x - this.x;
      const dy = other.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < separationDist) {
        sepX -= dx;
        sepY -= dy;
        sepCount++;
      }
      if (dist < alignmentDist) {
        aliX += other.vx;
        aliY += other.vy;
        aliCount++;
      }
      if (dist < cohesionDist) {
        cohX += other.x;
        cohY += other.y;
        cohCount++;
      }
    }

    if (sepCount > 0) {
      this.vx += (sepX / sepCount) * 0.08;
      this.vy += (sepY / sepCount) * 0.08;
    }
    if (aliCount > 0) {
      this.vx += ((aliX / aliCount) - this.vx) * 0.05;
      this.vy += ((aliY / aliCount) - this.vy) * 0.05;
    }
    if (cohCount > 0) {
      this.vx += ((cohX / cohCount - this.x) * 0.01);
      this.vy += ((cohY / cohCount - this.y) * 0.01);
    }

    if (foodRef.current.radius > 0) {
      const fx = foodRef.current.x;
      const fy = foodRef.current.y;
      const dx = fx - this.x;
      const dy = fy - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 5) {
        this.vx += (dx / dist) * 0.6;
        this.vy += (dy / dist) * 0.6;
      }
    }

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    if (mx !== null && my !== null) {
      const dx = this.x - mx;
      const dy = this.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        this.vx += (dx / dist) * 0.7;
        this.vy += (dy / dist) * 0.7;
      }
    }

    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > 3) {
      this.vx *= 2.5 / speed;
      this.vy *= 2.5 / speed;
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }
  
  draw(boidsCtx) {
    this.visualVx += (this.vx - this.visualVx) * 0.1;
    this.visualVy += (this.vy - this.visualVy) * 0.1;

    boidsCtx.save();
    boidsCtx.translate(this.x, this.y);
    boidsCtx.rotate(Math.atan2(this.visualVy, this.visualVx));
    
    boidsCtx.beginPath();
    boidsCtx.moveTo(-this.size, 0); 
    boidsCtx.bezierCurveTo(
      -this.size * 0.7, -this.size * 0.3, 
      0, -this.size * 0.3, 
      0, 0 
    );
    boidsCtx.bezierCurveTo(
      0, this.size * 0.3, 
      -this.size * 0.7, this.size * 0.3, 
      -this.size, 0
    );

    boidsCtx.closePath();
    boidsCtx.fillStyle = 'rgba(128, 60, 255, 0.85)';
    boidsCtx.shadowColor = '#a855f7';
    boidsCtx.shadowBlur = 8;
    boidsCtx.fill();
    boidsCtx.restore();
  }
}

export default function Philosophy() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });
  const foodRef = useRef({ x: null, y: null, radius: 0 });
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !sectionRef.current) return;
    
    const boidsCtx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // --- NEW: Array to cache letter positions ---
    let letterData = [];

    const updateLetterPositions = () => {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const DOMletters = sectionRef.current.querySelectorAll('.phil-letter');
      
      // Temporarily clear transforms to get accurate, unscaled bounding boxes
      DOMletters.forEach(el => el.style.transform = 'translate(0px, 0px) scale(1)');
      
      letterData = Array.from(DOMletters).map(el => {
        const lRect = el.getBoundingClientRect();
        return {
          el,
          // Calculate center of the letter relative to the section/canvas
          cx: lRect.left - sectionRect.left + lRect.width / 2,
          cy: lRect.top - sectionRect.top + lRect.height / 2,
          currentScale: 1,
          currentTx: 0,
          currentTy: 0
        };
      });
    };

    // Calculate letters shortly after mount so fonts have time to load layout
    setTimeout(updateLetterPositions, 150);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      updateLetterPositions(); // Recalculate letters if screen changes
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      foodRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 12
      };
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    const NUM_BOIDS = 44;
    let boids = Array.from({ length: NUM_BOIDS }, () => new Boid(width, height));

    let running = true;
    function animate() {
      if (!running) return;
      boidsCtx.clearRect(0, 0, width, height);

      if (foodRef.current.radius > 0) {
        boidsCtx.beginPath();
        boidsCtx.arc(foodRef.current.x, foodRef.current.y, foodRef.current.radius, 0, Math.PI * 2);
        boidsCtx.fillStyle = '#F3E9FF';
        boidsCtx.shadowColor = '#a855f7';
        boidsCtx.shadowBlur = 15;
        boidsCtx.fill();
        boidsCtx.closePath();
        foodRef.current.radius -= 0.04; 
      }

      for (const boid of boids) {
        boid.update(boids, width, height, mouseRef, foodRef);
        boid.draw(boidsCtx);
      }

      // --- NEW: Process Letter Lens Effect ---
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const data of letterData) {
        let targetScale = 1;
        let targetTx = 0;
        let targetTy = 0;

        // If mouse is on screen, calculate fisheye effect
        if (mx !== null && my !== null) {
          const dx = data.cx - mx;
          const dy = data.cy - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const maxDist = 120; // How close the mouse needs to be to trigger the lens
          
          if (dist < maxDist) {
            const factor = 1 - (dist / maxDist); // 0 to 1 based on proximity
            targetScale = 1 + factor * 0.6; // Scale up to 1.6x
            targetTx = (dx / dist) * (factor * 12); // Push away on X slightly
            targetTy = (dy / dist) * (factor * 12); // Push away on Y slightly
          }
        }

        // Smoothly Lerp the values so they don't snap rigidly
        data.currentScale += (targetScale - data.currentScale) * 0.15;
        data.currentTx += (targetTx - data.currentTx) * 0.15;
        data.currentTy += (targetTy - data.currentTy) * 0.15;

        // Apply CSS transform directly to the DOM node
        data.el.style.transform = `translate(${data.currentTx}px, ${data.currentTy}px) scale(${data.currentScale})`;
      }

      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <section id="philosophy" ref={sectionRef} className="relative w-full min-h-[80vh] bg-orange-500 overflow-hidden flex items-center justify-center p-8 md:p-16 lg:p-24 ">
      <div style={{position: 'absolute', inset: 0, zIndex: 20, pointerEvents: 'auto'}}>
        <canvas ref={canvasRef} style={{width: '100%', height: '100%', display: 'block'}} />
      </div>
      
      <div ref={bgRef} className="absolute inset-0 -top-[20%] h-[140%] w-full bg-orange-500 opacity-80 mix-blend-luminosity"></div>
      
      {/* Content */}
      <div ref={textRef} className="relative z-10 w-full max-w-5xl pointer-events-none">
        
        {/* --- NEW: Text broken out using the SplitText wrapper --- */}
        <p className="font-mono text-sm md:text-base text-primary/60 uppercase mb-8">
          <SplitText text="Most art focuses on: " className="mr-2" />
          <SplitText text="static observation." className="text-primary" />
        </p>

        <h2 className="text-4xl md:text-6xl lg:text-[7rem] leading-[1.1] text-primary">
          <SplitText text="We focus on:" className="font-sans font-bold uppercase tracking-tighter" />
          <br />
          <SplitText text="Active " className="font-drama italic text-accent pr-4" />
          <SplitText text="Resonance." className="font-drama italic text-primary" />
        </h2>

      </div>
    </section>
  );
}