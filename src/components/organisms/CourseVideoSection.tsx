export default function CourseVideoSection() {
  return (
    <section id="video-section" className="pt-16 pb-16">
      <div className="container grid">
        <div style={{ 
          position: 'relative',
          zIndex: 1, 
          borderRadius: '1rem',
          padding: '2rem',
          background: 'rgba(47,47,47,0.7)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}>
          <h1 className="mb-8" style={{ color: 'white' }}>
            Discover How AI Can Transform Your Business
          </h1>
          <p className="mb-8" style={{ color: 'white' }}>
            Our comprehensive course will teach you how to leverage AI tools to automate tasks, generate content, analyze market trends, and make data-driven decisions that will help your business thrive in the digital economy.
          </p>
          
          {/* Vimeo video as instructed in the orange box */}
          <div style={{ 
            marginBottom: '2rem', 
            borderRadius: '0.75rem',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            <iframe 
              title="vimeo-player" 
              src="https://player.vimeo.com/video/653744811?h=b6d18998f0" 
              width="100%" 
              height="240" 
              frameBorder="0" 
              allowFullScreen
              style={{ display: 'block' }}
            ></iframe>
          </div>
        </div>
        <div className="card" style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', borderWidth: '4px', borderColor: 'var(--electric-blue)', borderStyle: 'solid' }}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Course preview video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
} 