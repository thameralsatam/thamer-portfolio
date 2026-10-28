# الملف 12: الرأس، التذييل، عناصر التحكم، تفاعل القوائم

**نفّذ الخطوات حرفياً وبالترتيب. لا تغيّر أي كود ولا تضف أو تحذف شيئاً من عندك ولا تحسّن شيئاً. الملفان الأولان: استبدل محتواهما كاملاً بالكود المعطى. الثالث: ألصق الكتلة في آخر `src/index.css` دون حذف شيء. بعد الانتهاء اكتب فقط: تم الملف رقم 12.**

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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 8);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
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

      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
};
```

## `src/components/layout/Footer.tsx`

```tsx
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
```

## ألصق في آخر `src/index.css`

```css
/* ===== الدفعة 3: شريط التقدم، عناصر التحكم، تفاعل القوائم ===== */
@layer components {
  /* شريط تقدم القراءة: خيط رفيع تحت الرأس */
  .scroll-progress {
    position: absolute;
    inset-inline: 0;
    bottom: -1px;
    height: 2px;
    background: var(--color-clay-600);
    opacity: 0.65;
    transform-origin: var(--origin);
    transform: scaleX(0);
    transition: transform 0.15s linear;
    pointer-events: none;
  }

  /* سهم "الأعلى" يرتفع بنعومة */
  .text-link .icon-lift { transition: transform 0.35s var(--ease); }
  .text-link:hover .icon-lift { transform: translateY(-3px); }

  /* قائمة المشاريع: العنوان والرقم يستجيبان مع الخلفية */
  .project-title { transition: color 0.4s var(--ease); }
  .project-row .index { transition: color 0.4s var(--ease); }
  .project-row:hover .project-title,
  .project-row:focus-visible .project-title { color: var(--color-clay-700); }
  .project-row:hover .index,
  .project-row:focus-visible .index { color: var(--color-clay-600); }

  /* قائمة الجوال: ظهور متتابع للروابط */
  .menu-panel .menu-link {
    opacity: 0;
    animation: menuIn 0.45s var(--ease) both;
  }
  .menu-panel .menu-link:nth-child(1) { animation-delay: 40ms; }
  .menu-panel .menu-link:nth-child(2) { animation-delay: 90ms; }
  .menu-panel .menu-link:nth-child(3) { animation-delay: 140ms; }
  .menu-panel .menu-link:nth-child(4) { animation-delay: 190ms; }

  /* مؤشرات الشرائح (الحجم والوزن...): مسار نحيف ومقبض واضح */
  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    height: 1.5rem;
    background: transparent;
  }
  input[type='range']::-webkit-slider-runnable-track {
    height: 2px;
    border-radius: 999px;
    background: var(--color-line-strong);
  }
  input[type='range']::-moz-range-track {
    height: 2px;
    border-radius: 999px;
    background: var(--color-line-strong);
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1.1rem;
    height: 1.1rem;
    margin-top: -0.5rem;
    border-radius: 999px;
    border: 2px solid var(--color-paper-50);
    background: var(--color-clay-600);
    box-shadow: 0 2px 6px rgba(43, 34, 24, 0.25);
    transition: transform 0.25s var(--ease);
  }
  input[type='range']::-moz-range-thumb {
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 999px;
    border: 2px solid var(--color-paper-50);
    background: var(--color-clay-600);
    box-shadow: 0 2px 6px rgba(43, 34, 24, 0.25);
  }
  input[type='range']:active::-webkit-slider-thumb { transform: scale(1.15); }

  /* قائمة التقنيات والمزايا: مسافات أهدأ */
  .feature-list li { padding-block: 0.1rem; }
  .tech-line { letter-spacing: 0.01em; }
}

@media (prefers-reduced-motion: reduce) {
  .menu-panel .menu-link { opacity: 1; animation: none; }
  .scroll-progress { transition: none; }
}
```
