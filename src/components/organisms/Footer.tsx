import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ backgroundColor: 'var(--light-gray)', padding: '3rem 1rem', color: 'var(--dark-gray)' }}>
      <div className="container">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <div className="mb-8">
            <div className="mb-4">
              <div style={{ backgroundColor: 'var(--electric-blue)', color: 'white', padding: '0.75rem', borderRadius: '0.5rem', display: 'inline-block', fontWeight: 'bold' }}>
                KeyAgents
              </div>
            </div>
            <p>
              Empowering entrepreneurs to build successful digital businesses through AI-powered strategies.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 style={{ color: 'var(--electric-blue)', marginBottom: '1rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none' }}>
              <li className="mb-4">
                <Link href="#" style={{ color: 'var(--dark-gray)', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#video-section" style={{ color: 'var(--dark-gray)', textDecoration: 'none' }}>
                  About the Course
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#teachers" style={{ color: 'var(--dark-gray)', textDecoration: 'none' }}>
                  Our Teachers
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 style={{ color: 'var(--electric-blue)', marginBottom: '1rem' }}>Contact</h3>
            <ul style={{ listStyle: 'none' }}>
              <li className="mb-4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" fill="var(--electric-blue)" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" fill="var(--electric-blue)" />
                </svg>
                <a href="mailto:contact@keyagents.com" style={{ color: 'var(--dark-gray)', textDecoration: 'none' }}>
                  contact@keyagents.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 style={{ color: 'var(--electric-blue)', marginBottom: '1rem' }}>Legal</h3>
            <ul style={{ listStyle: 'none' }}>
              <li className="mb-4">
                <Link href="#" style={{ color: 'var(--dark-gray)', textDecoration: 'none' }}>
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" style={{ color: 'var(--dark-gray)', textDecoration: 'none' }}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid var(--dark-gray)', opacity: '0.1', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center' }}>
          <p>© {currentYear} KeyAgents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 