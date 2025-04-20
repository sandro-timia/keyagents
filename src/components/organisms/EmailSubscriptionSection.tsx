"use client";

import EmailForm from '../atoms/EmailForm';

export default function EmailSubscriptionSection() {
  return (
    <section 
      style={{
        padding: '30px 0',
        background: 'transparent',
        position: 'relative',
      }}
      id="subscribe"
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
            Regístrate ahora en VibeLabb y sé de los primeros en acceder cuando lancemos el curso
          </p>
        </div>
        
        <div style={{ maxWidth: '500px', width: '100%', margin: '0 auto' }}>
          <EmailForm 
            buttonText="Notificarme"
            placeholderText="ejemplo@correo.com"
            successMessage="¡Genial! Te notificaremos cuando el curso esté disponible."
            errorMessage="Por favor ingresa un email válido"
          />
        </div>
        
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