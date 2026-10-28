import React from 'react';
import { Database, Layers, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/common/Reveal';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const a = t.aboutPage;
  const stackIcons = [Layers, Database, Rocket];

  return (
    <div>
      <Reveal>
        <p className="eyebrow">{a.eyebrow}</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display mt-8">{a.title}</h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="lead mt-8">{a.lead}</p>
      </Reveal>

      <Reveal>
        <div className="mt-16 space-y-6 sm:mt-24">
          <p className="prose-ar">{a.bio1}</p>
          <p className="prose-ar">{a.bio2}</p>
        </div>
      </Reveal>

      <Reveal>
        <section className="mt-20 border-t border-line pt-10">
          <h2 className="title mb-10">{a.stackHeading}</h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {a.stackGroups.map((group, i) => {
              const Icon = stackIcons[i];
              return (
                <div key={group.title} className="surface p-6">
                  <span className="icon-tile mb-4">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="heading mb-3">{group.title}</h3>
                  <ul className="text-ink-700">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-20 border-t border-line pt-10">
          <h2 className="title mb-6">{a.approachHeading}</h2>
          <p className="prose-ar">{a.approachText}</p>
          <p className="prose-ar mt-6 text-ink-900">{a.seekingText}</p>
        </section>
      </Reveal>
    </div>
  );
};
