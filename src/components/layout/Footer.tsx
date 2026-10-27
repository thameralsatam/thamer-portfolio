import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from '../../router/Router';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#e8ded1] mt-auto py-12 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#6b5e53]">
          <div className="space-y-1">
            <p className="font-semibold text-[#241e1a] font-sans">
              &copy; {currentYear} {t.footer.copyright}
            </p>
            <p className="text-[#7d6f63] font-sans">{t.siteSubtitle}</p>
          </div>

          <nav className="flex items-center gap-2 flex-wrap" aria-label="Fußzeilennavigation">
            <Link to="/" className="cream-pill px-3 py-1 hover:text-[#241e1a] transition-colors">
              {t.nav.home}
            </Link>
            <Link to="/projects" className="cream-pill px-3 py-1 hover:text-[#241e1a] transition-colors">
              {t.nav.projects}
            </Link>
            <Link to="/about" className="cream-pill px-3 py-1 hover:text-[#241e1a] transition-colors">
              {t.nav.about}
            </Link>
            <Link to="/contact" className="cream-pill px-3 py-1 hover:text-[#241e1a] transition-colors">
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
