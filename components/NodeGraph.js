const nodes = [
  { id: 'wp', label: 'WordPress', x: 90, y: 70 },
  { id: 'wa', label: 'WhatsApp', x: 430, y: 60 },
  { id: 'slack', label: 'Slack', x: 460, y: 220 },
  { id: 'woo', label: 'WooCommerce', x: 40, y: 260 },
  { id: 'tg', label: 'Telegram', x: 420, y: 400 },
  { id: 'zoom', label: 'Zoom', x: 70, y: 420 },
];

const hub = { x: 250, y: 240 };

export default function NodeGraph() {
  return (
    <svg
      viewBox="0 0 500 480"
      className="node-graph"
      role="img"
      aria-label="Diagram of integrations connecting into a central workflow hub"
    >
      {nodes.map((n, i) => (
        <path
          key={n.id}
          className="node-graph-edge"
          style={{ animationDelay: `${i * 0.35}s` }}
          d={`M ${n.x} ${n.y} L ${hub.x} ${hub.y}`}
        />
      ))}

      <circle cx={hub.x} cy={hub.y} r="34" className="node-graph-hub" />
      <text x={hub.x} y={hub.y + 5} textAnchor="middle" className="node-graph-hub-label">
        zaplane
      </text>

      {nodes.map((n, i) => (
        <g key={n.id} className="node-graph-node" style={{ animationDelay: `${i * 0.35}s` }}>
          <circle cx={n.x} cy={n.y} r="5.5" />
          <text
            x={n.x}
            y={n.y - 14}
            textAnchor={n.x < hub.x ? 'end' : 'start'}
            className="node-graph-label"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
