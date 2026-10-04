'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

// href points at the home page explicitly ("/#about") so the links still
// work when you are on /about/, /skills/, etc. `id` is the section id used
// for the scroll-spy highlight on the home page.
const links = [
  { href: '/#about', id: 'about', label: 'About' },
  { href: '/#services', id: 'services', label: 'Services' },
  { href: '/#engine', id: 'engine', label: 'Architecture' },
  { href: '/#projects', id: 'projects', label: 'Projects' },
  { href: '/#skills', id: 'skills', label: 'Skills' },
  { href: '/#contact', id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll-spy only matters on the home page, where all sections exist.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    let observed = 0;
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) {
        observer.observe(el);
        observed += 1;
      }
    });

    // On subpages there is (at most) a single section — don't highlight it.
    if (!observed) setActive('');

    return () => observer.disconnect();
  }, []);

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a href="/#top" className="logo">
          Rofiqul Islam<span className="logo-dot"> Rimon</span>
        </a>

        <nav id="site-nav" className={`nav${menuOpen ? ' nav-open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.id ? 'nav-active' : ''}
              onClick={handleNavClick}
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a href="/#contact" className="btn btn-solid nav-cta" onClick={handleNavClick}>
            Let's talk →
          </a>
        </nav>

        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
