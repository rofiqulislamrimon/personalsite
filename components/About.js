export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2>Backend-first, plugin-native.</h2>
        </div>
        <div className="about-body">
          <p>
            I write PHP that lives inside WordPress — plugins, not themes.
            Most of my day is spent inside the{' '}
            <code className="inline-code">Zaplane\Integrations</code>{' '}
            namespace, wiring third-party services into a single automation
            engine so a workflow builder can drag a trigger onto a canvas and
            trust that it actually fires.
          </p>
          <p>
            That means webhook verification, OAuth token refresh logic that
            survives scope changes, and query classes that page through an
            API correctly the first time. I develop locally with Local by
            Flywheel and ship to a live production environment on
            Hostinger, so I care about code that behaves the same on both.
          </p>
          <p>
            Every integration follows the same contract —{' '}
            <code className="inline-code">get_triggers()</code>,{' '}
            <code className="inline-code">resolve_trigger()</code>,{' '}
            <code className="inline-code">execute_node()</code> — and every
            line is expected to pass WordPress Coding Standards before it
            merges.
          </p>
        </div>
      </div>
    </section>
  );
}
