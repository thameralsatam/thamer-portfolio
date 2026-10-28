import React from 'react';
import { ArrowDown } from 'lucide-react';
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
        <div className="fact">
          <span className="fact-num">{projects.length}</span>
          <span className="fact-label">مشاريع</span>
        </div>
        <div className="fact">
          <span className="fact-num">{new Set(projects.flatMap((p) => p.technologies)).size}</span>
          <span className="fact-label">تقنية مستخدمة</span>
        </div>
        <div className="fact">
          <span className="fact-num">{t.contactPage.locationValue}</span>
          <span className="fact-label">الموقع</span>
        </div>
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
