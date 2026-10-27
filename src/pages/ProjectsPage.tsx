import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { Link } from '../router/Router';
import { StatusBadge } from '../components/common/StatusBadge';
import { ArrowRight, ArrowLeft, Search } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = projects.filter((project) => {
    const loc = project.translations[language] || project.translations.de;
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      loc.title.toLowerCase().includes(query) ||
      loc.summary.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
      project.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10 py-4 sm:py-8">
      {/* Header */}
      <div className="border-b border-[#e8ded1] pb-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#241e1a]">
            {t.projectsPage.title}
          </h1>
          <span className="cream-pill px-3.5 py-1 text-xs font-mono text-[#635447]">
            {filteredProjects.length} / {projects.length} {t.projectsPage.projectsCount}
          </span>
        </div>
        <p className="font-sans text-base text-[#615347] max-w-2xl font-normal leading-relaxed">
          {t.projectsPage.description}
        </p>

        {/* Search & Category Filter */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8a7b6f] absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.projectsPage.searchPlaceholder}
              className="w-full cream-pill pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-2 text-xs text-[#241e1a] placeholder:text-[#968677] focus:outline-none focus:border-[#9e5a26]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0" role="group">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const label = cat === 'all' ? t.projectsPage.filterAll : cat;
              const count = cat === 'all' ? projects.length : projects.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-mono whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
                    isSelected
                      ? 'cream-pill-primary font-semibold'
                      : 'cream-pill text-[#52453c]'
                  }`}
                >
                  <span>{label}</span>
                  <span className="opacity-60 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects Stream in Clean Cream Cards */}
      <div className="space-y-5">
        {filteredProjects.length === 0 ? (
          <div className="cream-card rounded-3xl p-12 text-center space-y-2">
            <p className="font-sans text-sm text-[#736356]">
              {t.projectsPage.emptyPlaceholder}
            </p>
          </div>
        ) : (
          filteredProjects.map((project, index) => {
            const loc = project.translations[language] || project.translations.de;
            const numberLabel = `0${index + 1}`;

            return (
              <article
                key={project.id}
                className="cream-card rounded-3xl p-6 sm:p-7 space-y-4 hover:translate-y-[-1px] transition-all"
              >
                {/* Header Capsule Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="cream-pill px-2.5 py-0.5 text-xs font-mono font-semibold text-[#241e1a]">
                      {numberLabel}
                    </span>
                    <span className="cream-pill px-3 py-0.5 text-xs font-mono uppercase tracking-wider text-[#736356]">
                      {project.category}
                    </span>
                  </div>
                  <StatusBadge statusKey={project.statusKey} />
                </div>

                {/* Title & Narrative */}
                <div className="space-y-1.5">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#241e1a]">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="hover:text-[#9e5a26] transition-colors"
                    >
                      {loc.title}
                    </Link>
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-[#5c4f44] font-normal leading-relaxed max-w-3xl">
                    {loc.summary}
                  </p>
                </div>

                {/* Tech Stack & Action Bar */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#ede4d7]">
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

                  <Link
                    to={`/projects/${project.slug}`}
                    className="cream-pill px-4 py-1.5 text-xs font-semibold text-[#241e1a] inline-flex items-center gap-1.5 hover:border-[#9e5a26]"
                  >
                    <span>{t.common.projectDetails}</span>
                    <ArrowIcon className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};
