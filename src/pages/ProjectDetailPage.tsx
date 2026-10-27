import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter, Link } from '../router/Router';
import { projects, getProjectBySlug } from '../data/projects';
import { StatusBadge } from '../components/common/StatusBadge';
import { FontatDemo } from '../components/demos/FontatDemo';
import { MosqueDemo } from '../components/demos/MosqueDemo';
import { TrainingsplanDemo } from '../components/demos/TrainingsplanDemo';
import { StudioLabDemo } from '../components/demos/StudioLabDemo';
import { ArabicFontToolDemo } from '../components/demos/ArabicFontToolDemo';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const { params } = useRouter();
  const slug = params.slug;
  const project = slug ? getProjectBySlug(slug) : undefined;
  const isArabic = language === 'ar';

  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;
  const NextIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  if (!project) {
    return (
      <div className="py-24 text-center space-y-4">
        <h1 className="font-display text-2xl font-bold text-[#241e1a]">
          Projekt nicht gefunden
        </h1>
        <p className="font-sans text-sm text-[#736356]">
          Der angeforderte Pfad konnte nicht zugeordnet werden.
        </p>
        <div className="pt-2">
          <Link
            to="/projects"
            className="cream-pill px-6 py-2.5 text-xs font-semibold inline-flex items-center gap-2"
          >
            <BackIcon className="w-3.5 h-3.5" />
            <span>{t.common.backToProjects}</span>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const loc = project.translations[language] || project.translations.de;

  const renderProjectDemo = () => {
    switch (project.id) {
      case 'fontat':
        return <FontatDemo />;
      case 'umayyad-mosque':
        return <MosqueDemo isArabic={isArabic} />;
      case 'trainingsplan':
        return <TrainingsplanDemo isArabic={isArabic} />;
      case 'studio-lab':
        return <StudioLabDemo isArabic={isArabic} />;
      case 'arabic-font-tool':
        return <ArabicFontToolDemo isArabic={isArabic} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-10 py-4 sm:py-8">
      {/* Top back navigation */}
      <div>
        <Link
          to="/projects"
          className="cream-pill px-4 py-1.5 text-xs font-medium inline-flex items-center gap-2 text-[#241e1a] hover:border-[#9e5a26] transition-colors"
        >
          <BackIcon className="w-3.5 h-3.5" />
          <span>{t.common.backToProjects}</span>
        </Link>
      </div>

      {/* Project Header */}
      <header className="space-y-4 border-b border-[#e8ded1] pb-8">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="cream-pill px-3 py-1 text-xs font-mono uppercase tracking-wider text-[#736356]">
            {project.category}
          </span>
          <StatusBadge statusKey={project.statusKey} />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#241e1a] leading-[1.18]">
          {loc.title}
        </h1>

        <p className="font-sans text-base sm:text-lg text-[#615347] font-normal leading-relaxed max-w-3xl">
          {loc.summary}
        </p>

        {/* Action Capsule Links */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {project.links.liveUrl ? (
            <a
              href={project.links.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="cream-pill-primary px-5 py-2 text-xs font-semibold inline-flex items-center gap-2"
            >
              <span>{t.common.liveDemo}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="cream-pill px-4 py-1.5 text-xs font-mono text-[#736356]">
              [{t.common.liveDemo}: {t.common.placeholderNote}]
            </span>
          )}

          {project.links.githubUrl && (
            <a
              href={project.links.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="cream-pill px-5 py-2 text-xs font-semibold text-[#241e1a] inline-flex items-center gap-2 hover:border-[#9e5a26]"
            >
              <span>{t.common.sourceCode}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8 space-y-6">
          {/* Live Interactive Demo Feature */}
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#241e1a]">
              {t.common.interactiveStage}
            </h2>
            {renderProjectDemo()}
          </section>

          {/* Unified Architectural Narrative Card (No fragmentation) */}
          <div className="cream-card rounded-3xl p-6 sm:p-8 space-y-8">
            {/* Problem & Solution in a single flow */}
            {loc.problem && (
              <div className="space-y-2">
                <span className="cream-pill px-3 py-1 text-xs font-mono uppercase tracking-wider text-[#736356] inline-block">
                  {t.common.problem}
                </span>
                <p className="font-sans text-sm sm:text-base text-[#40352d] leading-relaxed">
                  {loc.problem}
                </p>
              </div>
            )}

            {loc.solution && (
              <div className="space-y-2 pt-2 border-t border-[#ede4d7]">
                <span className="cream-pill px-3 py-1 text-xs font-mono uppercase tracking-wider text-[#736356] inline-block">
                  {t.common.solution}
                </span>
                <p className="font-sans text-sm sm:text-base text-[#40352d] leading-relaxed">
                  {loc.solution}
                </p>
              </div>
            )}

            {/* Role and Honest AI Usage */}
            {loc.role && (
              <div className="space-y-2 pt-2 border-t border-[#ede4d7]">
                <span className="cream-pill-accent px-3 py-1 text-xs font-mono uppercase tracking-wider inline-block">
                  {t.common.roleAndAiUsage}
                </span>
                <p className="font-sans text-sm sm:text-base text-[#40352d] leading-relaxed">
                  {loc.role}
                </p>
              </div>
            )}

            {/* Current Limitations */}
            {loc.limitations && (
              <div className="space-y-2 pt-2 border-t border-[#ede4d7]">
                <span className="cream-pill px-3 py-1 text-xs font-mono uppercase tracking-wider text-[#736356] inline-block">
                  {t.common.limitations}
                </span>
                <p className="font-sans text-sm sm:text-base text-[#5a4d43] leading-relaxed">
                  {loc.limitations}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Technical Column: Single Elegant Card */}
        <aside className="md:col-span-4 cream-card rounded-3xl p-6 space-y-6">
          {/* Status Block */}
          <div className="space-y-1.5">
            <span className="font-mono text-xs uppercase tracking-wider text-[#736356] block">
              {t.common.statusLabel}
            </span>
            <p className="font-sans text-xs font-medium text-[#241e1a] leading-relaxed">
              {t.status[project.statusKey]}
            </p>
          </div>

          {/* Technologies Block */}
          <div className="space-y-2 pt-4 border-t border-[#ede4d7]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#736356] block">
              {t.common.technologies}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="cream-pill px-3 py-1 text-xs font-mono font-medium text-[#40352d]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Features */}
          <div className="space-y-2 pt-4 border-t border-[#ede4d7]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#736356] block">
              {t.common.features}
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#5a4d43] list-disc list-inside">
              {project.features.map((feature, idx) => (
                <li key={idx} className="leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Prev / Next Footer */}
      <div className="pt-8 border-t border-[#e8ded1] flex items-center justify-between gap-4">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug}`}
            className="cream-pill px-4 py-2 text-xs font-sans inline-flex items-center gap-2 text-[#241e1a] hover:border-[#9e5a26]"
          >
            <BackIcon className="w-3.5 h-3.5" />
            <span>{t.common.prevProject}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject && (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="cream-pill px-4 py-2 text-xs font-sans inline-flex items-center gap-2 text-[#241e1a] hover:border-[#9e5a26]"
          >
            <span>{t.common.nextProject}</span>
            <NextIcon className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
};
