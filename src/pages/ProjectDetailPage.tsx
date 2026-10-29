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
