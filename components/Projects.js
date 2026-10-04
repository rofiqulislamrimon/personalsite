export default function Projects() {
  const projects = [
    {
      num: '01',
      title: 'Zaplane — Workflow Automation',
      desc: 'A visual workflow automation platform for WordPress connecting LMS platforms, CRMs, eCommerce systems and AI services.',
      tags: ['WordPress plugin', 'PHP / React', 'OAuth2', 'Webhooks'],
      link: 'https://zaplane.app'
    },
    {
      num: '02',
      title: 'Integration Engine Core',
      desc: 'The shared IntegrationBase contract that powers all Zaplane apps. Handles dynamic query fields, token refreshes, and API pagination natively.',
      tags: ['Backend Architecture', 'REST APIs', 'OOP PHP'],
      link: '#'
    }
  ];

  const integrations = [
    'WhatsApp', 'Slack', 'Telegram', 'WooCommerce', 'Zoom', 'Google Meet', 'Trello', 'FluentCRM', 'StoreEngine'
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-number">04 / Featured Work</div>
        <div className="section-head">
          <h2>Selected projects.</h2>
          <p>A mix of core automation engines, backend architectures, and API integrations.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.num} className="project-card card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="project-num">{p.num}</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', flexGrow: 1 }}>{p.desc}</p>
              
              <div className="integration-list" style={{ marginBottom: '32px' }}>
                {p.tags.map(t => <span key={t} className="integration-chip">{t}</span>)}
              </div>
              
              {p.link !== '#' && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                  Visit Project ↗
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="card integrations-card">
          <h3 style={{ fontSize: '1.4rem', marginBottom: '24px' }}>Integrations I've Built</h3>
          <div className="integration-list">
            {integrations.map(name => (
              <span key={name} className="integration-chip" style={{ background: 'var(--surface-2)', borderColor: 'transparent' }}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
