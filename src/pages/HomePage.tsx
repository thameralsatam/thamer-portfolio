import React, { useState } from 'react';
import { ArrowDown, Globe, Hammer, Layers, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getFeaturedProjects, projects } from '../data/projects';
import { Link } from '../router/Router';
import { Reveal } from '../components/common/Reveal';
import { ProjectRow } from '../components/common/ProjectRow';
import { DirectionalArrow } from '../components/common/DirectionalArrow';
import { Words } from '../components/common/Words';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const featured = getFeaturedProjects();
  const [activeFactIndex, setActiveFactIndex] = useState<number | null>(null);

  const factsData = [
    {
      id: 'all',
      Icon: Layers,
      num: projects.length,
      label: t.home.stats.projects,
      items: projects.map((p) => ({
        slug: p.slug,
        title: p.translations[language].title,
        category: p.translations[language].category,
      })),
      ctaLink: '/projects',
      ctaText: t.home.allProjects,
    },
    {
      id: 'live',
      Icon: Globe,
      num: projects.filter((p) => p.links.liveUrl).length,
      label: t.home.stats.live,
      items: projects
        .filter((p) => p.links.liveUrl)
        .map((p) => ({
          slug: p.slug,
          title: p.translations[language].title,
          category: p.translations[language].category,
        })),
      ctaLink: null,
      ctaText: null,
    },
    {
      id: 'inProgress',
      Icon: Hammer,
      num: projects.filter((p) => p.statusKey === 'studio_lab' || p.statusKey === 'arabic_font_tool').length,
      label: t.home.stats.inProgress,
      items: projects
        .filter((p) => p.statusKey === 'studio_lab' || p.statusKey === 'arabic_font_tool')
        .map((p) => ({
          slug: p.slug,
          title: p.translations[language].title,
          category: p.translations[language].category,
        })),
      ctaLink: null,
      ctaText: null,
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-36">
      <section className="relative pt-4 sm:pt-10 lg:pt-14">
        <div className="hero-glow" aria-hidden="true" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* العمود الأول: النص الترحيبي والعنوان وأزرار الإجراء */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">{t.home.eyebrow}</p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display mt-6 sm:mt-8">
                <Words text={t.home.heroHeadline} />
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="lead mt-6 sm:mt-8">{t.home.heroDescription}</p>
            </Reveal>
            <Reveal delay={270}>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <a href="#projects" className="btn btn-primary">
                  <span>{t.home.exploreWork}</span>
                  <ArrowDown className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </a>
                <Link to="/contact" className="btn btn-ghost">
                  {t.home.getInTouch}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* العمود الثاني: لوحة الإحصائيات والمشاريع التفاعلية تملأ المساحة المقابلة بتناسق */}
          <div className="lg:col-span-5 lg:pt-2">
            <Reveal delay={200}>
              <div aria-label={t.home.stats.aria} className="facts-container">
                <div className="facts">
                  {factsData.map((fact, index) => {
                    const isSelected = activeFactIndex === index;
                    return (
                      <button
                        key={fact.id}
                        type="button"
                        onClick={() => setActiveFactIndex((curr) => (curr === index ? null : index))}
                        className={`fact ${index === 0 ? 'fact-featured' : ''} ${isSelected ? 'is-active' : ''}`}
                        aria-expanded={isSelected}
                        aria-controls="fact-detail-panel"
                      >
                        {/* الرمز في الزاوية العلوية بعيداً عن حشو المحتوى */}
                        <span className="fact-corner-icon" aria-hidden="true">
                          <fact.Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                        </span>

                        {/* الرقم الأساسي في المنتصف */}
                        <span className="fact-num">{fact.num}</span>

                        {/* التسمية بالمنتصف أسفل الرقم */}
                        <span className="fact-label">{fact.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* لوحة التفاصيل التفاعلية لكشف المشاريع عند النقر */}
                {activeFactIndex !== null && (
                  <div id="fact-detail-panel" className="fact-detail">
                    <div className="fact-detail-header">
                      <span className="fact-detail-title">
                        {factsData[activeFactIndex].label} ({factsData[activeFactIndex].num})
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveFactIndex(null)}
                        className="fact-detail-close"
                        aria-label={t.common.closeMenu}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="fact-detail-list">
                      {factsData[activeFactIndex].items.slice(0, 4).map((item) => (
                        <Link
                          key={item.slug}
                          to={`/projects/${item.slug}`}
                          className="fact-detail-item"
                        >
                          <span className="fact-detail-item-title">{item.title}</span>
                          <span className="fact-detail-item-cat">{item.category}</span>
                          <DirectionalArrow direction="forward" className="h-3.5 w-3.5 text-clay-600 opacity-60" />
                        </Link>
                      ))}
                      {factsData[activeFactIndex].ctaLink && (
                        <Link to={factsData[activeFactIndex].ctaLink!} className="fact-detail-cta">
                          <span>{factsData[activeFactIndex].ctaText}</span>
                          <DirectionalArrow direction="forward" className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
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
