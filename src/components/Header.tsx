
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className="relative">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-glass shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="text-wedding-gold font-serif text-xl">
            <span className="tracking-widest">A&J</span>
          </div>
          <ul className="hidden md:flex space-x-8 font-light">
            <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
            <li><a href="#couple" className="opacity-80 hover:opacity-100 transition-opacity">Couple</a></li>
            <li><a href="#details" className="opacity-80 hover:opacity-100 transition-opacity">Details</a></li>
            <li><a href="#gallery" className="opacity-80 hover:opacity-100 transition-opacity">Gallery</a></li>
            <li><a href="#rsvp" className="opacity-80 hover:opacity-100 transition-opacity">RSVP</a></li>
          </ul>
          <button className="md:hidden text-wedding-gold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')` 
            }}
          ></div>
          <div className="absolute inset-0 bg-wedding-light/70 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto opacity-0 animate-fade-in">
          <h3 className="text-sm md:text-base tracking-[0.2em] uppercase text-wedding-gold mb-8 font-light">The Wedding Of</h3>
          
          <h1 className="heading-xl mb-8">
            <span className="block opacity-0 animate-fade-in-delay-1">Amanda</span>
            <span className="inline-block mx-4 opacity-0 animate-fade-in-delay-2">
              <Heart className="w-8 h-8 md:w-12 md:h-12 text-wedding-gold" />
            </span>
            <span className="block opacity-0 animate-fade-in-delay-3">James</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light tracking-wide mb-8 opacity-0 animate-fade-in-delay-3">
            We're getting married on <span className="font-medium">June 15, 2024</span>
          </p>
          
          <div className="mt-10 opacity-0 animate-fade-in-delay-3">
            <a href="#rsvp" className="btn-primary">
              RSVP Now
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delay-3">
          <a 
            href="#couple" 
            className="flex flex-col items-center text-sm text-wedding-gold"
          >
            <span className="mb-2">Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
