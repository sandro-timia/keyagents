"use client";

import { FormEvent, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKbGgiGWzGtt6m6HwwSYiR-liXLqKD7V4",
  authDomain: "vibelabb-d3810.firebaseapp.com",
  projectId: "vibelabb-d3810",
  storageBucket: "vibelabb-d3810.appspot.com",
  messagingSenderId: "41500991692",
  appId: "1:41500991692:web:57b8d559628b017413df28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function EmailSignupForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email) {
      setError('Email is required');
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      // Save email to Firebase
      const leadCollection = collection(db, "lead");
      await addDoc(leadCollection, {
        email: email,
        timestamp: Timestamp.now()
      });
      
      console.log('Email submitted to Firebase:', email);
      setSuccess(true);
      setEmail('');
    } catch (err) {
      console.error('Error saving email to Firebase:', err);
      setError('Failed to save your email. Please try again.');
    } finally {
      setLoading(false);
    }
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
          <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>We&apos;ll notify you when VibeLabb goes live.</p>
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
              disabled={loading}
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
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '16px',
                opacity: loading ? 0.7 : 1
              }}
              disabled={loading}
            >
              {loading ? 'Procesando...' : 'Notificarme'}
            </button>
          </div>
          {error && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{error}</p>}
        </form>
      )}
    </div>
  );
} 