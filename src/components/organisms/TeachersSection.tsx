"use client";

// TeachersSection doesn't need most of the code that was copied from Hero.tsx
export default function TeachersSection() {
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
            <h3>Eduardo O&apos;Brien</h3>
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