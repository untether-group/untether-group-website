// ...existing imports...
import { useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import TermsServices from './components/TermsServices';
import TermsWebsite from './components/TermsWebsite';

function ScrollToHashOnLoad() {
  useEffect(() => {
    const hash = sessionStorage.getItem('scrollToHash');
    if (hash) {
      sessionStorage.removeItem('scrollToHash');
      // Wait for DOM to be ready
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = hash;
        }
      }, 100);
    }
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <div className="w-full bg-surface text-dark font-sans relative min-h-screen flex flex-col">
        <Navbar />
        <ScrollToHashOnLoad />
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-manifest" element={<CookiePolicy />} />
          <Route path="/terms-of-services" element={<TermsServices />} />
          <Route path="/terms-of-website" element={<TermsWebsite />} />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Philosophy />
                <Protocol />
                <CTA />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
