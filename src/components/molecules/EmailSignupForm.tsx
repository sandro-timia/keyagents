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
    <div style={{ 
      width: '100%', 
      maxWidth: '100%', 
      padding: '0 10px',
      boxSizing: 'border-box'
    }}>
      {success ? (
        <div style={{ 
          backgroundColor: 'var(--neon-lime)', 
          padding: '1rem', 
          borderRadius: '0.5rem', 
          textAlign: 'center', 
          color: 'var(--dark-gray)' 
        }}>
          <p style={{ fontWeight: '500' }}>Thank you for signing up!</p>
          <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>We&apos;ll notify you when KeyAgency goes live.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          {/* Simple stacked layout for all screen sizes */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            width: '100%'
          }}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              style={{ 
                width: '100%',
                padding: '12px 16px',
                borderRadius: '24px',
                border: error ? '1px solid red' : '1px solid var(--light-gray)',
                boxSizing: 'border-box',
                fontSize: '16px'
              }}
            />
            <button 
              type="submit" 
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '24px',
                backgroundColor: 'var(--neon-lime)',
                color: 'var(--dark-gray)',
                border: 'none',
                fontWeight: '500',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Notificarme
            </button>
          </div>
          {error && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{error}</p>}
        </form>
      )}
    </div>
  );
} 