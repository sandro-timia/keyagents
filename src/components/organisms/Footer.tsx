export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="footer" style={{ 
      position: 'relative',
      padding: '4rem 1rem 2rem',
      overflow: 'hidden'
    }}>
      {/* Apply the same gradient overlay */}
      <div className="gradient-overlay"></div>
      
      <div className="container">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <div className="mb-8">
            <div className="mb-4">
              <div style={{ backgroundColor: 'var(--electric-blue)', color: 'white', padding: '0.75rem', borderRadius: '0.5rem', display: 'inline-block', fontWeight: 'bold', backdropFilter: 'blur(5px)' }}>
                VibeLabb
              </div>
            </div>
            <p style={{ color: 'white' }}>
              Empoderando emprendedores para construir negocios digitales exitosos.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 style={{ color: 'var(--neon-lime)', marginBottom: '1rem' }}>Enlaces</h3>
            <ul style={{ listStyle: 'none' }}>
              <li className="mb-4">
                <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Inicio
                </a>
              </li>
              <li className="mb-4">
                <a href="#teachers" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Profesores
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 style={{ color: 'var(--neon-lime)', marginBottom: '1rem' }}>Contacto</h3>
            <ul style={{ listStyle: 'none' }}>
              <li className="mb-4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" fill="var(--neon-lime)" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" fill="var(--neon-lime)" />
                </svg>
                <a href="mailto:contacto@vibelabb.com" style={{ color: 'white', textDecoration: 'none' }}>
                  contacto@vibelabb.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 style={{ color: 'var(--neon-lime)', marginBottom: '1rem' }}>Legal</h3>
            <ul style={{ listStyle: 'none' }}>
              <li className="mb-4">
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                  Política de Privacidad
                </a>
              </li>
              <li className="mb-4">
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'white', opacity: 0.7 }}>© {currentYear} VibeLabb. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 