import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useRouter } from '../../router/Router';
import { useLanguage } from '../../context/LanguageContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { path } = useRouter();
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <a
        href="#main-content"
        className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 z-50"
      >
        {t.common.skipToContent}
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <div key={path} className="page-enter container-main pb-24 pt-12 sm:pt-20">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
