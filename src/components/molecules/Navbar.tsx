"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // For smoother scrolling
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Common style for navigation buttons
  const navButtonStyle = {
    color: 'white',
    fontWeight: '500',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem 0',
    position: 'relative' as const,
    letterSpacing: '0.5px',
    textTransform: 'none' as const,
    fontSize: '1rem',
    fontFamily: 'Inter, system-ui, sans-serif',
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1rem 0',
      transition: 'all 0.3s ease',
      backgroundColor: scrolled ? 'rgba(30, 30, 30, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo on the left */}
        <div className="logo" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, var(--neon-lime), var(--electric-blue))',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(58, 141, 255, 0.3)',
            }}>
              <span style={{
                color: 'var(--dark-gray)',
                fontWeight: 'bold',
                fontSize: '1.4rem',
              }}>V</span>
            </div>
            <div style={{
              fontWeight: 'bold',
              fontSize: '1.2rem',
              color: 'white',
              letterSpacing: '0.5px',
            }}>
              <span style={{ color: 'var(--neon-lime)' }}>Vibe</span>Labb
            </div>
          </Link>
        </div>

        {/* Nav links on the right */}
        <ul style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}>
          <li>
            <button
              onClick={() => scrollToSection('teachers')}
              style={navButtonStyle}
            >
              profesores
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '2px',
                backgroundColor: 'var(--neon-lime)',
                transition: 'width 0.3s ease',
              }} className="hover-line"></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('faq')}
              style={navButtonStyle}
            >
              faq
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '2px',
                backgroundColor: 'var(--neon-lime)',
                transition: 'width 0.3s ease',
              }} className="hover-line"></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('footer')}
              style={navButtonStyle}
            >
              contacto
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '2px',
                backgroundColor: 'var(--neon-lime)',
                transition: 'width 0.3s ease',
              }} className="hover-line"></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('subscribe')}
              style={{
                display: 'block',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, var(--neon-lime), rgba(168, 255, 96, 0.8))',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                color: '#121827',
                fontWeight: '600',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 10px rgba(168, 255, 96, 0.25)',
                border: 'none',
                cursor: 'pointer',
              }} 
              className="subscribe-button"
            >
              Me interesa
            </button>
          </li>
        </ul>
      </div>

      {/* CSS for hover effects */}
      <style jsx>{`
        button:hover .hover-line {
          width: 100%;
        }
        
        .logo {
          transition: transform 0.3s ease;
        }
        
        .logo:hover {
          transform: translateY(-2px);
        }
        
        .subscribe-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(168, 255, 96, 0.35);
        }
        
        @media (max-width: 640px) {
          nav > div {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  );
} 