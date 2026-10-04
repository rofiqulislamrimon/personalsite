export default function Services() {
  const services = [
    {
      num: '01',
      title: 'WordPress Plugin Dev',
      desc: 'Scalable, maintainable, and high-performance custom WordPress plugins. Architecture designed to pass WPCS on the first try.',
      tags: ['Custom Plugins', 'Hooks & Filters', 'WPCS Compliance'],
      icon: '◆'
    },
    {
      num: '02',
      title: 'API Integrations',
      desc: 'Connecting WordPress to the outside world. OAuth2 flows, webhook verification, and complex REST API query classes.',
      tags: ['OAuth2', 'Webhooks', 'REST API'],
      icon: '▣'
    },
    {
      num: '03',
      title: 'Automation Engines',
      desc: 'Building the logic that powers visual workflow builders. Connecting triggers and actions reliably without timeout failures.',
      tags: ['Workflow Logic', 'Data Parsing', 'Queue Systems'],
      icon: '◈'
    },
    {
      num: '04',
      title: 'PHP Backend Arch',
      desc: 'Clean, object-oriented PHP architecture. Building modular, reusable classes and interfaces for complex systems.',
      tags: ['OOP PHP', 'MySQL / $wpdb', 'Design Patterns'],
      icon: '▲'
    },
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section-number">02 / What I Do</div>
        <div className="section-head">
          <h2>Four disciplines, one end-to-end workflow.</h2>
          <p>From core plugin architecture to complex API handshakes — every service below is something I build, deploy, and maintain myself.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.num} className="service-card card">
              <div className="service-num">{s.num} <span style={{ marginLeft: '8px' }}>{s.icon}</span></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(t => <span key={t}>✓ {t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
