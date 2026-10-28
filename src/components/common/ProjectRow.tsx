import React from 'react';
import { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from '../../router/Router';
import { DirectionalArrow } from './DirectionalArrow';
import { ProjectIcon } from './ProjectIcon';

interface ProjectRowProps {
  project: Project;
  index: number;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project, index }) => {
  const { language, t } = useLanguage();
  const loc = project.translations[language];

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
      }}
    >
      <div className="card-top">
        <span className="flex items-center gap-3">
          <span className="icon-tile">
            <ProjectIcon id={project.id} />
          </span>
          <span className="meta">{loc.category}</span>
        </span>
        <span className="card-index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="project-title">{loc.title}</h3>
      <p className="project-summary">{loc.summary}</p>
      <div className="card-foot">
        <span className="card-cta">
          <span>{t.common.viewProject}</span>
          <DirectionalArrow direction="forward" className="cta-arrow h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};
