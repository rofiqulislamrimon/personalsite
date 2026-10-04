import NodeGraph from './NodeGraph';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow" style={{ marginBottom: '16px' }}>Available for freelance & full-time work</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '24px' }}>
            Building smart integrations <br />
            & powerful WordPress solutions.
          </h1>
          <p className="hero-sub" style={{ fontSize: '1.15rem', maxWidth: '52ch', marginBottom: '40px' }}>
            I'm Rofiqul Islam Rimon — a backend-first developer based in Bangladesh.
            I design scalable WordPress plugins, Zaplane integrations, workflow automation, and clean PHP backend architectures end-to-end.
          </p>
          <div className="hero-actions">
            <a href="/#projects" className="btn btn-solid">
              View Projects ↗
            </a>
            <a href="/#contact" className="btn">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <NodeGraph />
        </div>
      </div>

      <div className="container hero-stats">
        <div>
          <h4 style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>15+</h4>
          <p style={{ color: 'var(--text-faint)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Integrations Built</p>
        </div>
        <div>
          <h4 style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>4</h4>
          <p style={{ color: 'var(--text-faint)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Core Disciplines</p>
        </div>
        <div>
          <h4 style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>Zaplane</h4>
          <p style={{ color: 'var(--text-faint)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Flagship Project</p>
        </div>
      </div>
    </section>
  );
}
