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

      <div className="project-list mt-12 sm:mt-16">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 70}>
            <ProjectRow project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};
