import Section from '../atoms/Section';
import VideoSection from '../molecules/VideoSection';

export default function CourseVideoSection() {
  return (
    <section id="video-section" className="pt-16 pb-16">
      <div className="container grid">
        <div>
          <h2 style={{ color: 'var(--electric-blue)', marginBottom: '1rem' }}>
            Discover How AI Can Transform Your Business
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            Our comprehensive course will teach you how to leverage AI tools to automate tasks, generate content, analyze market trends, and make data-driven decisions that will help your business thrive in the digital economy.
          </p>
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