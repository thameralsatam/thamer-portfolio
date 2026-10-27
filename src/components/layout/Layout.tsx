import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useRouter } from '../../router/Router';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { path } = useRouter();

  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-[#eddcc3] selection:text-[#502a0a]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 px-4 py-2 cream-pill text-xs font-medium shadow-md transition-all"
      >
        Zum Inhalt springen
      </a>
      <Header />
      <main id="main-content" className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-16">
        <div key={path} className="animate-page-enter">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
