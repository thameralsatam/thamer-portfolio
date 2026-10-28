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
    { Icon: Layers, num: projects.length, label: t.home.stats.projects },
    { Icon: Globe, num: projects.filter((p) => p.links.liveUrl).length, label: t.home.stats.live },
    {
      Icon: Hammer,
      num: projects.filter((p) => p.statusKey === 'studio_lab' || p.statusKey === 'arabic_font_tool').length,
      label: t.home.stats.inProgress,
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

      <section aria-label={t.home.stats.aria} className="facts">
        {facts.map((fact) => (
          <div key={fact.label} className="fact">
            <span className="fact-icon" aria-hidden="true">
              <fact.Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
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
