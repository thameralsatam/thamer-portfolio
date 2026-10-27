# الملف 4 من 8: الرئيسية وقائمة المشاريع

**نفّذ الخطوات حرفياً وبالترتيب. لا تغيّر أي كود ولا تضف أو تحذف شيئاً من عندك ولا تحسّن شيئاً. كل ملف أدناه: استبدل محتواه كاملاً بالكود المعطى (أنشئه إن لم يكن موجوداً). بعد الانتهاء اكتب فقط: تم الملف رقم كذا.**

أنشئ/استبدل الملفات التالية.

## `src/components/common/ProjectRow.tsx`

```tsx
import React from 'react';
import { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from '../../router/Router';
import { StatusBadge } from './StatusBadge';
import { DirectionalArrow } from './DirectionalArrow';

interface ProjectRowProps {
  project: Project;
  index: number;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project, index }) => {
  const { language } = useLanguage();
  const loc = project.translations[language];

  return (
    <Link to={`/projects/${project.slug}`} className="project-row">
      <span className="index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="min-w-0 space-y-3">
        <div className="meta">
          <span>{loc.category}</span>
          <StatusBadge statusKey={project.statusKey} />
        </div>
        <h3 className="project-title">{loc.title}</h3>
        <p className="project-summary">{loc.summary}</p>
        <p className="tech-line">{project.technologies.join(' · ')}</p>
      </div>
      <DirectionalArrow direction="forward" className="arrow h-6 w-6" />
    </Link>
  );
};
```

## `src/pages/HomePage.tsx`

```tsx
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getFeaturedProjects } from '../data/projects';
import { Link } from '../router/Router';
import { Reveal } from '../components/common/Reveal';
import { ProjectRow } from '../components/common/ProjectRow';
import { DirectionalArrow } from '../components/common/DirectionalArrow';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const featured = getFeaturedProjects();

  return (
    <div className="space-y-28 sm:space-y-40">
      <section className="relative pt-4 sm:pt-12">
        <div className="hero-glow" aria-hidden="true" />
        <Reveal>
          <p className="eyebrow">{t.home.eyebrow}</p>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="display mt-8 max-w-3xl">{t.home.heroHeadline}</h1>
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

      <section id="projects" className="scroll-mt-24">
        <Reveal>
          <h2 className="title mb-12">{t.home.featuredTitle}</h2>
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

## `src/pages/ProjectsPage.tsx`

```tsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { Reveal } from '../components/common/Reveal';
import { ProjectRow } from '../components/common/ProjectRow';

export const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      <Reveal>
        <p className="eyebrow">{t.projectsPage.eyebrow}</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display mt-8">{t.projectsPage.title}</h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="lead mt-8">{t.projectsPage.description}</p>
      </Reveal>

      <div className="project-list mt-16 sm:mt-24">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 70}>
            <ProjectRow project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};
```

