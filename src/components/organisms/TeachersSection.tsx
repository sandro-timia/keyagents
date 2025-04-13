export default function TeachersSection() {
  return (
    <section id="teachers" style={{ background: 'var(--light-gray)', padding: '4rem 0' }}>
      <div className="container">
        <div className="text-center mb-8">
          <h2>
            Know Your <span style={{ color: 'var(--electric-blue)' }}>Teachers</span>
          </h2>
          <p>
            Learn from industry experts who have built successful digital businesses and mastered AI tools to stay ahead of the competition.
          </p>
        </div>
        <div className="grid grid-3">
          {/* Teacher Card 1 */}
          <div className="card">
            <div style={{ height: '200px', backgroundColor: 'var(--electric-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>A</span>
            </div>
            <h3>Alex Morgan</h3>
            <p style={{ color: 'var(--electric-blue)', fontWeight: '500', marginBottom: '1rem' }}>AI Strategy Expert</p>
            <p>With over 10 years of experience in digital marketing and AI, Alex helps entrepreneurs leverage cutting-edge tools to scale their businesses.</p>
            <a href="https://linkedin.com/in/alexmorgan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--electric-blue)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              Connect on LinkedIn
            </a>
          </div>
          
          {/* Teacher Card 2 */}
          <div className="card">
            <div style={{ height: '200px', backgroundColor: 'var(--digital-violet)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>S</span>
            </div>
            <h3>Sarah Chen</h3>
            <p style={{ color: 'var(--electric-blue)', fontWeight: '500', marginBottom: '1rem' }}>Business Development Coach</p>
            <p>Sarah specializes in helping startups build scalable business models using AI. Former tech executive with experience at Google and Meta.</p>
            <a href="https://linkedin.com/in/sarahchen" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--electric-blue)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              Connect on LinkedIn
            </a>
          </div>
          
          {/* Teacher Card 3 */}
          <div className="card">
            <div style={{ height: '200px', backgroundColor: 'var(--neon-lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem', color: 'var(--dark-gray)', fontWeight: 'bold' }}>M</span>
            </div>
            <h3>Michael Rodriguez</h3>
            <p style={{ color: 'var(--electric-blue)', fontWeight: '500', marginBottom: '1rem' }}>Digital Marketing Expert</p>
            <p>Michael has helped over 200 businesses implement AI-driven marketing strategies that deliver measurable results and sustainable growth.</p>
            <a href="https://linkedin.com/in/michaelrodriguez" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--electric-blue)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 