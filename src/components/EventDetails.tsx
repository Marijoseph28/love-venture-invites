
import React, { useRef, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventDetails = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="details" className="py-20 bg-wedding-light" ref={sectionRef}>
      <div className="section-container opacity-0 transition-opacity duration-1000">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Event Details</h2>
          <div className="w-16 h-0.5 bg-wedding-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 opacity-0 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wedding-rose/20 text-wedding-gold mb-6">
                <Calendar size={24} />
              </div>
              <h3 className="heading-md mb-4">Ceremony</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center space-x-2">
                  <Calendar size={18} className="text-wedding-gold" />
                  <span>Saturday, June 15, 2024</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock size={18} className="text-wedding-gold" />
                  <span>2:00 PM - 3:30 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin size={18} className="text-wedding-gold" />
                  <span>St. Mary's Cathedral, 1111 Gough St, San Francisco</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                The ceremony will be intimate and elegant. Please arrive 30 minutes 
                early for seating. The ceremony will be followed by cocktail hour.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 opacity-0 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wedding-rose/20 text-wedding-gold mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Reception</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center space-x-2">
                  <Calendar size={18} className="text-wedding-gold" />
                  <span>Saturday, June 15, 2024</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock size={18} className="text-wedding-gold" />
                  <span>4:00 PM - 10:00 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin size={18} className="text-wedding-gold" />
                  <span>Golden Gate Club, 135 Fisher Loop, San Francisco</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Join us for an evening of dinner, dancing, and celebration. 
                Cocktail attire requested. Valet parking will be available.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-glass rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="heading-md text-center mb-6">Wedding Timeline</h3>
            <div className="space-y-0">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="font-medium text-lg mb-1">Guest Arrival</h4>
                <p className="text-sm text-muted-foreground mb-1">1:30 PM</p>
                <p className="text-sm">Guests arrive at St. Mary's Cathedral</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="font-medium text-lg mb-1">Ceremony</h4>
                <p className="text-sm text-muted-foreground mb-1">2:00 PM</p>
                <p className="text-sm">Wedding ceremony begins</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="font-medium text-lg mb-1">Cocktail Hour</h4>
                <p className="text-sm text-muted-foreground mb-1">3:30 PM</p>
                <p className="text-sm">Light refreshments and drinks at Golden Gate Club</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="font-medium text-lg mb-1">Reception</h4>
                <p className="text-sm text-muted-foreground mb-1">4:00 PM</p>
                <p className="text-sm">Dinner and celebration begins</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="font-medium text-lg mb-1">First Dance</h4>
                <p className="text-sm text-muted-foreground mb-1">5:30 PM</p>
                <p className="text-sm">Couple's first dance followed by parent dances</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="font-medium text-lg mb-1">Cake Cutting</h4>
                <p className="text-sm text-muted-foreground mb-1">7:00 PM</p>
                <p className="text-sm">Wedding cake cutting ceremony</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="font-medium text-lg mb-1">Dancing</h4>
                <p className="text-sm text-muted-foreground mb-1">7:30 PM - 10:00 PM</p>
                <p className="text-sm">Open dance floor and celebration</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://goo.gl/maps/3Yuqc7BnQ5tQSDv46" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <MapPin size={18} className="mr-2" />
            View Map
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
