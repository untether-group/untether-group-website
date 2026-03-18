import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [route, setRoute] = useState(window.location.hash);

  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (route === '#/privacy') {
    return (
      <div className="w-full bg-surface text-dark font-sans relative">
        <Navbar />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

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
