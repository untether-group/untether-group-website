import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="relative z-10 bg-orange-500 px-6 py-24 md:py-32 lg:py-48 flex items-center justify-center -mt-[100vh]">
      <div className="bg-surface border border-dark/10 rounded-[3rem] p-12 md:p-24 max-w-5xl w-full text-center shadow-sm">
        <h2 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase mb-6">
          Ready to Connect
        </h2>
        <p className="font-mono text-sm md:text-base text-dark/70 max-w-xl mx-auto mb-12 uppercase tracking-wide">
          Deploy an untethered living landscape in your environment.
        </p>
        <a href="mailto:contact@untether.com" className="magnetic-btn magnetic-btn-accent text-lg px-12 py-6">
          <span>Contact Us &rarr;</span>
        </a>
      </div>
    </section>
  );
}
