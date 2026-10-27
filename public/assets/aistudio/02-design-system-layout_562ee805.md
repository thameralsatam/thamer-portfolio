# الملف 2 من 8: نظام التصميم والرأس والتذييل

**نفّذ الخطوات حرفياً وبالترتيب. لا تغيّر أي كود ولا تضف أو تحذف شيئاً من عندك ولا تحسّن شيئاً. كل ملف أدناه: استبدل محتواه كاملاً بالكود المعطى (أنشئه إن لم يكن موجوداً). بعد الانتهاء اكتب فقط: تم الملف رقم كذا.**

احذف الملف `src/components/common/LanguageSwitcher.tsx`. ثم استبدل/أنشئ الملفات التالية. ملاحظة: قد تبدو الصفحات غير مكتملة في المعاينة حتى الملف 7، وهذا طبيعي.

## `src/index.css`

```css
@import "tailwindcss";

@theme static {
  --font-display: 'Kufam', 'IBM Plex Sans Arabic', sans-serif;
  --font-sans: 'IBM Plex Sans Arabic', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;

  --color-paper-50: #fdfaf4;
  --color-paper-100: #f9f4ea;
  --color-paper-200: #f2eadb;
  --color-paper-300: #e8dcc6;
  --color-line: #e6dccb;
  --color-line-strong: #d6c8b0;

  --color-ink-900: #2b2218;
  --color-ink-700: #52463a;
  --color-ink-500: #75685a;
  --color-ink-400: #9b8d7b;

  --color-clay-700: #8a4a2d;
  --color-clay-600: #a35b3a;
  --color-clay-100: #f3e3d6;
  --color-clay-50: #f8eee6;
}

:root {
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}
:root[dir='rtl'] { --shift: -1; --origin: right; }
:root[dir='ltr'] { --shift: 1; --origin: left; }

@layer base {
  html { scroll-behavior: smooth; }

  body {
    background-color: var(--color-paper-100);
    color: var(--color-ink-700);
    font-weight: 300;
    font-size: 1.0625rem;
    line-height: 2;
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background:
      radial-gradient(60rem 36rem at 85% -8%, rgba(214, 160, 120, 0.2), transparent 60%),
      radial-gradient(48rem 30rem at -5% 8%, rgba(236, 214, 170, 0.28), transparent 62%),
      linear-gradient(180deg, #fefcf7 0%, #f9f4ea 48%, #f2eadb 100%);
  }

  h1, h2, h3, h4 {
    font-family: var(--font-display);
    font-weight: 400;
    color: var(--color-ink-900);
    text-wrap: balance;
  }

  ::selection { background: var(--color-clay-100); color: var(--color-ink-900); }

  :focus-visible {
    outline: 2px solid var(--color-clay-600);
    outline-offset: 3px;
    border-radius: 0.5rem;
  }

  input[type='range'] { accent-color: var(--color-clay-600); }
}

@layer components {
  .container-main { width: min(100% - 2.5rem, 52rem); margin-inline: auto; }
  @media (min-width: 640px) {
    .container-main { width: min(100% - 4rem, 52rem); }
  }

  /* الطباعة: نحيفة وكبيرة */
  .display {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(2.5rem, 7vw, 4.75rem);
    line-height: 1.35;
    color: var(--color-ink-900);
    text-wrap: balance;
  }
  .title {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(1.9rem, 4.4vw, 2.75rem);
    line-height: 1.4;
  }
  .heading {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(1.25rem, 2.4vw, 1.5rem);
    line-height: 1.6;
  }
  .lead {
    font-weight: 300;
    font-size: clamp(1.15rem, 2.2vw, 1.45rem);
    line-height: 2;
    color: var(--color-ink-700);
    max-width: 38rem;
    text-wrap: pretty;
  }
  .prose-ar {
    font-weight: 300;
    font-size: 1.125rem;
    line-height: 2.1;
    color: var(--color-ink-700);
    max-width: 40rem;
    text-wrap: pretty;
  }
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 400;
    font-size: 0.95rem;
    color: var(--color-ink-500);
  }
  .eyebrow::before {
    content: '';
    width: 1.75rem;
    height: 1px;
    background: var(--color-clay-600);
  }
  .muted { color: var(--color-ink-500); }

  /* الأزرار */
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.8rem 1.6rem;
    border-radius: 999px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4;
    cursor: pointer;
    transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease),
      background-color 0.35s var(--ease), border-color 0.35s var(--ease);
  }
  .btn:active { transform: scale(0.98); }
  .btn-primary {
    color: var(--color-paper-50);
    background: linear-gradient(180deg, #463a2d 0%, #2b2218 100%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 8px 20px -10px rgba(43, 34, 24, 0.55);
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 16px 28px -12px rgba(43, 34, 24, 0.55);
  }
  .btn-ghost {
    color: var(--color-ink-900);
    border: 1px solid var(--color-line-strong);
    background: rgba(255, 255, 255, 0.35);
  }
  .btn-ghost:hover { border-color: var(--color-clay-600); background: rgba(255, 255, 255, 0.75); }
  .btn .icon-shift { transition: transform 0.35s var(--ease); }
  .btn:hover .icon-shift { transform: translateX(calc(var(--shift) * 4px)); }

  .text-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-ink-900);
    font-weight: 400;
  }
  .text-link .icon-shift { transition: transform 0.35s var(--ease); }
  .text-link:hover .icon-shift { transform: translateX(calc(var(--shift) * 4px)); }
  .text-link:hover { color: var(--color-clay-700); }

  /* الرأس */
  .site-header {
    position: sticky;
    top: 0;
    z-index: 40;
    border-bottom: 1px solid transparent;
    transition: background-color 0.4s var(--ease), border-color 0.4s var(--ease);
  }
  .site-header.is-scrolled {
    background: rgba(253, 250, 244, 0.8);
    -webkit-backdrop-filter: blur(16px) saturate(1.2);
    backdrop-filter: blur(16px) saturate(1.2);
    border-bottom-color: var(--color-line);
  }
  .brand { font-family: var(--font-display); font-size: 1.25rem; color: var(--color-ink-900); }
  .nav-link {
    position: relative;
    padding: 0.35rem 0;
    font-weight: 400;
    color: var(--color-ink-500);
    transition: color 0.3s var(--ease);
  }
  .nav-link::after {
    content: '';
    position: absolute;
    inset-inline: 0;
    bottom: -2px;
    height: 1px;
    background: var(--color-clay-600);
    transform: scaleX(0);
    transform-origin: var(--origin);
    transition: transform 0.45s var(--ease);
  }
  .nav-link:hover, .nav-link[aria-current='page'] { color: var(--color-ink-900); }
  .nav-link:hover::after, .nav-link[aria-current='page']::after { transform: scaleX(1); }
  .icon-btn {
    display: inline-grid;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 999px;
    color: var(--color-ink-900);
    transition: background-color 0.3s var(--ease);
  }
  .icon-btn:hover { background: rgba(43, 34, 24, 0.06); }
  .menu-panel { animation: menuIn 0.4s var(--ease) both; }
  .menu-link {
    display: block;
    padding: 0.9rem 0;
    border-top: 1px solid var(--color-line);
    font-size: 1.15rem;
    color: var(--color-ink-700);
  }
  .menu-link[aria-current='page'] { color: var(--color-ink-900); }

  /* حالة المشروع */
  .status { display: inline-flex; align-items: center; gap: 0.55rem; }
  .status .dot {
    flex: none;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 999px;
    background: var(--color-clay-600);
    box-shadow: 0 0 0 3px rgba(163, 91, 58, 0.15);
  }
  .meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.25rem 1.25rem;
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--color-ink-500);
  }

  /* قائمة المشاريع */
  .project-list { border-bottom: 1px solid var(--color-line); }
  .project-row {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1.25rem 1.75rem;
    align-items: start;
    padding: 2.25rem 0;
    border-top: 1px solid var(--color-line);
    isolation: isolate;
  }
  .project-row::before {
    content: '';
    position: absolute;
    inset: 0.5rem -1rem;
    z-index: -1;
    border-radius: 1.5rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(248, 238, 230, 0.7));
    box-shadow: 0 0 0 1px var(--color-line), 0 18px 36px -24px rgba(90, 62, 40, 0.35);
    opacity: 0;
    transform: scale(0.985);
    transition: opacity 0.45s var(--ease), transform 0.45s var(--ease);
  }
  .project-row:hover::before, .project-row:focus-visible::before { opacity: 1; transform: scale(1); }
  .project-row .index {
    padding-top: 0.9rem;
    font-family: var(--font-display);
    color: var(--color-ink-400);
    font-variant-numeric: tabular-nums;
  }
  .project-row .arrow {
    margin-top: 0.9rem;
    color: var(--color-ink-400);
    transition: transform 0.45s var(--ease), color 0.45s var(--ease);
  }
  .project-row:hover .arrow { color: var(--color-clay-700); transform: translateX(calc(var(--shift) * 6px)); }
  @media (max-width: 639px) {
    .project-row { grid-template-columns: 1fr auto; }
    .project-row .index { display: none; }
  }
  .project-title {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(1.6rem, 3.4vw, 2.25rem);
    line-height: 1.5;
    color: var(--color-ink-900);
  }
  .project-summary { max-width: 38rem; color: var(--color-ink-700); }
  .tech-line { font-size: 0.9rem; font-weight: 400; color: var(--color-ink-500); }

  /* الأسطح والقوائم */
  .surface {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(250, 244, 234, 0.88));
    border: 1px solid var(--color-line);
    border-radius: 1.5rem;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 24px 48px -32px rgba(90, 62, 40, 0.35);
  }
  .feature-list li { position: relative; padding-inline-start: 1.4rem; }
  .feature-list li::before {
    content: '';
    position: absolute;
    inset-inline-start: 0;
    top: 1.05rem;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 999px;
    background: var(--color-clay-600);
    opacity: 0.55;
  }
  .pager { display: block; padding: 1.5rem 0; }
  .pager .pager-title {
    font-family: var(--font-display);
    font-size: 1.5rem;
    line-height: 1.5;
    color: var(--color-ink-900);
    transition: color 0.35s var(--ease);
  }
  .pager:hover .pager-title { color: var(--color-clay-700); }

  /* الحركة */
  .reveal {
    opacity: 0;
    transform: translateY(14px);
    transition: opacity 0.9s var(--ease), transform 0.9s var(--ease);
  }
  .reveal.is-visible { opacity: 1; transform: none; }
  .page-enter { animation: pageIn 0.5s var(--ease) both; }
  .fade-swap { animation: pageIn 0.45s var(--ease) both; }
  .hero-glow {
    position: absolute;
    inset-inline-end: -12%;
    top: -6rem;
    z-index: -1;
    width: 34rem;
    height: 34rem;
    border-radius: 50%;
    background: radial-gradient(closest-side, rgba(214, 150, 110, 0.22), transparent);
    pointer-events: none;
    animation: drift 28s ease-in-out infinite alternate;
  }
}

@keyframes pageIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes menuIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
@keyframes drift {
  from { transform: translate3d(0, 0, 0) scale(1); }
  to { transform: translate3d(-3rem, 2rem, 0) scale(1.12); }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    transition-delay: 0ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}
```

## `src/components/common/Reveal.tsx`

```tsx
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/** يُظهر المحتوى بنعومة عند وصوله إلى الشاشة. */
export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};
```

## `src/components/common/DirectionalArrow.tsx`

```tsx
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface DirectionalArrowProps {
  direction: 'forward' | 'back';
  className?: string;
}

/** سهم يتبع اتجاه اللغة: للأمام يشير لليسار في العربية. */
export const DirectionalArrow: React.FC<DirectionalArrowProps> = ({ direction, className }) => {
  const { dir } = useLanguage();
  const pointsLeft = (dir === 'rtl') === (direction === 'forward');
  const Icon = pointsLeft ? ArrowLeft : ArrowRight;
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
};
```

## `src/components/common/StatusBadge.tsx`

```tsx
import React from 'react';
import { ProjectStatusKey } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface StatusBadgeProps {
  statusKey: ProjectStatusKey;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ statusKey, className = '' }) => {
  const { t } = useLanguage();
  return (
    <span className={`status ${className}`}>
      <span className="dot" aria-hidden="true" />
      <span>{t.status[statusKey]}</span>
    </span>
  );
};
```

## `src/components/layout/Layout.tsx`

```tsx
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
```

## `src/components/layout/Header.tsx`

```tsx
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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
```

## `src/components/layout/Footer.tsx`

```tsx
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
```

