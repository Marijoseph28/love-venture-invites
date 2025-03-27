
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-wedding-beige/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-wedding-gold font-serif text-2xl tracking-widest flex items-center gap-2">
            <span>A</span>
            <Heart className="w-4 h-4" />
            <span>J</span>
          </div>
          
          <p className="font-light text-muted-foreground">
            Thank you for celebrating our love story
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 justify-center text-sm text-muted-foreground">
            <a href="#home" className="hover:text-wedding-gold transition-colors">Home</a>
            <a href="#couple" className="hover:text-wedding-gold transition-colors">Couple</a>
            <a href="#details" className="hover:text-wedding-gold transition-colors">Details</a>
            <a href="#gallery" className="hover:text-wedding-gold transition-colors">Gallery</a>
            <a href="#rsvp" className="hover:text-wedding-gold transition-colors">RSVP</a>
          </div>
          
          <p className="text-xs text-muted-foreground pt-6 border-t border-wedding-beige/30 max-w-md mx-auto">
            Amanda & James — June 15, 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
