import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { Link } from '../router/Router';
import { StatusBadge } from '../components/common/StatusBadge';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-20 py-4 sm:py-8">
      {/* Hero Section: Pure Calm & Focus */}
      <section className="space-y-6 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 cream-pill text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9e5a26]" />
          <span className="text-[#635447]">{t.siteSubtitle}</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#241e1a] leading-[1.18] text-balance">
          {t.home.heroHeadline}
        </h1>

        <p className="font-sans text-base sm:text-lg text-[#615347] font-normal leading-relaxed">
          {t.home.heroDescription}
        </p>

        {/* Minimal Action Capsules */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="cream-pill-primary px-6 py-2.5 text-xs font-semibold tracking-wide inline-flex items-center gap-2"
          >
            <span>{t.home.exploreWork}</span>
            <span className="inline-block ltr:ml-1 rtl:mr-1">↓</span>
          </a>
          <Link
            to="/contact"
            className="cream-pill px-6 py-2.5 text-xs font-semibold text-[#241e1a] tracking-wide hover:border-[#9e5a26]/40"
          >
            <span>{t.home.getInTouch}</span>
          </Link>
        </div>
      </section>

      {/* Projects Showcase: Clean Editorial Cards with Breathing Space */}
      <section id="projects" className="space-y-8 scroll-mt-24">
        <div className="flex items-baseline justify-between border-b border-[#e8ded1] pb-4">
          <div className="space-y-1">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#241e1a]">
              {t.common.featuredProjects}
            </h2>
            <p className="font-sans text-xs text-[#7d6f63]">
              {t.common.noEmojiPolicyNote}
            </p>
          </div>
          <Link
            to="/projects"
            className="cream-pill px-4 py-1.5 text-xs font-semibold text-[#8b4513] hover:border-[#9e5a26]"
          >
            <span>{t.common.viewAllProjects} ({projects.length})</span>
          </Link>
        </div>

        {/* Clean Project Stream */}
        <div className="space-y-5">
          {projects.map((project, index) => {
            const loc = project.translations[language] || project.translations.de;
            const numberLabel = `0${index + 1}`;

            return (
              <article
                key={project.id}
                className="cream-card rounded-3xl p-6 sm:p-7 space-y-4 hover:translate-y-[-1px] transition-all"
              >
                {/* Meta Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="cream-pill px-2.5 py-0.5 text-xs font-mono font-semibold text-[#241e1a]">
                      {numberLabel}
                    </span>
                    <span className="cream-pill px-3 py-0.5 text-xs font-mono uppercase tracking-wider text-[#736356]">
                      {project.category}
                    </span>
                  </div>
                  <StatusBadge statusKey={project.statusKey} />
                </div>

                {/* Title & Concise Summary */}
                <div className="space-y-1.5">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#241e1a]">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="hover:text-[#9e5a26] transition-colors"
                    >
                      {loc.title}
                    </Link>
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#5c4f44] leading-relaxed max-w-3xl">
                    {loc.summary}
                  </p>
                </div>

                {/* Tech Pills & Clean Project Link */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#ede4d7]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="cream-pill px-3 py-1 text-xs font-mono text-[#52453c]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="cream-pill px-2.5 py-1 text-xs font-mono text-[#7a6c60]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="cream-pill px-4 py-1.5 text-xs font-semibold text-[#241e1a] inline-flex items-center gap-1.5 hover:border-[#9e5a26]"
                  >
                    <span>{t.common.projectDetails}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Projects Action Pill */}
        <div className="pt-4 text-center">
          <Link
            to="/projects"
            className="cream-pill-primary px-8 py-3 text-xs font-semibold tracking-wide inline-flex items-center gap-2"
          >
            <span>{t.common.allProjects} ({projects.length})</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
