import React, { useState } from 'react';
import { Check, Code, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/common/Reveal';

const EMAIL = 'alsatamthamer@gmail.com';
const PHONE_DISPLAY = '+49 152 14170410';
const PHONE_RAW = '+4915214170410';
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
    { key: 'phone', icon: Phone, label: c.phoneLabel, text: PHONE_DISPLAY, href: `tel:${PHONE_RAW}`, copyValue: PHONE_RAW },
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

      <div className="mt-16 border-b border-line sm:mt-24">
        {rows.map((row, i) => {
          const Icon = row.icon;
          return (
            <Reveal key={row.key} delay={i * 70}>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-8">
                <div className="flex items-center gap-5">
                  <Icon className="h-5 w-5 shrink-0 text-clay-600" strokeWidth={1.5} aria-hidden="true" />
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
                    className="text-link text-sm"
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
          <div className="flex items-center gap-5 border-t border-line py-8">
            <MapPin className="h-5 w-5 shrink-0 text-clay-600" strokeWidth={1.5} aria-hidden="true" />
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
