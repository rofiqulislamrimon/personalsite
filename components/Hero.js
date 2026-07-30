import NodeGraph from './NodeGraph';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">WordPress Plugin &amp; PHP Developer</p>
          <h1>
            I build the plumbing<br />that connects your apps.
          </h1>
          <p className="hero-sub">
            Md Rofiqul Islam — I design and ship integrations for{' '}
            <strong>Zaplane</strong>, a workflow automation platform built as a
            WordPress plugin. OAuth flows, webhooks, and clean PHP that passes
            WPCS on the first try.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-solid">
              View projects
            </a>
            <a href="#contact" className="btn">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <NodeGraph />
        </div>
      </div>
    </section>
  );
}
