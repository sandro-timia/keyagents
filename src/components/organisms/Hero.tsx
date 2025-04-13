"use client";

import EmailSignupForm from '../molecules/EmailSignupForm';
import Script from 'next/script';
import { useEffect } from 'react';

// Declare Calendly on the window object
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function Hero() {
  // Initialize Calendly once component mounts
  useEffect(() => {
    // Add Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Function to handle Calendly popup
  const openCalendly = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/sandro-calzada/30min'});
    }
    return false;
  };

  return (
    <div className="hero" style={{ padding: '6rem 0 8rem' }}>
      <div className="container grid">
        <div style={{ 
          position: 'relative',
          zIndex: 1, 
          borderRadius: '1rem',
          padding: '2rem',
          background: 'rgba(47,47,47,0.7)',
          backdropFilter: 'blur(10px)'
        }}>
          <h1 className="mb-8" style={{ color: 'white' }}>
            Launch Your Digital Business with{' '}
            <span style={{ color: 'var(--neon-lime)' }}>AI-Powered</span> Strategies
          </h1>
          <p className="mb-8" style={{ color: 'white' }}>
            KeyAgents helps entrepreneurs harness the power of AI to build, grow, and scale successful online businesses. Get notified when we launch!
          </p>
          <EmailSignupForm />
          
          {/* Calendly Icon with Link */}
          <div style={{ 
            marginTop: '2rem',
            backgroundColor: 'rgba(168, 255, 96, 0.15)',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            cursor: 'pointer',
            backdropFilter: 'blur(5px)'
          }}
          onClick={openCalendly}>
            <div style={{ 
              backgroundColor: 'var(--neon-lime)',
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="var(--dark-gray)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <circle cx="12" cy="16" r="2"></circle>
              </svg>
            </div>
            <div>
              <h3 style={{ color: 'var(--neon-lime)', marginBottom: '0.25rem' }}>Got Questions?</h3>
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()}
                style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}
              >
                Schedule time with me
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={{ 
          height: '400px', 
          background: 'linear-gradient(to bottom right, var(--electric-blue), var(--digital-violet))',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="parallax-effect" style={{ 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            <h2 style={{ color: 'var(--neon-lime)', textAlign: 'center', fontSize: '2.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>KeyAgents</h2>
          </div>
          {/* Background elements for the card */}
          <div style={{ 
            position: 'absolute', 
            top: '-50%', 
            left: '-50%', 
            width: '200%', 
            height: '200%', 
            background: 'radial-gradient(circle, rgba(168,255,96,0.2) 0%, rgba(168,255,96,0) 50%)',
            transform: 'rotate(30deg)',
            zIndex: 0
          }}></div>
        </div>
      </div>
      
      {/* Calendly JavaScript */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </div>
  );
} 