"use client";

import Hero from '../organisms/Hero';
import TeachersSection from '../organisms/TeachersSection';
import FAQSection from '../organisms/FAQSection';
import Footer from '../organisms/Footer';
import SocialMediaLinks from '../molecules/SocialMediaLinks';
import Navbar from '../molecules/Navbar';

export default function LandingPage() {
  return (
    <main className="site-background">
      {/* Background pattern elements visible throughout the site */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        opacity: 0.05,
        backgroundImage: 'url("/assets/images/grid-pattern.png")',
        backgroundSize: '30px 30px',
        pointerEvents: 'none'
      }}></div>
      
      {/* Floating gradients */}
      <div style={{
        position: 'fixed',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,255,96,0.15) 0%, rgba(168,255,96,0) 70%)',
        zIndex: -1,
        filter: 'blur(40px)',
        animation: 'float 15s infinite ease-in-out',
        pointerEvents: 'none'
      }}></div>
      
      <div style={{
        position: 'fixed',
        bottom: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(157,107,255,0.15) 0%, rgba(157,107,255,0) 70%)',
        zIndex: -1,
        filter: 'blur(40px)',
        animation: 'float 20s infinite ease-in-out reverse',
        pointerEvents: 'none'
      }}></div>
      
      {/* Navbar - added at the top of the page */}
      <Navbar />
      
      <Hero />
      
      <TeachersSection />
      
      <FAQSection />
      
      {/* Add another divider before footer */}
      <div className="section-divider" style={{ transform: 'rotate(180deg)' }}></div>
      
      <Footer />
      <SocialMediaLinks />
    </main>
  );
} 