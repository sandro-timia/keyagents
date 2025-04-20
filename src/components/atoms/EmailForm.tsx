"use client";

import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';

interface EmailFormProps {
  buttonText?: string;
  placeholderText?: string;
  successMessage?: string;
  errorMessage?: string;
}

export default function EmailForm({
  buttonText = "Subscribe",
  placeholderText = "youremail@example.com",
  successMessage = "Thank you! Your email has been saved.",
  errorMessage = "Please enter a valid email address.",
}: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage(errorMessage);
      setMessageType('error');
      return;
    }
    
    setIsSubmitting(true);
    setMessage('');
    
    try {
      // Save to Firestore's "lead" collection (matching the firestore.rules)
      await addDoc(collection(db, "lead"), {
        email,
        timestamp: serverTimestamp()
      });
      
      setMessage(successMessage);
      setMessageType('success');
      setEmail('');
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error adding email to Firestore:", error);
      setMessage('An error occurred. Please try again later.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ 
          position: 'relative', 
          height: '50px',
          width: '100%',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundColor: 'rgba(15, 23, 42, 0.7)',
          boxSizing: 'border-box'
        }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholderText}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              padding: '0 140px 0 16px',
              fontSize: '16px',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              outline: 'none',
              boxSizing: 'border-box'
            }}
            disabled={isSubmitted}
          />
          
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              height: 'calc(100% - 10px)',
              padding: '0 20px',
              minWidth: '120px',
              fontSize: '16px',
              fontWeight: 600,
              backgroundColor: isSubmitted ? '#8CD656' : '#A8FF60',
              color: '#121827',
              border: 'none',
              borderRadius: '6px',
              cursor: (isSubmitting || isSubmitted) ? 'not-allowed' : 'pointer',
              zIndex: 2
            }}
          >
            {isSubmitting ? 'Procesando...' : isSubmitted ? '¡Enviado!' : buttonText}
          </button>
        </div>
        
        {message && (
          <div
            style={{
              padding: '10px',
              marginTop: '10px',
              borderRadius: '6px',
              backgroundColor: messageType === 'success' 
                ? 'rgba(168, 255, 96, 0.1)' 
                : 'rgba(239, 68, 68, 0.1)',
              border: `1px solid ${
                messageType === 'success' 
                  ? 'rgba(168, 255, 96, 0.3)' 
                  : 'rgba(239, 68, 68, 0.3)'
              }`,
              color: messageType === 'success' 
                ? '#A8FF60' 
                : '#ef4444',
              fontSize: '14px'
            }}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
} 