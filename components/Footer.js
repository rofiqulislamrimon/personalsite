import socials from './socials';

const github = socials.find((s) => s.label === 'GitHub');

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <span>© {new Date().getFullYear()} Md Rofiqul Islam</span>
        <a href={github.href} target="_blank" rel="noopener noreferrer" className="site-footer-note">
          github.com/rofiqulislamrimon
        </a>
      </div>
    </footer>
  );
}
