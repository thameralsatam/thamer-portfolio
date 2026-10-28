import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Link, useRouter } from '../../router/Router';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const { path } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [path]);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/projects', label: t.nav.projects },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header className={`site-header ${scrolled || menuOpen ? 'is-scrolled' : ''}`}>
      <div className="container-main flex h-[4.5rem] items-center justify-between">
        <Link to="/" className="brand">
          {t.siteTitle}
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label={t.common.mainNav}>
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="icon-btn md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t.common.closeMenu : t.common.openMenu}
        >
          {menuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="menu-panel container-main pb-6 md:hidden" aria-label={t.common.mainNav}>
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="menu-link">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
