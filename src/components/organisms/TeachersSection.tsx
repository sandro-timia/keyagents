"use client";

// Remove or comment out this import since we're not using it anymore
// import EmailSignupForm from '../molecules/EmailSignupForm';
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

export default function TeachersSection() {
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
  }, [bulletPoints.length]); // Add bulletPoints.length to the dependency array

  return (
    <section id="teachers" style={{ 
      position: 'relative',
      padding: '4rem 0 8rem',
      overflow: 'hidden',
      isolation: 'isolate'
    }}>
      {/* Video Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            opacity: 0.4,
          }}
        >
          <source src="/assets/videos/Artificial_Intelligence_AI_Stock.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient overlay to match site theme */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(47,47,47,0.7), rgba(58,141,255,0.4))',
          mixBlendMode: 'multiply',
        }} />
      </div>

      {/* Section Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center mb-8" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backdropFilter: 'blur(5px)', borderRadius: '1rem', backgroundColor: 'rgba(47,47,47,0.3)' }}>
          <h2 style={{ color: 'var(--neon-lime)', marginBottom: '1rem', fontSize: '2.5rem' }}>
            Conoce a los <span style={{ color: 'white' }}>Profesores</span>
          </h2>
          <p style={{ color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.7)', fontSize: '1.125rem' }}>
          Aprende de expertos de la industria que han construido negocios digitales exitosos y dominado herramientas de IA para mantenerse por delante de la competencia.
          </p>
        </div>
        <div className="grid grid-3">
          {/* Teacher Cards with consistent hover styling */}
          <div className="card">
            <div style={{ height: '200px', backgroundColor: 'var(--electric-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>A</span>
            </div>
            <h3>Sandro Calzada</h3>
            <p style={{ color: 'var(--electric-blue)', fontWeight: '500', marginBottom: '1rem' }}>AI Strategy Expert</p>
            <p>With over 10 years of experience in digital marketing and AI, Alex helps entrepreneurs leverage cutting-edge tools to scale their businesses.</p>
            <a href="https://linkedin.com/in/alexmorgan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--electric-blue)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              Connect on LinkedIn
            </a>
          </div>
          
          {/* Keep the other teacher cards with the same styling */}
          <div className="card">
            <div style={{ height: '200px', backgroundColor: 'var(--digital-violet)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>E</span>
            </div>
            <h3>Eduardo O&apos;brien</h3>
            <p style={{ color: 'var(--electric-blue)', fontWeight: '500', marginBottom: '1rem' }}>Business Development Coach</p>
            <p>Sarah specializes in helping startups build scalable business models using AI. Former tech executive with experience at Google and Meta.</p>
            <a href="https://linkedin.com/in/sarahchen" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--electric-blue)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              Connect on LinkedIn
            </a>
          </div>
          
          <div className="card">
            <div style={{ height: '200px', backgroundColor: 'var(--neon-lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem', color: 'var(--dark-gray)', fontWeight: 'bold' }}>M</span>
            </div>
            <h3>Michael Rodriguez</h3>
            <p style={{ color: 'var(--electric-blue)', fontWeight: '500', marginBottom: '1rem' }}>Digital Marketing Expert</p>
            <p>Michael has helped over 200 businesses implement AI-driven marketing strategies that deliver measurable results and sustainable growth.</p>
            <a href="https://linkedin.com/in/michaelrodriguez" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--electric-blue)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 