export default function Skills() {
  const groups = [
    {
      label: 'Languages & Core',
      items: [
        { name: 'PHP', desc: 'Core' },
        { name: 'JavaScript', desc: 'ES6+' },
        { name: 'HTML5 / CSS3', desc: 'Web' },
        { name: 'MySQL', desc: 'Database' }
      ]
    },
    {
      label: 'WordPress & Tools',
      items: [
        { name: 'Plugin Architecture', desc: 'Architecture' },
        { name: 'REST APIs', desc: 'Integration' },
        { name: 'WPCS', desc: 'Quality' },
        { name: 'OAuth2 / Webhooks', desc: 'Automation' }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-number">05 / Technical Skills</div>
        <div className="section-head">
          <h2>The backend stack.</h2>
          <p>Languages, frameworks, and architectures I use to ship complete plugins.</p>
        </div>
        
        <div className="split-layout">
          {groups.map(g => (
            <div key={g.label}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--text)', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
                {g.label}
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {g.items.map(item => (
                  <li key={item.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontWeight: 500 }}>{item.name}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-faint)' }}>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
