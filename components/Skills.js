const groups = [
  {
    label: 'Core',
    items: ['PHP', 'WordPress Plugin Architecture', '$wpdb / MySQL', 'REST APIs'],
  },
  {
    label: 'Automation',
    items: ['OAuth2 flows', 'Webhook verification', 'Workflow engines', 'Integration design'],
  },
  {
    label: 'Frontend',
    items: ['React', 'JavaScript', 'Workflow canvas UI'],
  },
  {
    label: 'Quality',
    items: ['PHPCS / WPCS compliance', 'Debugging production issues', 'Code review'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <h2>What I actually ship with.</h2>
        </div>
        <div className="skills-grid">
          {groups.map((g) => (
            <div key={g.label} className="skill-group card">
              <h3 className="skill-group-label">{g.label}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
