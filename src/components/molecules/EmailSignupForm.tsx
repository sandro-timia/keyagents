"use client";

import { FormEvent, useState } from 'react';

export default function EmailSignupForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

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
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      {success ? (
        <div style={{ backgroundColor: 'var(--neon-lime)', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center', color: 'var(--dark-gray)' }}>
          <p style={{ fontWeight: '500' }}>Thank you for signing up!</p>
          <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>We&apos;ll notify you when KeyAgents goes live.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ position: 'relative' }}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              style={{ 
                width: '100%',
                padding: '0.75rem',
                paddingRight: '12rem',
                borderRadius: '2rem',
                border: error ? '1px solid red' : '1px solid var(--light-gray)',
                fontSize: '1rem'
              }}
            />
            <button 
              type="submit" 
              className="button button-primary"
              style={{
                position: 'absolute',
                right: '4px',
                top: '4px',
                bottom: '4px',
                borderRadius: '1.5rem',
                padding: '0 1.5rem',
                backgroundColor: 'var(--neon-lime)',
                color: 'var(--dark-gray)',
                border: 'none',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Notificarme
            </button>
          </div>
          {error && <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>{error}</p>}
        </form>
      )}
    </div>
  );
} 