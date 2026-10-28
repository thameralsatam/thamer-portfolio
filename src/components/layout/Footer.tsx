import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from '../../router/Router';
import { GithubIcon, GmailIcon } from '../common/BrandIcons';

const EMAIL = 'alsatamthamer@gmail.com';
const GITHUB_URL = 'https://github.com/thameralsatam';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { to: '/projects', label: t.nav.projects },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="site-footer">
      <div className="container-main py-16 sm:py-20">
        <div className="footer-top-row">
          <div>
            <h2 className="footer-title">{t.footer.heading}</h2>
            <p className="footer-text">{t.footer.text}</p>
          </div>
          <div className="footer-actions">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener" className="footer-icon" aria-label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href={`mailto:${EMAIL}`} className="footer-icon" aria-label="Gmail">
              <GmailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {t.footer.copyright} · {t.footer.tagline}
          </p>
          <nav className="footer-nav" aria-label={t.common.mainNav}>
            {links.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="footer-top"
            aria-label={t.footer.topLabel}
          >
            <span>{t.footer.top}</span>
            <ArrowUp className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
