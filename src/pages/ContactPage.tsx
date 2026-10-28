import React, { useState } from 'react';
import { Check, Code, Copy, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/common/Reveal';

const EMAIL = 'alsatamthamer@gmail.com';
const GITHUB_URL = 'https://github.com/thameralsatam';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const c = t.contactPage;
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // النسخ غير متاح في هذا المتصفح
    }
  };

  const rows = [
    { key: 'email', icon: Mail, label: c.emailLabel, text: EMAIL, href: `mailto:${EMAIL}`, copyValue: EMAIL },
    { key: 'github', icon: Code, label: c.githubLabel, text: 'github.com/thameralsatam', href: GITHUB_URL, external: true },
  ];

  return (
    <div>
      <Reveal>
        <p className="eyebrow">{c.eyebrow}</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="display mt-8">{c.title}</h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="lead mt-8">{c.subtitle}</p>
      </Reveal>

      <div className="mt-14 space-y-4 sm:mt-20">
        {rows.map((row, i) => {
          const Icon = row.icon;
          return (
            <Reveal key={row.key} delay={i * 70}>
              <div className="surface flex flex-wrap items-center justify-between gap-4 p-5 sm:p-7">
                <div className="flex items-center gap-5">
                  <Icon className="icon-tile !h-11 !w-11 !p-3" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <p className="text-sm text-ink-500">{row.label}</p>
                    <a
                      href={row.href}
                      {...(row.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                      className="font-display text-xl text-ink-900 transition-colors hover:text-clay-700 sm:text-2xl"
                    >
                      <span dir="ltr" className="inline-block">
                        {row.text}
                      </span>
                    </a>
                  </div>
                </div>
                {row.copyValue && (
                  <button
                    type="button"
                    onClick={() => copy(row.copyValue as string, row.key)}
                    className="btn btn-ghost !min-h-10 !px-4 !py-1.5 text-sm"
                    aria-live="polite"
                  >
                    {copied === row.key ? (
                      <Check className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    ) : (
                      <Copy className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    )}
                    <span>{copied === row.key ? c.copied : c.copy}</span>
                  </button>
                )}
              </div>
            </Reveal>
          );
        })}
        <Reveal delay={210}>
          <div className="surface flex items-center gap-5 p-5 sm:p-7">
            <MapPin className="icon-tile !h-11 !w-11 !p-3" strokeWidth={1.5} aria-hidden="true" />
            <div>
              <p className="text-sm text-ink-500">{c.locationLabel}</p>
              <p className="font-display text-xl text-ink-900 sm:text-2xl">{c.locationValue}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
