const integrations = [
  'WhatsApp',
  'Slack',
  'Telegram',
  'WooCommerce',
  'Zoom',
  'Google Meet',
  'Trello',
  'FluentCRM',
  'StoreEngine',
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Projects</p>
          <h2>Flagship work.</h2>
        </div>

        <div className="project-card card">
          <div className="project-card-head">
            <h3>Zaplane</h3>
            <span className="project-tag">WordPress plugin · PHP / React</span>
          </div>
          <p>
            A workflow automation platform in the spirit of Zapier or Make,
            built to run natively inside WordPress. Users chain triggers and
            actions across a growing set of third-party services on a visual
            canvas.
          </p>
          <p className="project-role">
            My part: the integration layer — each service plugs into a
            shared <code className="inline-code">IntegrationBase</code>{' '}
            contract for triggers, actions, and dynamic query fields, backed
            by an <code className="inline-code">OAuthHandler</code> and a
            webhook controller.
          </p>
          <div className="integration-list">
            {integrations.map((name) => (
              <span key={name} className="integration-chip">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
