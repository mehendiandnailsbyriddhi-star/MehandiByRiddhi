import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';
import WhatsAppStickyButton from './components/WhatsAppStickyButton';

function App() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#1F3D2B] font-body selection:bg-[#C9A646] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <WhatsAppStickyButton />
    </div>
  );
}

export default App;
