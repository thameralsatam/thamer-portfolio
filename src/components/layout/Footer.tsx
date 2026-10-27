import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-main flex flex-col gap-1 py-10 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {t.footer.copyright}
        </p>
        <p>{t.footer.tagline}</p>
      </div>
    </footer>
  );
};
