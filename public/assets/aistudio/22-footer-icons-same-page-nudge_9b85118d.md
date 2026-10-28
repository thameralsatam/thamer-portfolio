# الملف 22: رموز التواصل بالتذييل، حركة الضغط على نفس الصفحة، وترتيب الشريط

**نفّذ الخطوات حرفياً وبالترتيب. لا تغيّر أي كود ولا تضف أو تحذف شيئاً من عندك ولا تحسّن شيئاً. بعد الانتهاء اكتب فقط: تم الملف رقم 22.**

## الخطوة 1: `src/index.css`

ابحث عن السطر الذي يبدأ بـ `/* ===== لمسات غامقة`. احذف هذا السطر وكل ما بعده حتى نهاية الملف (هذا يرجّع أحجام وألوان مربعات الأيقونات كما كانت). ثم أضف الكود التالي في نهاية الملف كما هو:

```css
/* ===== لمسات غامقة: التذييل والشريط وحركة نفس الصفحة ===== */
.btn-ghost { border-color: #bfae92; }

/* الشريط: بنفس لون الخلفية وبحدود واضحة، والرمز بجانب الرقم */
.facts {
  background: transparent;
  border: 1px solid #c9b99c;
  box-shadow: none;
}
.facts .fact + .fact { border-inline-start: 1px solid #d9ccb4; }
.facts .fact { gap: 0.5rem; padding: 1.5rem 0.75rem; }
.facts .fact-head { display: inline-flex; align-items: center; gap: 0.9rem; }
.facts .fact-num { color: var(--color-ink-900); line-height: 1.2; }
.facts .fact-label { color: var(--color-ink-500); }

/* قائمة المزايا: علامات صح */
.feature-list li { display: flex; align-items: flex-start; gap: 0.75rem; padding-inline-start: 0; }
.feature-list li::before { display: none; }
.feature-list .check-icon {
  flex: none;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.55rem;
  padding: 0.3rem;
  border-radius: 999px;
  color: var(--color-clay-700);
  background: var(--color-clay-100);
}

/* التذييل */
.site-footer {
  background: linear-gradient(180deg, #2f2519 0%, #211a12 100%);
  color: #d8ccb6;
}
.site-footer :focus-visible { outline-color: #e0a07f; }
.footer-top-row {
  display: grid;
  gap: 2rem;
  align-items: center;
}
@media (min-width: 768px) {
  .footer-top-row { grid-template-columns: 1fr auto; gap: 3rem; }
}
.footer-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(1.4rem, 2.6vw, 1.85rem);
  line-height: 1.6;
  color: var(--color-paper-50);
}
.footer-text { max-width: 30rem; margin-top: 0.25rem; font-size: 1rem; line-height: 1.9; color: #cbbfa8; }
.footer-actions { display: flex; align-items: center; gap: 0.75rem; }
.footer-icon {
  display: inline-grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  color: var(--color-paper-50);
  border: 1px solid rgba(253, 250, 244, 0.28);
  transition: transform 0.35s var(--ease), background-color 0.35s var(--ease), color 0.35s var(--ease), border-color 0.35s var(--ease);
}
.footer-icon:hover {
  transform: translateY(-3px);
  background: var(--color-paper-50);
  color: var(--color-ink-900);
  border-color: var(--color-paper-50);
}
.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 2rem;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(253, 250, 244, 0.14);
  font-size: 0.875rem;
  color: #b9ab94;
}
.footer-nav { display: flex; gap: 1.5rem; }
.footer-nav a { transition: color 0.3s var(--ease); }
.footer-nav a:hover, .footer-top:hover { color: var(--color-paper-50); }
.footer-top { display: inline-flex; align-items: center; gap: 0.5rem; color: #b9ab94; transition: color 0.3s var(--ease); }

/* الضغط على رابط الصفحة الحالية: نبضة لطيفة بدل إعادة التحميل */
@keyframes nudgeA { from { opacity: 0.35; transform: translateY(12px); } to { opacity: 1; transform: none; } }
@keyframes nudgeB { from { opacity: 0.35; transform: translateY(12px); } to { opacity: 1; transform: none; } }
.nudge-a { animation: nudgeA 0.75s var(--ease) backwards; }
.nudge-b { animation: nudgeB 0.75s var(--ease) backwards; }
@keyframes pingA { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }
@keyframes pingB { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }
.nav-link.ping-a::after { animation: pingA 0.7s var(--ease); }
.nav-link.ping-b::after { animation: pingB 0.7s var(--ease); }
```

## الخطوة 2: أنشئ هذا الملف الجديد واستبدل الباقي كاملاً

## `src/components/common/BrandIcons.tsx`

```tsx
import React from 'react';

interface IconProps {
  className?: string;
}

/** رمز GitHub (Octicons، رخصة MIT). */
export const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

/** رمز بريد بحرف M على طريقة Gmail (رسم بسيط خاص بالموقع). */
export const GmailIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="M3 7l9 7 9-7" />
  </svg>
);
```

## `src/components/layout/Footer.tsx`

```tsx
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
            aria-label="العودة إلى الأعلى"
          >
            <span>الأعلى</span>
            <ArrowUp className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
```

## `src/pages/HomePage.tsx`

```tsx
import React from 'react';
import { ArrowDown, Globe, Hammer, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getFeaturedProjects, projects } from '../data/projects';
import { Link } from '../router/Router';
import { Reveal } from '../components/common/Reveal';
import { ProjectRow } from '../components/common/ProjectRow';
import { DirectionalArrow } from '../components/common/DirectionalArrow';
import { Words } from '../components/common/Words';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const featured = getFeaturedProjects();
  const facts = [
    { Icon: Layers, num: projects.length, label: 'مشاريع' },
    { Icon: Globe, num: projects.filter((p) => p.links.liveUrl).length, label: 'منشورة على الإنترنت' },
    {
      Icon: Hammer,
      num: projects.filter((p) => p.statusKey === 'studio_lab' || p.statusKey === 'arabic_font_tool').length,
      label: 'قيد التطوير',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-36">
      <section className="relative pt-4 sm:pt-12">
        <div className="hero-glow" aria-hidden="true" />
        <Reveal>
          <p className="eyebrow">{t.home.eyebrow}</p>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="display mt-8 max-w-3xl">
            <Words text={t.home.heroHeadline} />
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="lead mt-8">{t.home.heroDescription}</p>
        </Reveal>
        <Reveal delay={270}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn btn-primary">
              <span>{t.home.exploreWork}</span>
              <ArrowDown className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </a>
            <Link to="/contact" className="btn btn-ghost">
              {t.home.getInTouch}
            </Link>
          </div>
        </Reveal>
      </section>

      <section aria-label="نظرة سريعة" className="facts">
        {facts.map((fact) => (
          <div key={fact.label} className="fact">
            <span className="fact-head">
              <span className="icon-tile">
                <fact.Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="fact-num">{fact.num}</span>
            </span>
            <span className="fact-label">{fact.label}</span>
          </div>
        ))}
      </section>

      <section id="projects" className="scroll-mt-24">
        <Reveal>
          <h2 className="title mb-8 sm:mb-10">{t.home.featuredTitle}</h2>
        </Reveal>
        <div className="project-list">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectRow project={project} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-12">
            <Link to="/projects" className="text-link">
              <span>{t.home.allProjects}</span>
              <DirectionalArrow direction="forward" className="icon-shift h-5 w-5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
```

## `src/router/Router.tsx`

```tsx
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
```

## `src/components/layout/Layout.tsx`

```tsx
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useRouter } from '../../router/Router';
import { useLanguage } from '../../context/LanguageContext';
import { getProjectBySlug } from '../../data/projects';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { path, params, nudge } = useRouter();
  const { t, language } = useLanguage();

  useEffect(() => {
    let page = '';
    if (path.startsWith('/projects/')) {
      const project = params.slug ? getProjectBySlug(params.slug) : undefined;
      page = project ? project.translations[language].title : t.common.notFoundTitle;
    } else if (path === '/projects') {
      page = t.nav.projects;
    } else if (path === '/about') {
      page = t.nav.about;
    } else if (path === '/contact') {
      page = t.nav.contact;
    }
    document.title = page ? `${page} — ${t.siteTitle}` : `${t.siteTitle} — ${t.home.eyebrow}`;
  }, [path, params.slug, language, t]);

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
          <div className={nudge === 0 ? '' : nudge % 2 ? 'nudge-a' : 'nudge-b'}>{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
```

## `src/components/layout/Header.tsx`

```tsx
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Link, useRouter } from '../../router/Router';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const { path, nudge } = useRouter();
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

  const isActive = (to: string) => (to === '/' ? path === '/' : path.startsWith(to));

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
            <Link key={link.to} to={link.to} className={`nav-link ${isActive(link.to) && nudge > 0 ? (nudge % 2 ? 'ping-a' : 'ping-b') : ''}`}>
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
            <Link key={link.to} to={link.to} className="menu-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
```

## الخطوة 3

شغّل `npm run build` وأخبرني إن نجح. لا تحفظ هذا الملف داخل المشروع.
