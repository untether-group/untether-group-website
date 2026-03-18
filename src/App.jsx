import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full bg-surface text-dark font-sans relative">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
