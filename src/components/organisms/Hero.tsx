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
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

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
    
    // Clean up function
    return () => {
      if (link.parentNode) document.head.removeChild(link);
      if (style.parentNode) document.head.removeChild(style);
      if (initialDelay) clearTimeout(initialDelay);
      if (animationRef.current) clearTimeout(animationRef.current);
      
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

  return (
    <div className="hero" style={{ padding: '6rem 0 8rem' }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.5rem',
        minHeight: '500px',
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
        }}>
          <h1 className="mb-8" style={{ color: 'white' }}>
            Launch Your Digital Business with{' '}
            <span style={{ color: 'var(--neon-lime)' }}>AI-Powered</span> Strategies
          </h1>
          <p className="mb-8" style={{ color: 'white' }}>
            KeyAgency ayuda a los emprendedores a explotar el potencial de la IA para construir, crecer y escalar negocios exitosos en línea. ¡Recibe la notificación cuando lancemos!
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
          minHeight: '600px',
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
          }}>KeyAgency</h2>
          
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
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'var(--neon-lime)' }}
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
              <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor"/>
              <circle cx="15.5" cy="9.5" r="1.5" fill="currentColor"/>
              <path d="M12 16.5C14.33 16.5 16.32 14.96 17.25 13H6.75C7.68 14.96 9.67 16.5 12 16.5Z" fill="currentColor"/>
              <path d="M7 6H9V8H7V6Z" fill="currentColor"/>
              <path d="M15 6H17V8H15V6Z" fill="currentColor"/>
            </svg>
            
            {/* CPU circuits around the robot */}
            <svg 
              width="120" 
              height="120" 
              viewBox="0 0 120 120" 
              fill="none" 
              style={{ 
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                opacity: 0.5,
                animationName: 'neonPulse',
                animationDuration: '3s',
                animationIterationCount: 'infinite',
                animationDirection: 'alternate'
              }}
            >
              <circle cx="60" cy="60" r="55" stroke="var(--neon-lime)" strokeWidth="1" strokeDasharray="20 10" strokeLinecap="round" />
              <path d="M60 5 L60 20" stroke="var(--neon-lime)" strokeWidth="1" />
              <path d="M60 100 L60 115" stroke="var(--neon-lime)" strokeWidth="1" />
              <path d="M5 60 L20 60" stroke="var(--neon-lime)" strokeWidth="1" />
              <path d="M100 60 L115 60" stroke="var(--neon-lime)" strokeWidth="1" />
            </svg>
            
            {/* Animated "thinking" dots */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-5px',
              display: 'flex',
              gap: '3px',
              padding: '3px 6px',
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: '10px',
              border: '1px solid var(--neon-lime)'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--neon-lime)',
                borderRadius: '50%',
                animationName: 'blink',
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                animationDelay: '0s'
              }}></div>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--neon-lime)',
                borderRadius: '50%',
                animationName: 'blink',
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                animationDelay: '0.2s'
              }}></div>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--neon-lime)',
                borderRadius: '50%',
                animationName: 'blink',
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                animationDelay: '0.4s'
              }}></div>
            </div>
          </div>
          
          {/* AI Terminal Output with stacking bullet points - FIXED HEIGHT */}
          <div style={{ 
            width: '100%',
            height: '400px', // Increased height to fit all bullets without scrolling
            padding: '1rem',
            borderRadius: '0.75rem',
            backgroundColor: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(168,255,96,0.3)',
            backdropFilter: 'blur(5px)',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5), 0 0 15px rgba(168,255,96,0.2)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Terminal header */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              marginBottom: '1rem',
              borderBottom: '1px solid rgba(168,255,96,0.3)',
              paddingBottom: '0.5rem',
              flexShrink: 0
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F' }}></div>
              </div>
              <div style={{ 
                color: 'var(--neon-lime)', 
                fontSize: '0.8rem', 
                fontFamily: 'monospace'
              }}>
                ai-assistant@keyagency:~
              </div>
            </div>
            
            {/* Command prompt */}
            <div style={{ 
              marginBottom: '1rem', 
              color: 'white', 
              fontFamily: 'monospace', 
              fontSize: '0.9rem',
              flexShrink: 0
            }}>
              $ <span style={{ color: 'var(--electric-blue)' }}>def generar_oportunidades_de_negocio</span> --ai-powered --entrepreneurs
            </div>
            
            {/* Bullet points container with fixed layout */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              flexShrink: 0,
              flexGrow: 1
            }}>
              {bulletPoints.map((text, index) => (
                <div 
                  key={index}
                  className={visibleBullets.includes(index) ? "bullet-animated" : ""}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    gap: '1rem',
                    opacity: visibleBullets.includes(index) ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <div 
                    className="bullet-number"
                    style={{
                      width: '30px',
                      height: '30px',
                      backgroundColor: 'rgba(168,255,96,0.2)',
                      border: '2px solid var(--neon-lime)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--neon-lime)',
                      fontWeight: 'bold',
                      fontFamily: 'monospace',
                      boxShadow: '0 0 10px rgba(168,255,96,0.5)',
                      flexShrink: 0
                    }}
                  >
                    {index + 1}
                  </div>
                  <div style={{
                    color: 'white',
                    fontFamily: 'monospace',
                    textShadow: '0 0 5px rgba(255,255,255,0.5)',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    flexGrow: 1
                  }}>
                    {text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Terminal footer with cursor blinking */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginTop: '1rem', 
              color: 'white', 
              fontFamily: 'monospace', 
              fontSize: '0.9rem',
              flexShrink: 0
            }}>
              $ <span style={{ 
                marginLeft: '0.5rem', 
                width: '10px', 
                height: '16px', 
                backgroundColor: 'var(--neon-lime)', 
                display: 'inline-block', 
                animationName: 'blink',
                animationDuration: '1s',
                animationTimingFunction: 'step-end',
                animationIterationCount: 'infinite'
              }}></span>
            </div>
          </div>
          
          {/* Background gradient */}
          <div style={{ 
            position: 'absolute', 
            top: '-50%', 
            left: '-50%', 
            width: '200%', 
            height: '200%', 
            background: 'radial-gradient(circle, rgba(168,255,96,0.05) 0%, rgba(168,255,96,0) 50%)',
            transform: 'rotate(30deg)',
            zIndex: -1,
            pointerEvents: 'none'
          }}></div>
        </div>
      </div>
      
      {/* COMBINED SECTION: both email signup and Calendly questions */}
      <div style={{
        maxWidth: '1000px',
        margin: '3rem auto 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        {/* Email signup form - moved as per orange instructions */}
        <div style={{
          backgroundColor: 'rgba(58, 141, 255, 0.15)', 
          borderRadius: '1rem',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          border: '1px solid rgba(58, 141, 255, 0.3)'
        }}>
          <h3 style={{ 
            color: 'white', 
            textAlign: 'center', 
            marginBottom: '1.5rem',
            fontSize: '1.8rem',
            textShadow: '0 0 10px rgba(58, 141, 255, 0.7)'
          }}>
            Mantente informado sobre nuestro lanzamiento
          </h3>
          
          <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ 
              position: 'relative',
              marginBottom: error ? '3rem' : '1.5rem'
            }}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu dirección de email" 
                style={{
                  width: '100%',
                  padding: '1rem 10rem 1rem 1.5rem',
                  borderRadius: '999px',
                  border: '2px solid rgba(168, 255, 96, 0.5)',
                  backgroundColor: 'rgba(47, 47, 47, 0.7)',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                  boxShadow: '0 0 15px rgba(168,255,96,0.2)',
                  transition: 'all 0.3s ease'
                }}
              />
              <button 
                type="submit"
                style={{
                  position: 'absolute',
                  right: '5px',
                  top: '5px',
                  bottom: '5px',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '999px',
                  border: 'none',
                  backgroundColor: 'var(--neon-lime)',
                  color: 'var(--dark-gray)',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 10px rgba(168,255,96,0.5)'
                }}
              >
                Notificarme
              </button>
              
              {error && (
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-2rem', 
                  left: '0', 
                  color: '#FF5F56',
                  fontSize: '0.9rem'
                }}>
                  {error}
                </div>
              )}
              
              {success && (
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-2rem', 
                  left: '0', 
                  color: 'var(--neon-lime)',
                  fontSize: '0.9rem'
                }}>
                  ¡Gracias! Te notificaremos cuando lancemos.
                </div>
              )}
            </div>
          </form>
        </div>
      
        {/* Calendly section */}
        <div style={{ 
          backgroundColor: 'rgba(47, 79, 47, 0.8)', 
          borderRadius: '1rem',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          cursor: 'pointer',
          backdropFilter: 'blur(5px)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
        }}
        onClick={openCalendly}>
          <div style={{ 
            backgroundColor: 'var(--neon-lime)',
            width: '3.5rem',
            height: '3.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
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
            <h3 style={{ color: 'var(--neon-lime)', marginBottom: '0.25rem', fontSize: '1.5rem' }}>¿Tienes preguntas?</h3>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}
            >
              Resolvemos tus dudas, agenda una reunión gratuita
            </a>
          </div>
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