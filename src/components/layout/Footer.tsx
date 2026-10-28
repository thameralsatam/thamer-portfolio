import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-main flex flex-col gap-6 py-10 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>
            © {year} {t.footer.copyright}
          </p>
          <p>{t.footer.tagline}</p>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-link self-start sm:self-auto"
          aria-label="العودة إلى الأعلى"
        >
          <span>الأعلى</span>
          <ArrowUp className="icon-lift h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
};
