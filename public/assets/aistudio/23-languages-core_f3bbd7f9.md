# الملف 23: اللغات (عربي، إنكليزي، ألماني) + الاتجاه + زر اللغة + اكتشاف لغة الجهاز

**نفّذ الخطوات حرفياً وبالترتيب من 1 إلى 10. لا تغيّر أي كود ولا تضف أو تحذف شيئاً من عندك ولا تحسّن شيئاً. الملفات المذكورة "استبدل كاملاً": استبدل محتواها كاملاً بالكود المعطى (أنشئها إن لم تكن موجودة). التعديلات: ابحث عن "القديم" بالضبط واستبدله بـ"الجديد". في النهاية اكتب فقط: تم الملف رقم 23.**

## 1) `src/types/index.ts` (تعديل واحد)

**القديم:**
```
export type SupportedLanguage = 'ar';
```
**الجديد:**
```
export type SupportedLanguage = 'ar' | 'en' | 'de';
```

## 2) `src/i18n/config.ts` (استبدل كاملاً)

```ts
import { SupportedLanguage, TextDirection } from '../types';
import { translations, UIStrings } from './translations';

const STORAGE_KEY = 'thamer_portfolio_lang';

// الألمانية هي الافتراضية إذا كانت لغة الجهاز غير مدعومة.
export const DEFAULT_LANGUAGE: SupportedLanguage = 'de';
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['ar', 'en', 'de'];

export const LANGUAGE_LABELS: Record<SupportedLanguage, { short: string; nativeName: string }> = {
  ar: { short: 'ع', nativeName: 'العربية' },
  en: { short: 'EN', nativeName: 'English' },
  de: { short: 'DE', nativeName: 'Deutsch' },
};

function isSupported(code: string | null | undefined): code is SupportedLanguage {
  return !!code && (SUPPORTED_LANGUAGES as string[]).includes(code);
}

export function getInitialLanguage(): SupportedLanguage {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isSupported(saved)) return saved;
  } catch {
    // التخزين غير متاح
  }
  try {
    const browserLanguages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    for (const raw of browserLanguages) {
      const code = (raw || '').toLowerCase().split('-')[0];
      if (isSupported(code)) return code;
    }
  } catch {
    // نكمل بالافتراضي
  }
  return DEFAULT_LANGUAGE;
}

export function saveLanguagePreference(lang: SupportedLanguage): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // تجاهل
  }
}

export function getDirection(lang: SupportedLanguage): TextDirection {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

export function syncDocumentAttributes(lang: SupportedLanguage): void {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', getDirection(lang));
}

export function getTranslation(lang: SupportedLanguage): UIStrings {
  return translations[lang] || translations[DEFAULT_LANGUAGE];
}
```

## 3) `src/context/LanguageContext.tsx` (استبدل كاملاً)

```tsx
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { SupportedLanguage, TextDirection } from '../types';
import {
  getInitialLanguage,
  saveLanguagePreference,
  getDirection,
  syncDocumentAttributes,
  getTranslation,
} from '../i18n/config';
import { UIStrings } from '../i18n/translations';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  dir: TextDirection;
  t: UIStrings;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => getInitialLanguage());
  const busy = useRef(false);

  const setLanguage = useCallback(
    (next: SupportedLanguage) => {
      if (next === language || busy.current) return;
      const root = document.documentElement;
      const commit = () => {
        setLanguageState(next);
        saveLanguagePreference(next);
        syncDocumentAttributes(next);
      };
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        commit();
        return;
      }
      // تلاشٍ قصير ثم تبديل اللغة والاتجاه وهو غير مرئي، ثم ظهور ناعم
      busy.current = true;
      root.classList.add('lang-out');
      window.setTimeout(() => {
        commit();
        root.classList.remove('lang-out');
        root.classList.add('lang-in');
        window.setTimeout(() => {
          root.classList.remove('lang-in');
          busy.current = false;
        }, 480);
      }, 200);
    },
    [language]
  );

  useEffect(() => {
    syncDocumentAttributes(language);
  }, [language]);

  const dir = getDirection(language);
  const t = getTranslation(language);

  return <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>{children}</LanguageContext.Provider>;
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
```

## 4) `src/components/common/LanguageSwitcher.tsx` (أنشئ ملفاً جديداً)

```tsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from '../../i18n/config';

/** مبدّل اللغة: ثلاثة أزرار وفقاعة داكنة تنزلق إلى اللغة المختارة. */
export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const index = SUPPORTED_LANGUAGES.indexOf(language);

  return (
    <div
      className="lang-switch"
      role="group"
      aria-label={t.common.language}
      style={{ '--i': index } as React.CSSProperties}
    >
      <span className="lang-pill" aria-hidden="true" />
      {SUPPORTED_LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={code === language}
          aria-label={LANGUAGE_LABELS[code].nativeName}
          onClick={() => setLanguage(code)}
        >
          {LANGUAGE_LABELS[code].short}
        </button>
      ))}
    </div>
  );
};
```

## 5) `src/components/layout/Header.tsx` (استبدل كاملاً)

```tsx
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Link, useRouter } from '../../router/Router';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const { path, nudge } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [path]);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  const isActive = (to: string) => (to === '/' ? path === '/' : path.startsWith(to));

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/projects', label: t.nav.projects },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header className={`site-header ${scrolled || menuOpen ? 'is-scrolled' : ''}`}>
      <div className="container-main flex h-[4.5rem] items-center justify-between gap-3">
        <Link to="/" className="brand">
          {t.siteTitle}
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label={t.common.mainNav}>
          {links.map((link) => (
            <Link key={link.to} to={link.to} className={`nav-link ${isActive(link.to) && nudge > 0 ? (nudge % 2 ? 'ping-a' : 'ping-b') : ''}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="icon-btn md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.common.closeMenu : t.common.openMenu}
          >
            {menuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="menu-panel container-main pb-6 md:hidden" aria-label={t.common.mainNav}>
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="menu-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
```

## 6) `src/i18n/translations.ts` (استبدل كاملاً)

```ts
import { SupportedLanguage, ProjectStatusKey } from '../types';

export interface UIStrings {
  siteTitle: string;
  nav: { home: string; projects: string; about: string; contact: string };
  status: Record<ProjectStatusKey, string>;
  common: {
    skipToContent: string;
    mainNav: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    backToProjects: string;
    liveDemo: string;
    sourceCode: string;
    interactiveStage: string;
    problem: string;
    solution: string;
    roleAndAiUsage: string;
    limitations: string;
    technologies: string;
    features: string;
    prevProject: string;
    nextProject: string;
    notFoundTitle: string;
    notFoundText: string;
    viewProject: string;
  };
  home: {
    eyebrow: string;
    heroHeadline: string;
    heroDescription: string;
    exploreWork: string;
    getInTouch: string;
    featuredTitle: string;
    allProjects: string;
    stats: { aria: string; projects: string; live: string; inProgress: string };
  };
  projectsPage: { eyebrow: string; title: string; description: string };
  aboutPage: {
    eyebrow: string;
    title: string;
    lead: string;
    bio1: string;
    bio2: string;
    stackHeading: string;
    stackGroups: { title: string; items: string[] }[];
    approachHeading: string;
    approachText: string;
    seekingText: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    githubLabel: string;
    locationLabel: string;
    locationValue: string;
    copy: string;
    copied: string;
  };
  footer: { copyright: string; tagline: string; heading: string; text: string; top: string; topLabel: string };
}

const stackItems = [
  ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  ['Supabase', 'Python', 'Express', 'IndexedDB'],
  ['Cloudflare Pages', 'Capacitor', 'GitHub', 'Google AI Studio'],
];

export const translations: Record<SupportedLanguage, UIStrings> = {
  ar: {
    siteTitle: 'ثامر السطام',
    nav: { home: 'الرئيسية', projects: 'المشاريع', about: 'عني', contact: 'التواصل' },
    status: {
      fontat: 'يعمل وظيفياً، ويحتاج مراجعة أمنية قبل الاعتماد عليه',
      umayyad_mosque: 'نموذج أولي جاهز للتقييم، وليس موقعاً رسمياً',
      trainingsplan: 'مشروع شخصي، الحالة قيد التأكيد',
      studio_lab: 'قيد التطوير',
      arabic_font_tool: 'قيد التطوير',
    },
    common: {
      skipToContent: 'تخطَّ إلى المحتوى',
      mainNav: 'التنقل الرئيسي',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      language: 'اللغة',
      backToProjects: 'كل المشاريع',
      liveDemo: 'زيارة الموقع',
      sourceCode: 'الشيفرة المصدرية',
      interactiveStage: 'جرّب بنفسك',
      problem: 'لماذا بنيته',
      solution: 'ما يفعله',
      roleAndAiUsage: 'دوري والذكاء الاصطناعي',
      limitations: 'حدود المشروع',
      technologies: 'التقنيات',
      features: 'ما يقدمه المشروع',
      prevProject: 'المشروع السابق',
      nextProject: 'المشروع التالي',
      notFoundTitle: 'لم أجد هذا المشروع',
      notFoundText: 'قد يكون الرابط خاطئاً. يمكنك العودة إلى قائمة المشاريع.',
      viewProject: 'افتح المشروع',
    },
    home: {
      eyebrow: 'معرض أعمال',
      heroHeadline: 'أبني مواقع وتطبيقات، وأهتم بجمال الخط العربي.',
      heroDescription:
        'هذه مشاريعي كما هي: ما يعمل منها وما هو قيد التطوير، مع توضيح ما فعلته أنا وما ساعدني فيه الذكاء الاصطناعي.',
      exploreWork: 'استكشف المشاريع',
      getInTouch: 'تواصل معي',
      featuredTitle: 'مشاريع مختارة',
      allProjects: 'جميع المشاريع',
      stats: { aria: 'نظرة سريعة', projects: 'مشاريع', live: 'منشورة على الإنترنت', inProgress: 'قيد التطوير' },
    },
    projectsPage: {
      eyebrow: 'الأعمال',
      title: 'المشاريع',
      description: 'كل ما بنيته حتى الآن، بما فيه ما لم يكتمل بعد. حالة كل مشروع مكتوبة بوضوح.',
    },
    aboutPage: {
      eyebrow: 'نبذة',
      title: 'عني',
      lead: 'أتعلم البرمجة بالبناء، وأكتب بصراحة ما أنجزته وما لم أنجزه.',
      bio1:
        'أنا ثامر. بدأت بصفحات HTML وCSS، ثم صرت أبني مواقع وتطبيقات حول أشياء تهمني: الخط العربي، والتمارين الرياضية، وتعلم البرمجة نفسه.',
      bio2:
        'أستعين بالذكاء الاصطناعي في كتابة جزء كبير من الشيفرة، وأنا من يقرر ما يُبنى وكيف يبدو وكيف يُستخدم. ولا أقدّم ما كتبه الذكاء الاصطناعي على أنه من كتابتي.',
      stackHeading: 'ما استخدمته فعلاً',
      stackGroups: [
        { title: 'الواجهات', items: stackItems[0] },
        { title: 'البيانات والخوادم', items: stackItems[1] },
        { title: 'النشر والأدوات', items: stackItems[2] },
      ],
      approachHeading: 'طريقتي في العمل',
      approachText:
        'أكتب في كل مشروع ما فعلته أنا، وما ساعد فيه الذكاء الاصطناعي، وما لم يكتمل بعد. أفضّل أن يكون الموقع صريحاً على أن يبدو أكمل مما هو.',
      seekingText: 'أبحث عن مكان تدريب مهني في تطوير التطبيقات في ألمانيا.',
    },
    contactPage: {
      eyebrow: 'التواصل',
      title: 'يسعدني أن أسمع منك',
      subtitle: 'للأسئلة عن المشاريع، أو فرص التدريب والتعاون.',
      emailLabel: 'البريد الإلكتروني',
      githubLabel: 'GitHub',
      locationLabel: 'الموقع',
      locationValue: 'ألمانيا',
      copy: 'نسخ',
      copied: 'تم النسخ',
    },
    footer: {
      copyright: 'ثامر السطام',
      tagline: 'مواقع وتطبيقات وأدوات للخط العربي.',
      heading: 'عندك سؤال أو فرصة؟',
      text: 'يسعدني أن أسمع منك عن المشاريع، أو عن فرص التدريب والتعاون.',
      top: 'الأعلى',
      topLabel: 'العودة إلى الأعلى',
    },
  },
  en: {
    siteTitle: 'Thamer Alsatam',
    nav: { home: 'Home', projects: 'Projects', about: 'About', contact: 'Contact' },
    status: {
      fontat: 'Works, but needs a security review before you rely on it',
      umayyad_mosque: 'Prototype ready for review, not an official site',
      trainingsplan: 'Personal project, status to be confirmed',
      studio_lab: 'In development',
      arabic_font_tool: 'In development',
    },
    common: {
      skipToContent: 'Skip to content',
      mainNav: 'Main navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
      backToProjects: 'All projects',
      liveDemo: 'Visit site',
      sourceCode: 'Source code',
      interactiveStage: 'Try it yourself',
      problem: 'Why I built it',
      solution: 'What it does',
      roleAndAiUsage: 'My role and AI',
      limitations: 'Limitations',
      technologies: 'Technologies',
      features: 'What it offers',
      prevProject: 'Previous project',
      nextProject: 'Next project',
      notFoundTitle: "I couldn't find this project",
      notFoundText: 'The link may be wrong. You can go back to the projects list.',
      viewProject: 'Open project',
    },
    home: {
      eyebrow: 'Portfolio',
      heroHeadline: 'I build websites and apps, and I care about beautiful Arabic type.',
      heroDescription:
        'These are my projects as they are: what works and what is still in development, with a clear account of what I did myself and where AI helped.',
      exploreWork: 'Explore projects',
      getInTouch: 'Get in touch',
      featuredTitle: 'Selected projects',
      allProjects: 'All projects',
      stats: { aria: 'At a glance', projects: 'Projects', live: 'Published online', inProgress: 'In development' },
    },
    projectsPage: {
      eyebrow: 'Work',
      title: 'Projects',
      description: 'Everything I have built so far, including what is not finished yet. Each project’s status is stated clearly.',
    },
    aboutPage: {
      eyebrow: 'About',
      title: 'About me',
      lead: 'I learn programming by building, and I write honestly what I achieved and what I did not.',
      bio1:
        'I’m Thamer. I started with HTML and CSS pages, then began building websites and apps around things I care about: Arabic typography, workouts, and learning to code itself.',
      bio2:
        'I use AI to write a large part of the code, and I decide what gets built, how it looks and how it is used. I do not present what AI wrote as my own writing.',
      stackHeading: 'What I have actually used',
      stackGroups: [
        { title: 'Interfaces', items: stackItems[0] },
        { title: 'Data and servers', items: stackItems[1] },
        { title: 'Deployment and tools', items: stackItems[2] },
      ],
      approachHeading: 'How I work',
      approachText:
        'In every project I write what I did myself, where AI helped, and what is not finished yet. I prefer the site to be honest rather than look more complete than it is.',
      seekingText: 'I am looking for a vocational training place (Ausbildung) in application development in Germany.',
    },
    contactPage: {
      eyebrow: 'Contact',
      title: 'I would love to hear from you',
      subtitle: 'For questions about the projects, or training and collaboration opportunities.',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      locationLabel: 'Location',
      locationValue: 'Germany',
      copy: 'Copy',
      copied: 'Copied',
    },
    footer: {
      copyright: 'Thamer Alsatam',
      tagline: 'Websites, apps and tools for Arabic type.',
      heading: 'Have a question or an opportunity?',
      text: 'I would be glad to hear from you about projects, or about training and collaboration opportunities.',
      top: 'Top',
      topLabel: 'Back to top',
    },
  },
  de: {
    siteTitle: 'Thamer Alsatam',
    nav: { home: 'Start', projects: 'Projekte', about: 'Über mich', contact: 'Kontakt' },
    status: {
      fontat: 'Funktioniert, braucht aber vor dem Einsatz eine Sicherheitsprüfung',
      umayyad_mosque: 'Prototyp zur Begutachtung, keine offizielle Website',
      trainingsplan: 'Privatprojekt, Status noch zu bestätigen',
      studio_lab: 'In Entwicklung',
      arabic_font_tool: 'In Entwicklung',
    },
    common: {
      skipToContent: 'Zum Inhalt springen',
      mainNav: 'Hauptnavigation',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      language: 'Sprache',
      backToProjects: 'Alle Projekte',
      liveDemo: 'Website besuchen',
      sourceCode: 'Quellcode',
      interactiveStage: 'Probier es selbst aus',
      problem: 'Warum ich es gebaut habe',
      solution: 'Was es macht',
      roleAndAiUsage: 'Meine Rolle und die KI',
      limitations: 'Grenzen des Projekts',
      technologies: 'Technologien',
      features: 'Was das Projekt bietet',
      prevProject: 'Vorheriges Projekt',
      nextProject: 'Nächstes Projekt',
      notFoundTitle: 'Projekt nicht gefunden',
      notFoundText: 'Der Link ist vielleicht falsch. Du kannst zur Projektliste zurückkehren.',
      viewProject: 'Projekt öffnen',
    },
    home: {
      eyebrow: 'Portfolio',
      heroHeadline: 'Ich baue Websites und Apps und liebe schöne arabische Schrift.',
      heroDescription:
        'Das sind meine Projekte, wie sie sind: was funktioniert und was noch in Entwicklung ist, mit klarer Angabe, was ich selbst gemacht habe und wobei mir KI geholfen hat.',
      exploreWork: 'Projekte ansehen',
      getInTouch: 'Kontakt aufnehmen',
      featuredTitle: 'Ausgewählte Projekte',
      allProjects: 'Alle Projekte',
      stats: { aria: 'Auf einen Blick', projects: 'Projekte', live: 'Online veröffentlicht', inProgress: 'In Entwicklung' },
    },
    projectsPage: {
      eyebrow: 'Arbeiten',
      title: 'Projekte',
      description: 'Alles, was ich bisher gebaut habe, auch das, was noch nicht fertig ist. Der Status jedes Projekts ist klar angegeben.',
    },
    aboutPage: {
      eyebrow: 'Info',
      title: 'Über mich',
      lead: 'Ich lerne Programmieren durch Bauen und schreibe ehrlich, was ich geschafft habe und was nicht.',
      bio1:
        'Ich bin Thamer. Ich habe mit HTML- und CSS-Seiten angefangen und baue inzwischen Websites und Apps rund um Dinge, die mir wichtig sind: arabische Schrift, Training und das Programmierenlernen selbst.',
      bio2:
        'Ich nutze KI, um einen großen Teil des Codes zu schreiben, entscheide aber selbst, was gebaut wird, wie es aussieht und wie es benutzt wird. Was die KI geschrieben hat, gebe ich nicht als meine eigene Arbeit aus.',
      stackHeading: 'Was ich tatsächlich verwendet habe',
      stackGroups: [
        { title: 'Oberflächen', items: stackItems[0] },
        { title: 'Daten und Server', items: stackItems[1] },
        { title: 'Veröffentlichung und Werkzeuge', items: stackItems[2] },
      ],
      approachHeading: 'Wie ich arbeite',
      approachText:
        'Bei jedem Projekt schreibe ich, was ich selbst gemacht habe, wobei mir KI geholfen hat und was noch nicht fertig ist. Mir ist eine ehrliche Website lieber als eine, die vollständiger wirkt, als sie ist.',
      seekingText: 'Ich suche einen Ausbildungsplatz in der Anwendungsentwicklung in Deutschland.',
    },
    contactPage: {
      eyebrow: 'Kontakt',
      title: 'Ich freue mich, von dir zu hören',
      subtitle: 'Für Fragen zu den Projekten oder für Ausbildungs- und Kooperationsmöglichkeiten.',
      emailLabel: 'E-Mail',
      githubLabel: 'GitHub',
      locationLabel: 'Standort',
      locationValue: 'Deutschland',
      copy: 'Kopieren',
      copied: 'Kopiert',
    },
    footer: {
      copyright: 'Thamer Alsatam',
      tagline: 'Websites, Apps und Werkzeuge für arabische Schrift.',
      heading: 'Hast du eine Frage oder eine Chance?',
      text: 'Ich freue mich, von dir zu hören, über Projekte oder über Ausbildungs- und Kooperationsmöglichkeiten.',
      top: 'Nach oben',
      topLabel: 'Zurück nach oben',
    },
  },
};
```

## 7) نصوص المشاريع: بيانات اللغات

أنشئ ملفاً جديداً `src/data/projectTexts.ts`:

```ts
import { ProjectLocalizedContent, SupportedLanguage } from '../types';

/** نصوص المشاريع بالإنكليزية والألمانية، بمفتاح معرّف المشروع. تُملأ في الملف التالي. */
export const projectTexts: Partial<Record<SupportedLanguage, Record<string, ProjectLocalizedContent>>> = {};
```

في `src/data/projects.ts` (ثلاثة تعديلات):

**أ) القديم:**
```
import { Project } from '../types';
```
**الجديد:**
```
import { Project, ProjectLocalizedContent } from '../types';
import { projectTexts } from './projectTexts';

type RawProject = Omit<Project, 'translations'> & { translations: { ar: ProjectLocalizedContent } };
```

**ب) القديم:**
```
export const projects: Project[] = [
```
**الجديد:**
```
const rawProjects: RawProject[] = [
```

**ج) القديم:**
```
export function getProjectBySlug(slug: string): Project | undefined {
```
**الجديد:**
```
// أي لغة لا يتوفر نصها بعد تعرض النص العربي بدل أن تتعطل الصفحة.
export const projects: Project[] = rawProjects.map((p) => ({
  ...p,
  translations: {
    ar: p.translations.ar,
    en: projectTexts.en?.[p.id] ?? p.translations.ar,
    de: projectTexts.de?.[p.id] ?? p.translations.ar,
  },
}));

export function getProjectBySlug(slug: string): Project | undefined {
```

## 8) النصوص الثابتة داخل المكوّنات

في `src/pages/HomePage.tsx` (أربعة تعديلات):

**أ) القديم:** `label: 'مشاريع'` **الجديد:** `label: t.home.stats.projects`
**ب) القديم:** `label: 'منشورة على الإنترنت'` **الجديد:** `label: t.home.stats.live`
**ج) القديم:** `label: 'قيد التطوير'` **الجديد:** `label: t.home.stats.inProgress`
**د) القديم:** `aria-label="نظرة سريعة"` **الجديد:** `aria-label={t.home.stats.aria}`

في `src/components/layout/Footer.tsx` (تعديلان):

**أ) القديم:** `aria-label="العودة إلى الأعلى"` **الجديد:** `aria-label={t.footer.topLabel}`
**ب) القديم:** `<span>الأعلى</span>` **الجديد:** `<span>{t.footer.top}</span>`

## 9) `index.html` (يمنع الوميض: يضبط اللغة والاتجاه قبل ظهور الصفحة)

**القديم:**
```
<meta charset="UTF-8" />
```
**الجديد:**
```
<meta charset="UTF-8" />
    <script>
      (function () {
        try {
          var L = ['ar', 'en', 'de'];
          var s = localStorage.getItem('thamer_portfolio_lang');
          var l = L.indexOf(s) > -1 ? s : null;
          if (!l) {
            var n = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
            for (var i = 0; i < n.length; i++) {
              var c = (n[i] || '').toLowerCase().split('-')[0];
              if (L.indexOf(c) > -1) { l = c; break; }
            }
          }
          l = l || 'de';
          document.documentElement.lang = l;
          document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
        } catch (e) {}
      })();
    </script>
```

## 10) ألصق في آخر `src/index.css` ثم الفحص

```css
/* ===== اللغات: المبدّل وحركة التبديل والخطوط اللاتينية ===== */
.lang-switch {
  position: relative;
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 3px;
  border: 1px solid var(--color-line-strong);
  border-radius: 0.875rem;
  background: rgba(255, 255, 255, 0.45);
}
.lang-switch .lang-pill {
  position: absolute;
  top: 3px;
  bottom: 3px;
  inset-inline-start: 3px;
  width: calc((100% - 6px) / 3);
  border-radius: 0.65rem;
  background: var(--color-ink-900);
  transform: translateX(calc(var(--shift) * var(--i) * 100%));
  transition: transform 0.45s var(--ease);
}
.lang-switch button {
  position: relative;
  z-index: 1;
  min-width: 2.5rem;
  padding: 0.35rem 0.6rem;
  border-radius: 0.65rem;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-ink-700);
  cursor: pointer;
  transition: color 0.3s var(--ease);
}
.lang-switch button[aria-pressed='true'] { color: var(--color-paper-50); }

/* تبديل اللغة: تلاشٍ قصير ثم ظهور ناعم */
.lang-out #root { opacity: 0; transition: opacity 0.2s var(--ease); }
.lang-in #root { animation: langIn 0.48s var(--ease) both; }
@keyframes langIn { from { opacity: 0; } to { opacity: 1; } }

/* اللاتينية: بلا مسافات سالبة بين الأحرف وبأسطر أريح */
:lang(en) .display, :lang(de) .display { letter-spacing: 0; line-height: 1.2; }
:lang(en) .title, :lang(de) .title { line-height: 1.25; }
:lang(en) body, :lang(de) body { line-height: 1.75; }
:lang(de) .display { hyphens: auto; overflow-wrap: break-word; }

@media (prefers-reduced-motion: reduce) {
  .lang-switch .lang-pill { transition: none; }
  .lang-out #root { transition: none; }
  .lang-in #root { animation: none; }
}
```

ثم شغّل `npm run lint` و`npm run build`. إذا ظهر خطأ برمجي أصلحه بأقل تغيير دون المساس بالتصميم أو النصوص، واذكر لي ما غيّرته حرفياً. ثم افتح الموقع وبدّل بين اللغات الثلاث في كل الصفحات وأخبرني بأي خطأ.
