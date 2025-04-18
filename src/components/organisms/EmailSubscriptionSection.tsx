"use client";

import { useState } from 'react';

export default function EmailSubscriptionSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const [hasSubscribed, setHasSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage('Por favor ingresa un email válido');
      setMessageType('error');
      return;
    }
    
    setIsSubmitting(true);
    setMessage('');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('¡Genial! Tu descuento del 50% ha sido reservado. Te notificaremos cuando el curso esté disponible.');
      setMessageType('success');
      setEmail('');
      setHasSubscribed(true);
    } catch {
      setMessage('Hubo un error al procesar tu solicitud. Intenta nuevamente.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      style={{
        padding: '30px 0',
        background: 'transparent',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 20px',
          position: 'relative',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px',
        }}>
          <div style={{
            background: 'rgba(168, 255, 96, 0.15)',
            padding: '6px 12px',
            borderRadius: '20px',
            marginBottom: '10px',
          }}>
            <span style={{
              color: 'var(--neon-lime)',
              fontSize: '14px',
              fontWeight: 600,
            }}>
              ¡OFERTA ESPECIAL DE LANZAMIENTO VIBELABB!
            </span>
          </div>
          
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '15px',
              textAlign: 'center',
            }}
          >
            Domina el Vibe Coding y lanza tu negocio digital
          </h2>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '5px',
          }}>
            <span style={{
              fontSize: '20px',
              color: hasSubscribed ? 'rgba(255, 255, 255, 0.5)' : 'white',
              fontWeight: 600,
              textDecoration: hasSubscribed ? 'line-through' : 'none',
            }}>
              Precio normal: $299 USD
            </span>
            
            {hasSubscribed && (
              <span style={{
                fontSize: '22px',
                color: 'var(--neon-lime)',
                fontWeight: 700,
              }}>
                $149.50 USD
              </span>
            )}
          </div>
          
          <p
            style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto 15px',
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            {hasSubscribed 
              ? '¡Felicidades! Has desbloqueado un 50% de descuento para el curso de VibeLabb' 
              : 'Regístrate ahora en VibeLabb y obtén un 50% de descuento cuando lancemos el curso'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
            style={{
              padding: '0 150px 0 15px',
              fontSize: '16px',
              borderRadius: '8px',
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              border: hasSubscribed ? '1px solid var(--neon-lime)' : '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              outline: 'none',
              width: '100%',
              height: '50px',
              boxSizing: 'border-box',
            }}
            disabled={hasSubscribed}
          />
          
          <button
            type="submit"
            disabled={isSubmitting || hasSubscribed}
            style={{
              position: 'absolute',
              right: '5px',
              top: '5px',
              bottom: '5px',
              padding: '0 20px',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '6px',
              background: hasSubscribed ? '#28a745' : '#a6ff60',
              color: '#121827',
              border: 'none',
              cursor: (isSubmitting || hasSubscribed) ? 'not-allowed' : 'pointer',
              minWidth: '130px',
            }}
          >
            {isSubmitting ? 'Procesando...' : hasSubscribed ? '¡Reservado!' : 'Notificarme'}
          </button>
        </form>
        
        {message && (
          <div
            style={{
              padding: '10px',
              marginTop: '10px',
              borderRadius: '6px',
              backgroundColor: messageType === 'success' 
                ? 'rgba(168, 255, 96, 0.15)' 
                : 'rgba(225, 29, 72, 0.15)',
              border: `1px solid ${
                messageType === 'success' 
                  ? 'rgba(168, 255, 96, 0.3)' 
                  : 'rgba(225, 29, 72, 0.3)'
              }`,
              color: messageType === 'success' 
                ? 'var(--neon-lime)' 
                : '#e11d48',
              fontSize: '14px',
            }}
          >
            {message}
          </div>
        )}
        
        <div style={{
          marginTop: '15px',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.6)',
          }}>
            * Oferta exclusiva de VibeLabb válida solo para los primeros 100 registros
          </p>
        </div>
      </div>
    </section>
  );
} 