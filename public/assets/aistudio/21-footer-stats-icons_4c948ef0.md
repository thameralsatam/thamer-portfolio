# الملف 21: ضبط التذييل والشريط، وأيقونات أوضح

**نفّذ الخطوات حرفياً وبالترتيب. لا تغيّر أي كود ولا تضف أو تحذف شيئاً من عندك ولا تحسّن شيئاً. بعد الانتهاء اكتب فقط: تم الملف رقم 21.**

## الخطوة 1: `src/index.css`

ابحث عن السطر الذي يبدأ بـ `/* ===== لمسات غامقة`. احذف هذا السطر وكل ما بعده حتى نهاية الملف. ثم أضف الكود التالي في نهاية الملف كما هو:

```css
/* ===== لمسات غامقة: التذييل، والشريط، والأيقونات ===== */
.btn-ghost { border-color: #bfae92; }

/* الشريط: بنفس لون الخلفية وبحدود واضحة */
.facts {
  background: transparent;
  border: 1px solid #c9b99c;
  box-shadow: none;
}
.facts .fact + .fact { border-inline-start: 1px solid #d9ccb4; }
.facts .fact { gap: 0.35rem; padding: 1.6rem 0.75rem; }
.facts .fact-num { color: var(--color-ink-900); }
.facts .fact-label { color: var(--color-ink-500); }

/* الأيقونات: أكبر وأوضح */
.icon-tile {
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  color: var(--color-clay-700);
  background: var(--color-clay-100);
  border: 1px solid #e6c9b3;
}
.icon-tile svg { width: 1.5rem; height: 1.5rem; }
.project-card .icon-tile { width: 3.25rem; height: 3.25rem; }
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
.footer-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1.25rem 1.75rem; }
.btn-light { color: var(--color-ink-900); background: var(--color-paper-50); }
.btn-light:hover {
  transform: translateY(-2px);
  background: #ffffff;
  box-shadow: 0 16px 28px -14px rgba(0, 0, 0, 0.5);
}
.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--color-paper-50);
  transition: color 0.3s var(--ease);
}
.footer-link:hover { color: #e8b595; }
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
```

## الخطوة 2: استبدل الملفات الثلاثة التالية كاملة

## `src/components/layout/Footer.tsx`

```tsx
import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from '../../router/Router';
import { DirectionalArrow } from '../common/DirectionalArrow';

const EMAIL = 'alsatamthamer@gmail.com';

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
            <a href={`mailto:${EMAIL}`} className="footer-link">
              <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              <span dir="ltr" className="inline-block">
                {EMAIL}
              </span>
            </a>
            <Link to="/contact" className="btn btn-light">
              <span>{t.home.getInTouch}</span>
              <DirectionalArrow direction="forward" className="h-4 w-4" />
            </Link>
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
            <span className="icon-tile">
              <fact.Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="fact-num">{fact.num}</span>
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

## `src/pages/ProjectDetailPage.tsx`

```tsx
import React from 'react';
import { ArrowUpRight, Check, CircleAlert, Code, Cog, Lightbulb, ListChecks, UserRound } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter, Link } from '../router/Router';
import { projects, getProjectBySlug } from '../data/projects';
import { StatusBadge } from '../components/common/StatusBadge';
import { Reveal } from '../components/common/Reveal';
import { DirectionalArrow } from '../components/common/DirectionalArrow';
import { FontatDemo } from '../components/demos/FontatDemo';
import { MosqueDemo } from '../components/demos/MosqueDemo';
import { TrainingsplanDemo } from '../components/demos/TrainingsplanDemo';
import { StudioLabDemo } from '../components/demos/StudioLabDemo';
import { ArabicFontToolDemo } from '../components/demos/ArabicFontToolDemo';

export const ProjectDetailPage: React.FC = () => {
  const { t, language } = useLanguage();
  const { params } = useRouter();
  const project = params.slug ? getProjectBySlug(params.slug) : undefined;

  if (!project) {
    return (
      <div className="py-20">
        <h1 className="display">{t.common.notFoundTitle}</h1>
        <p className="lead mt-6">{t.common.notFoundText}</p>
        <Link to="/projects" className="btn btn-ghost mt-10">
          <DirectionalArrow direction="back" className="h-4 w-4" />
          <span>{t.common.backToProjects}</span>
        </Link>
      </div>
    );
  }

  const index = projects.findIndex((p) => p.id === project.id);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  const loc = project.translations[language];

  const renderDemo = () => {
    switch (project.id) {
      case 'fontat':
        return <FontatDemo />;
      case 'umayyad-mosque':
        return <MosqueDemo />;
      case 'trainingsplan':
        return <TrainingsplanDemo />;
      case 'studio-lab':
        return <StudioLabDemo />;
      case 'arabic-font-tool':
        return <ArabicFontToolDemo />;
      default:
        return null;
    }
  };

  const story = [
    { Icon: Lightbulb, label: t.common.problem, text: loc.problem },
    { Icon: Cog, label: t.common.solution, text: loc.solution },
    { Icon: UserRound, label: t.common.roleAndAiUsage, text: loc.role },
    { Icon: CircleAlert, label: t.common.limitations, text: loc.limitations },
  ];

  return (
    <article>
      <Link to="/projects" className="text-link text-ink-500">
        <DirectionalArrow direction="back" className="h-4 w-4" />
        <span>{t.common.backToProjects}</span>
      </Link>

      <header className="mt-12">
        <Reveal>
          <div className="meta">
            <span>{loc.category}</span>
            <StatusBadge statusKey={project.statusKey} />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-6">{loc.title}</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="lead mt-8">{loc.summary}</p>
        </Reveal>
        {(project.links.liveUrl || project.links.githubUrl) && (
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-4">
              {project.links.liveUrl && (
                <a href={project.links.liveUrl} target="_blank" rel="noreferrer noopener" className="btn btn-primary">
                  <span>{t.common.liveDemo}</span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </a>
              )}
              {project.links.githubUrl && (
                <a href={project.links.githubUrl} target="_blank" rel="noreferrer noopener" className="btn btn-ghost">
                  <span>{t.common.sourceCode}</span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </a>
              )}
            </div>
          </Reveal>
        )}
      </header>

      <section className="mt-20 sm:mt-28">
        <Reveal>
          <p className="eyebrow mb-6">{t.common.interactiveStage}</p>
          {renderDemo()}
        </Reveal>
      </section>

      <section className="mt-20 sm:mt-28">
        {story.map((block, i) => (
          <Reveal key={block.label} delay={i * 40}>
            <div className="border-t border-line py-10 md:grid md:grid-cols-[11rem_1fr] md:gap-10">
              <div className="mb-4 md:sticky md:top-28 md:mb-0 md:self-start">
                <span className="icon-tile mb-3">
                  <block.Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h2 className="heading">{block.label}</h2>
              </div>
              <p className="prose-ar">{block.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className="grid gap-12 border-t border-line py-10 md:grid-cols-[11rem_1fr] md:gap-10">
          <div>
            <span className="icon-tile mb-3">
              <Code className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h2 className="heading">{t.common.technologies}</h2>
          </div>
          <p className="prose-ar">{project.technologies.join(' · ')}</p>
        </section>
        <section className="grid gap-4 border-t border-line py-10 md:grid-cols-[11rem_1fr] md:gap-10">
          <div>
            <span className="icon-tile mb-3">
              <ListChecks className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h2 className="heading">{t.common.features}</h2>
          </div>
          <ul className="feature-list prose-ar">
            {loc.features.map((feature) => (
              <li key={feature}>
                <Check className="check-icon" strokeWidth={2} aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <nav className="mt-16 grid gap-4 sm:grid-cols-2">
        {prev ? (
          <Link to={`/projects/${prev.slug}`} className="pager">
            <span className="eyebrow">{t.common.prevProject}</span>
            <span className="pager-title mt-2 block">{prev.translations[language].title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/projects/${next.slug}`} className="pager text-end">
            <span className="eyebrow">{t.common.nextProject}</span>
            <span className="pager-title mt-2 block">{next.translations[language].title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
};
```

## الخطوة 3

شغّل `npm run build` وأخبرني إن نجح. لا تحفظ هذا الملف داخل المشروع.
