export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-number">01 / About Me</div>
        <div className="split-layout">
          <div>
            <div className="section-head" style={{ marginBottom: '32px' }}>
              <h2>A backend-focused developer — where automation and clean architecture meet.</h2>
            </div>
            <div className="about-body" style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              <p style={{ marginBottom: '16px' }}>
                I'm Rofiqul Islam Rimon — a WordPress Plugin Developer, Backend PHP Engineer, and Integration Specialist based in Jhenaidah, Bangladesh.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Most of my day is spent wiring third-party services into Zaplane, a WordPress workflow automation engine. I specialize in building scalable OAuth flows, processing complex webhooks, and writing clean, WPCS-compliant PHP that powers visual automation builders.
              </p>
              <p>
                My approach bridges the gap between raw API documentation and intuitive user interfaces. I enjoy solving real-world data synchronization problems, and I'm always exploring new ways to make WordPress act as a headless backend or a powerful automation hub.
              </p>
            </div>
          </div>
          
          <div>
            <div className="about-stats" style={{ marginTop: '0', paddingTop: '0', borderTop: 'none', gridTemplateColumns: '1fr' }}>
              <div className="stat-block">
                <div className="stat-label">Based In</div>
                <div className="stat-value">Jhenaidah, Bangladesh</div>
              </div>
              <div className="stat-block">
                <div className="stat-label">Known Online As</div>
                <div className="stat-value">rofiqulislamrimon</div>
              </div>
              <div className="stat-block">
                <div className="stat-label">Core Focus</div>
                <div className="stat-value">WP Plugins + API Integrations</div>
              </div>
              <div className="stat-block">
                <div className="stat-label">Current Project</div>
                <div className="stat-value">Zaplane Automation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
