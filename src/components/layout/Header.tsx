import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter, Link } from '../../router/Router';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const { path } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/projects', label: t.nav.projects },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  const isCurrent = (to: string) => {
    if (to === '/') return path === '/';
    return path.startsWith(to);
  };

  return (
    <header className="sticky top-4 z-40 w-full max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-300">
      <div className="cream-header rounded-full px-4 sm:px-6 py-2 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          to="/"
          className="font-display font-bold text-base sm:text-lg tracking-tight text-[#241e1a] hover:text-[#9e5a26] transition-colors whitespace-nowrap shrink-0 px-2"
        >
          {t.siteTitle}
        </Link>

        {/* Desktop Navigation Pills */}
        <nav
          className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#f4ece0]/70 border border-[#e8dfd3]"
          aria-label="Navigation"
        >
          {navLinks.map((link) => {
            const active = isCurrent(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-1 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                  active
                    ? 'cream-pill-primary font-semibold'
                    : 'text-[#6b5e53] hover:text-[#241e1a] hover:bg-[#eae1d3]/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Language Switcher (No Theme Toggle - strictly pure cream palette) */}
        <div className="flex items-center gap-2 shrink-0">
          <LanguageSwitcher />

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-[#52453c] hover:bg-[#ede5d8]/70 transition-colors"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 cream-header rounded-3xl p-3 space-y-1 animate-page-enter">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 text-xs font-medium rounded-full transition-colors ${
                isCurrent(link.to)
                  ? 'cream-pill-primary font-semibold'
                  : 'text-[#6b5e53] hover:bg-[#ede5d8]/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
