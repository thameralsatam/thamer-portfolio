import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const skillGroups = [
    {
      title: 'Frontend Architecture',
      items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5 & Semantic DOM'],
    },
    {
      title: 'Core Principles',
      items: ['Responsive Web Design', 'Accessibility (a11y)', 'i18n & RTL Engineering', 'Predictable State Flow'],
    },
    {
      title: 'Tooling & Workflow',
      items: ['Git & GitHub', 'Cloudflare Pages', 'Linux & Modern Shell', 'DevTools Profiling'],
    },
    {
      title: 'Specialized Focus',
      items: ['Arabic Web Typography', 'Procedural SVG & Canvas', 'Disciplined Engineering'],
    },
  ];

  return (
    <div className="max-w-2xl space-y-12 py-4 sm:py-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 cream-pill text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9e5a26]" />
          <span className="text-[#635447]">{t.siteSubtitle}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#241e1a]">
          {t.aboutPage.title}
        </h1>
      </div>

      {/* Main Narrative Card: Natural Typography & Breathing Space */}
      <div className="cream-card rounded-3xl p-6 sm:p-8 space-y-4">
        <span className="font-mono text-xs uppercase tracking-wider text-[#9e5a26] font-semibold block">
          {t.aboutPage.roleHeadline}
        </span>
        <div className="space-y-4 font-sans text-sm sm:text-base text-[#40352d] leading-relaxed">
          <p>{t.aboutPage.bioParagraph1}</p>
          <p>{t.aboutPage.bioParagraph2}</p>
        </div>
      </div>

      {/* Technical Competencies: Quiet, Non-Cluttered Matrix */}
      <div className="cream-card rounded-3xl p-6 sm:p-8 space-y-6">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-[#241e1a]">
          {t.aboutPage.skillsHeading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="space-y-2.5">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#241e1a] border-b border-[#ede4d7] pb-1.5">
                {group.title}
              </h3>
              <ul className="space-y-1.5 text-xs font-sans text-[#52453c]">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#9e5a26]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering Philosophy */}
      <div className="cream-card rounded-3xl p-6 sm:p-8 space-y-3">
        <h2 className="font-display text-xl font-bold text-[#241e1a]">
          {t.aboutPage.philosophyHeading}
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#40352d] leading-relaxed">
          {t.aboutPage.philosophyText}
        </p>
      </div>
    </div>
  );
};
