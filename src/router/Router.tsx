import React, { createContext, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

interface RouterContextType {
  path: string;
  navigate: (to: string) => void;
  params: Record<string, string>;
  nudge: number;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function normalizePath(pathname: string, hash: string): string {
  // If hash is present (e.g. #/projects/fontat), prefer hash for static deployment compatibility
  if (hash && hash.startsWith('#/')) {
    return hash.slice(1);
  }
  return pathname || '/';
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState<string>(() => {
    return normalizePath(window.location.pathname, window.location.hash);
  });

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname, window.location.hash));
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const [nudge, setNudge] = useState(0);

  const navigate = (to: string) => {
    if (to === path) {
      // نفس الصفحة: لا إعادة تحميل، فقط تنبيه لطيف وعودة ناعمة للأعلى
      setNudge((n) => n + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // For universal static compatibility on Cloudflare Pages and preview environments
    window.history.pushState({}, '', to);
    const apply = () => {
      setPath(to);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    const doc = document as unknown as { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      doc.startViewTransition(() => flushSync(apply));
    } else {
      apply();
    }
  };

  // Simple route parameter parsing (e.g. /projects/:slug)
  const params: Record<string, string> = {};
  if (path.startsWith('/projects/')) {
    const slug = path.replace('/projects/', '').split('/')[0];
    if (slug) {
      params.slug = slug;
    }
  }

  return (
    <RouterContext.Provider value={{ path, navigate, params, nudge }}>
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter(): RouterContextType {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, onClick, ...rest }) => {
  const { navigate, path } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      navigate(to);
    }
  };

  const isActive = path === to || (to !== '/' && path.startsWith(to));

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      aria-current={isActive ? 'page' : undefined}
      {...rest}
    >
      {children}
    </a>
  );
};
