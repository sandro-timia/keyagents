"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Add scroll effect to navbar and check screen size
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial checks
    handleScroll();
    checkMobile();
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
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
    fontSize: isMobile ? '0.7rem' : '1rem',
    fontFamily: 'Inter, system-ui, sans-serif',
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: isMobile ? '0.5rem 0' : '1rem 0',
      transition: 'all 0.3s ease',
      backgroundColor: scrolled ? 'rgba(30, 30, 30, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        {/* Logo on the left */}
        <div className="logo" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexShrink: 0,
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <Image 
              src="/vibelabb_logo.png" 
              alt="VibeLabb Logo" 
              width={isMobile ? 120 : 200} 
              height={isMobile ? 30 : 50}
              style={{
                objectFit: 'contain',
              }}
            />
          </Link>
        </div>

        {/* Nav links on the right */}
        <ul style={{
          display: 'flex',
          gap: isMobile ? '0.7rem' : '2.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          flexWrap: 'nowrap',
          alignItems: 'center',
        }}>
          <li>
            <button
              onClick={() => scrollToSection('teachers')}
              style={navButtonStyle}
            >
              {isMobile ? 'profesores' : 'profesores'}
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
          {!isMobile && (
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
          )}
          <li>
            <button
              onClick={() => scrollToSection('footer')}
              style={navButtonStyle}
            >
              {isMobile ? 'contacto' : 'contacto'}
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
                padding: isMobile ? '0.35rem 0.4rem' : '0.5rem 0.5rem',
                borderRadius: '6px',
                color: '#121827',
                fontWeight: '600',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 10px rgba(168, 255, 96, 0.25)',
                border: 'none',
                cursor: 'pointer',
                fontSize: isMobile ? '0.8rem' : '1rem',
                whiteSpace: isMobile ? 'normal' : 'nowrap',
                textAlign: isMobile ? 'center' : 'inherit',
                width: isMobile ? '60px' : 'auto',
                lineHeight: isMobile ? '1.1' : 'inherit',
              }} 
              className="subscribe-button"
            >
              {isMobile ? (
                <>
                  Me<br />interesa
                </>
              ) : 'Me interesa'}
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
      `}</style>
    </nav>
  );
} 