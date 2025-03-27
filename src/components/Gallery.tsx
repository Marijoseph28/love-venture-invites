
import React, { useRef, useEffect, useState } from 'react';

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
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

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d35ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Couple smiling"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Walking on beach"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Couple holding hands"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Engagement photo"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Romantic moment"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      alt: "Proposal moment"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white" ref={sectionRef}>
      <div className="section-container opacity-0 transition-opacity duration-1000">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Gallery</h2>
          <div className="w-16 h-0.5 bg-wedding-gold mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our journey together and the memories we've created along the way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg cursor-pointer opacity-0 group"
              style={{ 
                animationDelay: `${0.1 * index}s`,
                animation: 'fade-in 0.7s ease-out forwards'
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-30">
                <span className="text-white text-sm font-medium opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-[90vh] relative">
              <img 
                src={selectedImage} 
                alt="Gallery image" 
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button 
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
