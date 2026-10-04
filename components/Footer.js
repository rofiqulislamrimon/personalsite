import socials from './socials';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <span>© {new Date().getFullYear()} Rofiqul Islam Rimon. Designed & built with care.</span>
        
        <div style={{ display: 'flex', gap: '24px' }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-faint)' }}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
