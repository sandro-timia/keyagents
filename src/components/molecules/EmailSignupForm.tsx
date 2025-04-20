"use client";

import { FormEvent, useState, useEffect } from 'react';

export default function EmailSignupForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 480);
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Here you would typically send this to your backend
    console.log('Email submitted:', email);
    setSuccess(true);
    setEmail('');
  };

  return (
    <div className="w-full max-w-full sm:max-w-md mx-auto px-4">
      {success ? (
        <div style={{ backgroundColor: 'var(--neon-lime)', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center', color: 'var(--dark-gray)' }}>
          <p style={{ fontWeight: '500' }}>Thank you for signing up!</p>
          <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>We&apos;ll notify you when KeyAgency goes live.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full">
          {isMobile ? (
            // Mobile layout - stacked
            <div className="flex flex-col w-full gap-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                className="w-full px-4 py-3 rounded-full border text-base"
                style={{ 
                  border: error ? '1px solid red' : '1px solid var(--light-gray)',
                }}
              />
              <button 
                type="submit" 
                className="w-full px-4 py-3 rounded-full font-medium cursor-pointer"
                style={{
                  backgroundColor: 'var(--neon-lime)',
                  color: 'var(--dark-gray)',
                  border: 'none',
                }}
              >
                Notificarme
              </button>
            </div>
          ) : (
            // Desktop layout - button inside input
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                className="w-full px-4 py-3 pr-32 rounded-full text-base"
                style={{ 
                  border: error ? '1px solid red' : '1px solid var(--light-gray)',
                }}
              />
              <button 
                type="submit" 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 px-6 py-2 rounded-full font-medium cursor-pointer"
                style={{
                  backgroundColor: 'var(--neon-lime)',
                  color: 'var(--dark-gray)',
                  border: 'none',
                }}
              >
                Notificarme
              </button>
            </div>
          )}
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </form>
      )}
    </div>
  );
} 