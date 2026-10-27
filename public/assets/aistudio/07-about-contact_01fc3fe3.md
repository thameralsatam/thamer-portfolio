# الملف 7 من 8: صفحتا عني والتواصل

**نفّذ الخطوات حرفياً وبالترتيب. لا تغيّر أي كود ولا تضف أو تحذف شيئاً من عندك ولا تحسّن شيئاً. كل ملف أدناه: استبدل محتواه كاملاً بالكود المعطى (أنشئه إن لم يكن موجوداً). بعد الانتهاء اكتب فقط: تم الملف رقم كذا.**

استبدل الملفين التاليين.

## `src/pages/AboutPage.tsx`

```tsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/common/Reveal';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const a = t.aboutPage;

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
            {a.stackGroups.map((group) => (
              <div key={group.title}>
                <h3 className="heading mb-3">{group.title}</h3>
                <ul className="text-ink-700">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
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
```

## `src/pages/ContactPage.tsx`

```tsx
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
```

