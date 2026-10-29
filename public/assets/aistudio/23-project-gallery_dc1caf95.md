Gemini: نفّذ هذا الملف حرفياً. ستحذف مجلد التجارب التفاعلية القديم، وتضيف معرض صور بدلاً منها. انسخ الشيفرة كما هي دون تعديل أو إضافة أو تحسين. لا تلمس أي ملف غير مذكور هنا، ولا تضع هذا الملف نفسه داخل المشروع. الصور (مجلد public/projects) يضيفها المستخدم بنفسه، فلا تنشئ صوراً ولا تستبدلها.

# 23 — معرض الصور بدل التجارب التفاعلية

## الخطوة 1: احذف مجلد التجارب القديمة
احذف المجلد كاملاً مع الملفات الستة التي فيه:

`src/components/demos/`

## الخطوة 2: عدّل `src/i18n/translations.ts`
في تعريف النوع (الواجهة `UIStrings`) داخل القسم `common`، استبدل السطر:

`    interactiveStage: string;`

بهذه الأسطر:

```ts
    galleryTitle: string;
    openImage: string;
    closeImage: string;
    prevImage: string;
    nextImage: string;
```

ثم في كائن الترجمة العربية داخل القسم `common`، استبدل السطر:

`      interactiveStage: 'جرّب بنفسك',`

بهذه الأسطر:

```ts
      galleryTitle: 'لقطات من المشروع',
      openImage: 'تكبير الصورة',
      closeImage: 'إغلاق',
      prevImage: 'الصورة السابقة',
      nextImage: 'الصورة التالية',
```

## الخطوة 3: ملف جديد `src/data/gallery.ts`
```ts
import { SupportedLanguage } from '../types';

export type ShotDevice = 'laptop' | 'phone';

export interface ProjectShot {
  /** المسار داخل مجلد public، ويبدأ بـ / */
  src: string;
  device: ShotDevice;
  width: number;
  height: number;
  caption: Record<SupportedLanguage, string>;
}

const laptop = (file: string, caption: string): ProjectShot => ({
  src: file,
  device: 'laptop',
  width: 1440,
  height: 900,
  caption: { ar: caption },
});

const phone = (file: string, caption: string, width = 780, height = 1688): ProjectShot => ({
  src: file,
  device: 'phone',
  width,
  height,
  caption: { ar: caption },
});

/**
 * لقطات الشاشة لكل مشروع، مفهرسة بمعرّف المشروع.
 * الصور موجودة في public/projects/<معرّف المشروع>/ .
 * مشروع بلا مدخل هنا لا يُعرض له معرض.
 */
export const projectGalleries: Record<string, ProjectShot[]> = {
  fontat: [
    laptop('/projects/fontat/laptop-home.webp', 'الصفحة الرئيسية على الحاسوب'),
    laptop('/projects/fontat/laptop-lab.webp', 'مختبر الخطوط: معاينة خط تجريبي وبياناته'),
    phone('/projects/fontat/mobile-home.webp', 'الصفحة الرئيسية على الهاتف مع شريط التنقل السفلي'),
    phone('/projects/fontat/mobile-lab.webp', 'بيانات الخط في المختبر على الهاتف'),
  ],
  'umayyad-mosque': [
    laptop('/projects/umayyad-mosque/laptop-hero.webp', 'الشاشة الرئيسية'),
    laptop('/projects/umayyad-mosque/laptop-mosaics.webp', 'قسم الفسيفساء: جدارية وادي بردى'),
    phone('/projects/umayyad-mosque/mobile-prayer.webp', 'مواقيت الصلاة على الهاتف'),
    phone('/projects/umayyad-mosque/mobile-history.webp', 'المسار التاريخي على الهاتف'),
  ],
  'studio-lab': [
    laptop('/projects/studio-lab/laptop-projects.webp', 'قائمة المشاريع'),
    laptop('/projects/studio-lab/laptop-editor.webp', 'المحرر مع المعاينة الحية'),
    phone('/projects/studio-lab/mobile-code.webp', 'المحرر على الهاتف'),
    phone('/projects/studio-lab/mobile-preview.webp', 'المعاينة على الهاتف'),
  ],
  trainingsplan: [
    phone('/projects/trainingsplan/mobile-schedule.webp', 'جدول التمارين اليومي', 720, 1640),
    phone('/projects/trainingsplan/mobile-audio.webp', 'مشغّل الصوتيات (أُخفيت العناوين حفاظاً على الخصوصية)', 720, 1640),
    phone('/projects/trainingsplan/mobile-settings.webp', 'الإعدادات والبيانات', 720, 1640),
  ],
};

export function getProjectGallery(projectId: string): ProjectShot[] {
  return projectGalleries[projectId] ?? [];
}
```

## الخطوة 4: ملف جديد `src/components/common/ProjectGallery.tsx`
```tsx
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ProjectShot } from '../../data/gallery';

interface ProjectGalleryProps {
  shots: ProjectShot[];
  projectTitle: string;
}

/** معرض لقطات: إطار متصفح للحاسوب وإطار هاتف للجوال، مع عرض مكبّر. */
export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ shots, projectTitle }) => {
  const { t, language, dir } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const laptops = shots.map((s, i) => ({ s, i })).filter((x) => x.s.device === 'laptop');
  const phones = shots.map((s, i) => ({ s, i })).filter((x) => x.s.device === 'phone');

  const open = (index: number, el: HTMLElement) => {
    lastTrigger.current = el;
    setOpenIndex(index);
  };

  const close = useCallback(() => {
    setOpenIndex(null);
    lastTrigger.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + delta + shots.length) % shots.length;
      });
    },
    [shots.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      // السهم الأيسر يعني "التالي" في الاتجاه من اليمين إلى اليسار، والعكس في الآخر.
      if (e.key === 'ArrowLeft') step(dir === 'rtl' ? 1 : -1);
      if (e.key === 'ArrowRight') step(dir === 'rtl' ? -1 : 1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, step, dir]);

  const active = openIndex !== null ? shots[openIndex] : null;
  const PrevIcon = dir === 'rtl' ? ChevronRight : ChevronLeft;
  const NextIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  const renderShot = (shot: ProjectShot, index: number) => (
    <figure key={shot.src} className={shot.device === 'laptop' ? 'shot shot-laptop' : 'shot shot-phone'}>
      <button
        type="button"
        className="shot-button"
        onClick={(e) => open(index, e.currentTarget)}
        aria-label={`${t.common.openImage}: ${shot.caption[language]}`}
      >
        <span className={shot.device === 'laptop' ? 'frame-laptop' : 'frame-phone'}>
          {shot.device === 'laptop' && (
            <span className="frame-bar" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          )}
          <img
            src={shot.src}
            width={shot.width}
            height={shot.height}
            alt={`${projectTitle}: ${shot.caption[language]}`}
            loading="lazy"
            decoding="async"
          />
          <span className="shot-zoom" aria-hidden="true">
            <Maximize2 className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </span>
      </button>
      <figcaption>{shot.caption[language]}</figcaption>
    </figure>
  );

  return (
    <>
      {laptops.length > 0 && (
        <div className={laptops.length > 1 ? 'gallery-row gallery-laptops' : 'gallery-row'}>
          {laptops.map(({ s, i }) => renderShot(s, i))}
        </div>
      )}
      {phones.length > 0 && (
        <div className="gallery-row gallery-phones">{phones.map(({ s, i }) => renderShot(s, i))}</div>
      )}

      {active && openIndex !== null && createPortal(
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption[language]}
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            className="lightbox-btn lightbox-close"
            onClick={close}
            aria-label={t.common.closeImage}
          >
            <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </button>

          {shots.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-btn lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label={t.common.prevImage}
              >
                <PrevIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="lightbox-btn lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label={t.common.nextImage}
              >
                <NextIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </>
          )}

          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img
              key={active.src}
              src={active.src}
              width={active.width}
              height={active.height}
              alt={`${projectTitle}: ${active.caption[language]}`}
            />
            <figcaption>{active.caption[language]}</figcaption>
          </figure>
        </div>,
        document.body
      )}
    </>
  );
};
```

## الخطوة 5: استبدل محتوى `src/pages/ProjectDetailPage.tsx` بالكامل
```tsx
import React from 'react';
import { ArrowUpRight, Check, CircleAlert, Code, Cog, Lightbulb, ListChecks, UserRound } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter, Link } from '../router/Router';
import { projects, getProjectBySlug } from '../data/projects';
import { StatusBadge } from '../components/common/StatusBadge';
import { Reveal } from '../components/common/Reveal';
import { DirectionalArrow } from '../components/common/DirectionalArrow';
import { ProjectGallery } from '../components/common/ProjectGallery';
import { getProjectGallery } from '../data/gallery';

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

  const shots = getProjectGallery(project.id);

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

      {shots.length > 0 && (
        <section className="mt-20 sm:mt-28" aria-label={t.common.galleryTitle}>
          <Reveal>
            <p className="eyebrow mb-8">{t.common.galleryTitle}</p>
            <ProjectGallery shots={shots} projectTitle={loc.title} />
          </Reveal>
        </section>
      )}

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

## الخطوة 6: أضف في آخر `src/index.css`
الصق هذه الكتلة في نهاية الملف دون حذف أي شيء قبلها. إن كانت موجودة مسبقاً بداية من التعليق `/* ===== معرض الصور ===== */` فاستبدل كل ما بعده بها.
```css
/* ===== معرض الصور ===== */
.gallery-row { display: grid; gap: 2rem; }
.gallery-laptops { grid-template-columns: 1fr; }
.gallery-phones { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem 1.25rem; }
.gallery-phones .shot { width: calc(50% - 0.625rem); }
@media (min-width: 768px) {
  .gallery-laptops { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem; }
  .gallery-phones { gap: 2rem; }
  .gallery-phones .shot { width: 13.5rem; }
}
.gallery-row + .gallery-row { margin-top: 3rem; }

.shot { margin: 0; }
.shot figcaption {
  margin-top: 0.9rem;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--color-ink-500);
  text-align: center;
}
.shot-button {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: zoom-in;
  text-align: inherit;
  border-radius: 1.25rem;
}
.shot-button:focus-visible { outline: 2px solid var(--color-clay-700); outline-offset: 4px; }

.frame-laptop,
.frame-phone {
  position: relative;
  display: block;
  overflow: hidden;
  background: #0b0d12;
  border: 1px solid var(--color-line);
  box-shadow: 0 30px 60px -36px rgba(63, 53, 43, 0.55);
  transition: transform 0.5s var(--ease), box-shadow 0.5s var(--ease);
}
.frame-laptop { border-radius: 1rem; }
.frame-phone { border-radius: 1.75rem; border: 6px solid #1a1612; }
.shot-button:hover .frame-laptop,
.shot-button:hover .frame-phone { transform: translateY(-4px); box-shadow: 0 40px 70px -34px rgba(63, 53, 43, 0.6); }

.frame-bar {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  height: 1.7rem;
  padding: 0 0.9rem;
  background: #14161c;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  direction: ltr;
}
.frame-bar i { width: 0.5rem; height: 0.5rem; border-radius: 999px; background: rgba(255, 255, 255, 0.22); }
.frame-laptop img,
.frame-phone img { display: block; width: 100%; height: auto; }

.shot-zoom {
  position: absolute;
  inset-block-end: 0.75rem;
  inset-inline-end: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  color: #fff;
  background: rgba(20, 18, 15, 0.55);
  backdrop-filter: blur(6px);
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.35s var(--ease), transform 0.35s var(--ease);
}
.shot-button:hover .shot-zoom,
.shot-button:focus-visible .shot-zoom { opacity: 1; transform: scale(1); }
@media (hover: none) { .shot-zoom { opacity: 0.85; transform: none; width: 1.9rem; height: 1.9rem; } }

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.5rem 1rem 2rem;
  background: rgba(24, 20, 16, 0.88);
  backdrop-filter: blur(10px);
  animation: lightboxIn 0.35s var(--ease) both;
}
.lightbox-figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  animation: lightboxImg 0.5s var(--ease) both;
}
.lightbox-figure img {
  display: block;
  max-width: min(100%, 78rem);
  max-height: calc(100vh - 10rem);
  width: auto;
  height: auto;
  border-radius: 0.9rem;
  box-shadow: 0 40px 90px -30px rgba(0, 0, 0, 0.7);
}
.lightbox-figure figcaption {
  margin-top: 1rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
}
.lightbox-btn {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
  transition: background-color 0.3s var(--ease), transform 0.3s var(--ease);
}
.lightbox-btn:hover { background: rgba(255, 255, 255, 0.2); }
.lightbox-btn:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
.lightbox-close { inset-block-start: 1rem; inset-inline-end: 1rem; }
.lightbox-prev,
.lightbox-next { top: 50%; margin-top: -1.375rem; }
.lightbox-prev { inset-inline-start: 1rem; }
.lightbox-next { inset-inline-end: 1rem; }
@media (max-width: 640px) {
  .lightbox { padding: 4.5rem 0.5rem 5rem; }
  .lightbox-prev,
  .lightbox-next { top: auto; bottom: 1rem; margin-top: 0; }
}
@keyframes lightboxIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes lightboxImg { from { opacity: 0; transform: scale(0.96) translateY(10px); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) {
  .lightbox, .lightbox-figure { animation: none; }
  .frame-laptop, .frame-phone, .shot-zoom { transition: none; }
}
```

## الخطوة 7: تحقق
شغّل `npm run lint` ثم `npm run build`، وأخبرني بالنتيجة كما هي. يجب ألا يبقى أي استيراد من `components/demos` ولا أي استخدام لـ `interactiveStage`.
