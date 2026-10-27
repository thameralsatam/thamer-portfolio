# الملف 5 من 8: صفحة المشروع

**نفّذ الخطوات حرفياً وبالترتيب. لا تغيّر أي كود ولا تضف أو تحذف شيئاً من عندك ولا تحسّن شيئاً. كل ملف أدناه: استبدل محتواه كاملاً بالكود المعطى (أنشئه إن لم يكن موجوداً). بعد الانتهاء اكتب فقط: تم الملف رقم كذا.**

أنشئ/استبدل الملفين التاليين. (قد يظهر خطأ استيراد للتجارب حتى الملف 6، وهذا طبيعي.)

## `src/components/demos/DemoFrame.tsx`

```tsx
import React from 'react';

interface DemoFrameProps {
  icon: React.ReactNode;
  title: string;
  note: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

/** إطار موحد لكل التجارب التفاعلية. */
export const DemoFrame: React.FC<DemoFrameProps> = ({ icon, title, note, children, footer }) => (
  <div className="surface overflow-hidden">
    <div className="flex items-start gap-4 px-6 pb-5 pt-6">
      <span className="mt-1.5 text-clay-700">{icon}</span>
      <div>
        <h3 className="font-display text-lg text-ink-900">{title}</h3>
        <p className="text-sm leading-7 text-ink-500">{note}</p>
      </div>
    </div>
    <div className="border-t border-line">{children}</div>
    {footer && <div className="border-t border-line bg-paper-100/60 px-6 py-4 text-sm text-ink-500">{footer}</div>}
  </div>
);
```

## `src/pages/ProjectDetailPage.tsx`

```tsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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
    { label: t.common.problem, text: loc.problem },
    { label: t.common.solution, text: loc.solution },
    { label: t.common.roleAndAiUsage, text: loc.role },
    { label: t.common.limitations, text: loc.limitations },
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
              <h2 className="heading mb-3 md:mb-0">{block.label}</h2>
              <p className="prose-ar">{block.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className="grid gap-12 border-t border-line py-10 md:grid-cols-[11rem_1fr] md:gap-10">
          <h2 className="heading">{t.common.technologies}</h2>
          <p className="prose-ar">{project.technologies.join(' · ')}</p>
        </section>
        <section className="grid gap-4 border-t border-line py-10 md:grid-cols-[11rem_1fr] md:gap-10">
          <h2 className="heading">{t.common.features}</h2>
          <ul className="feature-list prose-ar">
            {loc.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      </Reveal>

      <nav className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-6">
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

