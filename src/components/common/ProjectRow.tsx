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
