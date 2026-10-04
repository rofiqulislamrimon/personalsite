export default function Engine() {
  return (
    <section id="engine">
      <div className="container">
        <div className="section-number">03 / The Engine</div>
        <div className="section-head">
          <h2>Backend architecture I built myself.</h2>
          <p>
            This isn't just frontend glue code. It's robust infrastructure I architected for <strong>Zaplane</strong>. 
            An integration layer where each service plugs into a shared `IntegrationBase` contract, backed by an `OAuthHandler` 
            and a secure webhook controller.
          </p>
        </div>

        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot" style={{ background: '#ff5f56' }} />
            <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
            <div className="terminal-dot" style={{ background: '#27c93f' }} />
            <div style={{ marginLeft: '12px', color: 'var(--text-faint)', fontSize: '0.8rem' }}>rofiqul@zaplane: ~/integrations</div>
          </div>
          <div className="terminal-body">
            <div><span className="terminal-prompt">$</span> phpcs --standard=WordPress zaplane-core/</div>
            <div className="terminal-success" style={{ marginBottom: '16px' }}>[OK] No syntax errors detected. WPCS 100% compliant.</div>
            
            <div><span className="terminal-prompt">$</span> zaplane-cli auth:test --provider=slack</div>
            <div style={{ color: 'var(--text-muted)' }}>Initiating OAuth2 handshake...</div>
            <div style={{ color: 'var(--text-muted)' }}>Requesting scopes: chat:write, channels:read</div>
            <div className="terminal-success" style={{ marginBottom: '16px' }}>[OK] Token acquired and stored securely. Refresh token active.</div>

            <div><span className="terminal-prompt">$</span> zaplane-cli webhook:listen --port=443</div>
            <div style={{ color: 'var(--text-muted)' }}>Listening for incoming webhook payloads...</div>
            <div style={{ color: 'var(--accent)' }}>[EVENT] WooCommerce `order.created` received.</div>
            <div style={{ color: 'var(--text-muted)' }}>Verifying HMAC-SHA256 signature... <span className="terminal-success">[PASS]</span></div>
            <div style={{ color: 'var(--accent)' }}>[EXEC] Triggering Workflow #1402...</div>
            <div className="terminal-success">[OK] Action `slack.send_message` completed in 124ms.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
