"use client";

// Option 1: Remove the unused import
// import EmailSignupForm from '../molecules/EmailSignupForm';

// Or Option 2: Comment it out
/* import EmailSignupForm from '../molecules/EmailSignupForm'; */

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

// Declare Calendly on the window object
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function Hero() {
  // Track all visible bullets
  const [visibleBullets, setVisibleBullets] = useState<number[]>([]);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  // Comment out unused email state
  // const [email, setEmail] = useState('');
  // Comment out unused state variables
  // const [error, setError] = useState('');
  // const [success, setSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Text content for the AI bullet points
  const bulletPoints = [
    "Crea un sitio web para tu negocio en días",
    "Ahorra miles de dólares en agencias de desarrollo y marketing digital",
    "Aprender una nueva forma de programar llamada vibe coding no necesitas ser ingeniero",
    "Automatiza tu negocio, crea empleados digitales que se encarguen de las redes sociales, ventas, gestión de pedidos y todo lo que puedas imaginar"
  ];
  
  // Initialize Calendly once component mounts
  useEffect(() => {
    // Add Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Create styles for the bullet point animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes neonPulse {
        0%, 100% { text-shadow: 0 0 5px rgba(168,255,96,0.8), 0 0 10px rgba(168,255,96,0.5), 0 0 15px rgba(168,255,96,0.3); }
        50% { text-shadow: 0 0 10px rgba(168,255,96,1), 0 0 20px rgba(168,255,96,0.8), 0 0 30px rgba(168,255,96,0.5); }
      }
      
      @keyframes scanline {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes blinkCursor {
        0%, 49% { opacity: 1; }
        50%, 100% { opacity: 0; }
      }
      
      .bullet-animated {
        animation-name: fadeInUp;
        animation-duration: 0.6s;
        animation-fill-mode: forwards;
      }
      
      .bullet-number {
        position: relative;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
    
    // Sequential animation for bullet points
    const startAnimation = () => {
      // Show bullets one by one with a delay
      for (let i = 0; i < bulletPoints.length; i++) {
        const timer = setTimeout(() => {
          setVisibleBullets(prev => [...prev, i]);
        }, i * 2000); // 2 second delay between bullet points
        
        // Store the last timeout to clear it if needed
        if (i === bulletPoints.length - 1) {
          animationRef.current = timer;
        }
      }
    };
    
    // Start the animation sequence after a brief delay
    const initialDelay = setTimeout(startAnimation, 1000);
    
    // Check for mobile viewport
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Clean up function
    return () => {
      if (link.parentNode) document.head.removeChild(link);
      if (style.parentNode) document.head.removeChild(style);
      if (initialDelay) clearTimeout(initialDelay);
      if (animationRef.current) clearTimeout(animationRef.current);
      window.removeEventListener('resize', checkMobile);
      
      // Clear all potential timeouts
      for (let i = 0; i < bulletPoints.length; i++) {
        clearTimeout(i * 2000 + 1000);
      }
    };
  }, [bulletPoints.length]); // Add bulletPoints.length as a dependency

  // Function to handle Calendly popup
  const openCalendly = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/sandro-calzada/30min'});
    }
    return false;
  };

  // Comment out unused function
  /* 
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Por favor, introduce tu email.');
      return;
    }
    
    if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      setError('Por favor, introduce un email válido.');
      return;
    }
    
    // Here you would send the email to your backend or email service
    console.log('Subscribing email:', email);
    setSuccess(true);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };
  */

  // 1. Increase the terminal height further for mobile
  useEffect(() => {
    // Add mobile detection for terminal height adjustment
    const checkMobile = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="hero" style={{ padding: '6rem 0 4rem' }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        minHeight: '500px',
        margin: '100 100px',
      }}>
        <div style={{ 
          position: 'relative',
          zIndex: 1, 
          borderRadius: '1rem',
          padding: '2rem',
          background: 'rgba(47,47,47,0.7)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        }}>
          <h1 className="mb-4" style={{ 
            color: 'white',
            fontSize: '2.2rem', 
            lineHeight: '1.3',
            fontWeight: '700'
          }}>
            Crea sitios web <span style={{ color: 'var(--neon-lime)' }}>profesionales</span> con <span style={{ color: 'var(--neon-lime)' }}>I.A</span>, y revoluciona tu emprendimiento
          </h1>
          
          <h2 className="mb-6" style={{
            color: 'var(--neon-lime)',
            fontSize: '1.8rem',
            lineHeight: '1.2',
            fontWeight: '600',
            textAlign: 'center'
          }}>
            !Domina el poder del vibe coding ahora!
          </h2>

          <p className="mb-8" style={{ color: 'white' }}>
            VibeLabb ayuda a los emprendedores a explotar el potencial de la IA para construir, crecer y escalar negocios exitosos en línea. ¡Recibe la notificación cuando lancemos!
          </p>

          {/* Vimeo video as requested in the orange instructions */}
          <div style={{ 
            marginBottom: '2rem', 
            borderRadius: '0.75rem',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            <iframe 
              title="vimeo-player" 
              src="https://player.vimeo.com/video/653744811?h=b6d18998f0" 
              width="100%" 
              height="300" 
              frameBorder="0" 
              allowFullScreen
              style={{ display: 'block' }}
            ></iframe>
          </div>
        </div>
        <div style={{ 
          background: 'linear-gradient(to bottom right, var(--electric-blue), var(--digital-violet))',
          borderRadius: '1rem',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '2rem',
          height: '100%',
          minHeight: isMobile ? '900px' : '780px',
          width: '100%',
        }}>
          {/* Futuristic design elements */}
          <div className="scan-line"></div>
          
          <h2 style={{ 
            color: 'var(--neon-lime)', 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            textShadow: '0 0 10px rgba(168,255,96,0.7), 0 0 20px rgba(168,255,96,0.5)',
            marginBottom: '2rem',
            animationName: 'neonPulse',
            animationDuration: '2s',
            animationIterationCount: 'infinite',
            fontFamily: 'monospace'
          }}>VibeLabb</h2>
          
          {/* AI Robot with animated effects */}
          <div className="ai-robot-container" style={{
            width: '90px',
            height: '90px',
            backgroundColor: 'var(--dark-gray)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
            position: 'relative',
            boxShadow: '0 0 20px rgba(168,255,96,0.5), inset 0 0 10px rgba(168,255,96,0.3)',
            animationName: 'float',
            animationDuration: '4s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite'
          }}>
            <svg 
              width="50" 
              height="50" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="var(--neon-lime)" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2" />
              <path d="M8 10v2a4 4 0 0 0 8 0v-2" />
            </svg>
            
            {/* Eye blinking effects */}
            <div style={{
              position: 'absolute',
              top: '35%',
              left: '35%',
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--neon-lime)',
              borderRadius: '50%',
              animationName: 'blink',
              animationDuration: '3s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out'
            }}></div>
            
            <div style={{
              position: 'absolute',
              top: '35%',
              right: '35%',
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--neon-lime)',
              borderRadius: '50%',
              animationName: 'blink',
              animationDuration: '3s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              animationDelay: '0.5s'
            }}></div>
          </div>
          
          {/* Terminal-like output area */}
          <div style={{
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: '0.5rem',
            padding: '1.25rem',
            fontFamily: 'monospace',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            height: isMobile ? '600px' : '480px',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
          }}>
            {/* Terminal header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: '0.5rem'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: '#FF5F57' }}></div>
                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: '#28CA41' }}></div>
              </div>
              <div style={{ marginLeft: 'auto' }}>VibeLabb Terminal</div>
            </div>
            
            {/* Terminal content with bullet points */}
            <div style={{ flexGrow: 1, overflow: 'visible' }}>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--neon-lime)' }}>$</span>
                <span>vibelabb --init --project=digital-business</span>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ color: 'var(--electric-blue)' }}>Cargando capacidades de Vibe Coding...</span>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ color: 'var(--neon-lime)' }}>Vibe Coding listo. Generando recomendaciones:</span>
              </div>
              
              {/* Bullet points with animation */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {bulletPoints.map((point, index) => (
                  <div
                    key={index}
                    className={visibleBullets.includes(index) ? 'bullet-animated' : ''}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      opacity: visibleBullets.includes(index) ? 1 : 0.3,
                      lineHeight: '1.4',
                    }}
                  >
                    <div className="bullet-number" style={{
                      minWidth: '1.5rem',
                      height: '1.5rem',
                      borderRadius: '50%',
                      backgroundColor: 'var(--neon-lime)',
                      color: 'var(--dark-gray)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '0.8rem'
                    }}>
                      {index + 1}
                    </div>
                    <div style={{ flex: 1, overflowWrap: 'break-word', fontSize: isMobile ? '0.85rem' : 'inherit' }}>
                      {point}
                    </div>
                  </div>
                ))}
                
                {/* Blinking cursor after last bullet */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginTop: '0.5rem',
                  marginLeft: '2rem'
                }}>
                  <span style={{ 
                    color: 'var(--neon-lime)', 
                    fontWeight: 'bold',
                    marginRight: '0.5rem'
                  }}>
                    &gt;
                  </span>
                  <div style={{
                    width: '8px',
                    height: '16px',
                    backgroundColor: 'var(--neon-lime)',
                    animation: 'blinkCursor 1s infinite',
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Calendly badge - floating */}
      <div 
        onClick={openCalendly}
        style={{
          position: 'fixed',
          bottom: isMobile ? '5rem' : '2rem',
          right: '2rem',
          zIndex: 1000,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'var(--neon-lime)',
          color: 'var(--dark-gray)',
          padding: '0.75rem 1.25rem',
          borderRadius: '2rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
          fontWeight: 'bold',
          fontSize: '0.95rem'
        }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        ¿Aún tienes dudas? Agenda una sesión con nosotros
      </div>
      
      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
} 