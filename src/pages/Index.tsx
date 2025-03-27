
import React from 'react';
import Header from '@/components/Header';
import CoupleSection from '@/components/CoupleSection';
import EventDetails from '@/components/EventDetails';
import Gallery from '@/components/Gallery';
import RSVP from '@/components/RSVP';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CoupleSection />
      <EventDetails />
      <Gallery />
      <RSVP />
      <Footer />
    </div>
  );
};

export default Index;
