"use client";

import { useState, useEffect } from 'react';

export default function FAQSection() {
  // State to track if FAQ section is visible
  const [isFAQVisible, setIsFAQVisible] = useState(false);
  // Track which FAQ is expanded, null if none
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  // Track if viewport is mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport on component mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Toggle FAQ section visibility
  const toggleFAQVisibility = () => {
    setIsFAQVisible(!isFAQVisible);
    // Reset expanded index when hiding the FAQ section
    if (isFAQVisible) {
      setExpandedIndex(null);
    }
  };

  // Toggle FAQ expansion
  const toggleFaq = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  // FAQ data
  const faqs = [
    {
      question: "¿Qué es Key Agency?",
      answer: "Key Agency es una plataforma que ayuda a emprendedores y empresas a aprovechar el poder de la IA para construir, hacer crecer y escalar negocios digitales exitosos. Ofrecemos soluciones personalizadas para automatizar tareas, crear sitios web y desarrollar estrategias de marketing digital efectivas."
    },
    {
      question: "¿Cómo puede la IA beneficiar a mi negocio?",
      answer: "La IA puede transformar tu negocio automatizando tareas repetitivas, generando contenido de calidad, analizando datos para obtener insights valiosos, mejorando la experiencia del cliente con chatbots inteligentes, optimizando procesos de ventas y mucho más, permitiéndote ahorrar tiempo y recursos mientras aumentas la eficiencia."
    },
    {
      question: "¿Necesito conocimientos técnicos para usar sus servicios?",
      answer: "No, nuestras soluciones están diseñadas para ser accesibles a personas sin conocimientos técnicos. Nuestro enfoque 'vibe coding' simplifica el proceso de desarrollo y automatización. Además, ofrecemos soporte y capacitación para que puedas aprovechar al máximo nuestras herramientas."
    },
    {
      question: "¿Cuánto tiempo toma crear un sitio web con IA?",
      answer: "Con nuestras herramientas de IA, podemos desarrollar un sitio web funcional y atractivo en cuestión de días, no semanas o meses como en el desarrollo tradicional. El tiempo exacto dependerá de la complejidad de tu proyecto, pero nuestro objetivo es entregar resultados rápidos sin comprometer la calidad."
    },
    {
      question: "¿Qué tipos de negocios pueden beneficiarse de sus servicios?",
      answer: "Prácticamente cualquier tipo de negocio puede beneficiarse de nuestros servicios, desde pequeños emprendedores hasta empresas medianas. Trabajamos con ecommerce, servicios profesionales, consultoría, educación, salud, hostelería, y muchos otros sectores que buscan mejorar su presencia digital y automatizar procesos."
    },
    {
      question: "¿Qué es 'vibe coding' y en qué se diferencia de la programación tradicional?",
      answer: "Vibe coding es nuestro enfoque innovador que combina herramientas de IA con metodologías ágiles para desarrollar software sin necesidad de escribir código complejo. A diferencia de la programación tradicional, el vibe coding se centra en la intención y el resultado deseado, permitiendo a personas sin conocimientos técnicos crear soluciones digitales avanzadas."
    },
    {
      question: "¿Puedo integrar sus soluciones con los sistemas que ya utilizo?",
      answer: "Sí, nuestras soluciones están diseñadas para integrarse fácilmente con las herramientas y plataformas más populares del mercado. Ya sea que utilices Shopify, WordPress, HubSpot, Salesforce u otras herramientas, podemos asegurar que nuestras soluciones de IA trabajen en armonía con tu infraestructura existente."
    },
    {
      question: "¿Qué tipo de soporte ofrecen después de implementar una solución?",
      answer: "Ofrecemos soporte continuo para todas nuestras soluciones. Esto incluye mantenimiento técnico, actualizaciones, resolución de problemas y asesoramiento para optimizar el rendimiento. También proporcionamos capacitación adicional según sea necesario para que puedas gestionar y evolucionar tu solución con confianza."
    },
    {
      question: "¿Cómo garantizan la seguridad de mis datos?",
      answer: "La seguridad de tus datos es nuestra prioridad. Implementamos protocolos de encriptación avanzados, seguimos las mejores prácticas de la industria en protección de datos, realizamos auditorías de seguridad regulares y cumplimos con las normativas de protección de datos como GDPR. Tus datos nunca son compartidos con terceros sin tu consentimiento explícito."
    },
    {
      question: "¿Cuál es el proceso para comenzar a trabajar con Key Agency?",
      answer: "El proceso comienza con una reunión gratuita donde discutimos tus objetivos y necesidades. Luego, desarrollamos una propuesta personalizada detallando soluciones, plazos y costos. Una vez aprobada, comenzamos la implementación con un enfoque colaborativo, manteniéndote informado en cada paso. Al finalizar, te capacitamos para aprovechar al máximo tu nueva solución."
    }
  ];

  return (
    <section id="faq" style={{ 
      position: 'relative',
      padding: isMobile ? '3rem 0 4rem' : '4rem 0 6rem',
      background: 'linear-gradient(to bottom, rgba(26,32,44,0.8), rgba(17,24,39,0.9))',
      color: 'white'
    }}>
      {/* FAQ Button - now using the site's color palette */}
      <div style={{
        position: 'absolute',
        top: isMobile ? '-1.5rem' : '-2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10
      }}>
        <button 
          onClick={toggleFAQVisibility}
          style={{
            background: 'linear-gradient(to right, var(--neon-lime), var(--electric-blue))',
            color: 'var(--dark-gray)',
            border: 'none',
            borderRadius: '2rem',
            padding: isMobile ? '0.5rem 1.5rem' : '0.75rem 2rem',
            fontSize: isMobile ? '1rem' : '1.25rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
        >
          FAQ
          <svg 
            width={isMobile ? "20" : "24"} 
            height={isMobile ? "20" : "24"} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{
              transition: 'transform 0.3s ease',
              transform: isFAQVisible ? 'rotate(45deg)' : 'rotate(0deg)'
            }}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>

      <div 
        className="container" 
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: isFAQVisible ? 'auto' : '0',
          opacity: isFAQVisible ? 1 : 0,
          overflow: 'hidden',
          transition: 'opacity 0.5s ease'
        }}
      >
        {isFAQVisible && (
          <>
            <h2 style={{ 
              textAlign: 'center', 
              fontSize: isMobile ? '1.75rem' : '2.5rem', 
              marginBottom: isMobile ? '2rem' : '3rem',
              color: 'white',
              animation: 'fadeIn 0.5s ease'
            }}>
              Preguntas Frecuentes
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              animation: 'fadeIn 0.5s ease'
            }}>
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  style={{
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(30, 41, 59, 0.5)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div 
                    onClick={() => toggleFaq(index)}
                    style={{
                      padding: isMobile ? '1rem' : '1.25rem',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: expandedIndex === index ? 'rgba(50, 65, 90, 0.7)' : 'transparent',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    <h3 style={{ 
                      margin: 0, 
                      fontSize: isMobile ? '0.95rem' : '1.125rem',
                      fontWeight: expandedIndex === index ? 'bold' : 'normal', 
                      color: expandedIndex === index ? 'var(--neon-lime)' : 'white'
                    }}>
                      {faq.question}
                    </h3>
                    <span style={{
                      transition: 'transform 0.3s ease',
                      transform: expandedIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                      color: expandedIndex === index ? 'var(--neon-lime)' : 'white',
                      fontSize: isMobile ? '1.25rem' : '1.5rem',
                      fontWeight: 'lighter',
                      minWidth: '1rem',
                      marginLeft: '0.5rem'
                    }}>+</span>
                  </div>
                  
                  <div style={{
                    padding: expandedIndex === index ? (isMobile ? '0 1rem 1rem' : '0 1.25rem 1.25rem') : '0 1.25rem',
                    maxHeight: expandedIndex === index ? '1000px' : '0',
                    opacity: expandedIndex === index ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}>
                    <p style={{
                      margin: '0',
                      lineHeight: '1.6',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: isMobile ? '0.9rem' : 'inherit'
                    }}>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Add a small fade-in animation to the CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
} 