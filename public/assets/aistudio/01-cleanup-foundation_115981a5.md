# الملف 1 من 8: التنظيف والأساس

**نفّذ الخطوات حرفياً وبالترتيب. لا تغيّر أي كود ولا تضف أو تحذف شيئاً من عندك ولا تحسّن شيئاً. كل ملف أدناه: استبدل محتواه كاملاً بالكود المعطى (أنشئه إن لم يكن موجوداً). بعد الانتهاء اكتب فقط: تم الملف رقم كذا.**

احذف الملفات التالية من المشروع (لأنها ميتة أو قديمة): `.aistudio/` (المجلد كاملاً)، `README.md`، `src/components/common/ThemeToggle.tsx`، `src/context/ThemeContext.tsx`. لا تحذف `LanguageSwitcher.tsx` الآن (يُحذف في الملف 2).

## `index.html`

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#fdfaf4" />
    <title>ثامر السطام — معرض أعمال</title>
    <meta name="description" content="معرض أعمال ثامر السطام: مواقع وتطبيقات وأدوات للخط العربي، مع توضيح صريح لما فعلته بنفسي وما ساعد فيه الذكاء الاصطناعي." />
    <meta property="og:title" content="ثامر السطام — معرض أعمال" />
    <meta property="og:description" content="مواقع وتطبيقات وأدوات للخط العربي." />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="ar_AR" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%232b2218'/%3E%3Ccircle cx='32' cy='32' r='9' fill='%23c9805c'/%3E%3C/svg%3E" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans+Arabic:wght@200;300;400;500&family=Kufam:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## `metadata.json`

```json
{
  "name": "Thamer Alsatam - Portfolio",
  "description": "معرض أعمال شخصي بالعربية: مواقع وتطبيقات وأدوات للخط العربي."
}
```

## `src/types/index.ts`

```ts
// اللغات المدعومة حاليا: العربية فقط.
// لإضافة لغة لاحقا: أضفها هنا ثم أضف نصوصها في translations.ts و projects.ts.
export type SupportedLanguage = 'ar';

export type TextDirection = 'ltr' | 'rtl';

export type ProjectStatusKey =
  | 'fontat'
  | 'umayyad_mosque'
  | 'trainingsplan'
  | 'studio_lab'
  | 'arabic_font_tool';

export interface ProjectLocalizedContent {
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  limitations: string;
  features: string[];
}

export interface ProjectLinks {
  liveUrl?: string;
  githubUrl?: string;
  demoVideoUrl?: string;
}

export interface Project {
  id: string;
  slug: string;
  statusKey: ProjectStatusKey;
  technologies: string[];
  links: ProjectLinks;
  featured: boolean;
  coverImage?: string;
  gallery?: string[];
  demoVideo?: string;
  translations: Record<SupportedLanguage, ProjectLocalizedContent>;
}
```

## `src/i18n/config.ts`

```ts
import { SupportedLanguage, TextDirection } from '../types';
import { translations, UIStrings } from './translations';

const STORAGE_KEY = 'thamer_portfolio_lang';

export const DEFAULT_LANGUAGE: SupportedLanguage = 'ar';
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['ar'];

export const LANGUAGE_LABELS: Record<SupportedLanguage, { label: string; nativeName: string }> = {
  ar: { label: 'العربية', nativeName: 'العربية' },
};

export function getInitialLanguage(): SupportedLanguage {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) return saved;
  } catch {
    // التخزين غير متاح
  }
  try {
    const browserLanguages = navigator.languages || [navigator.language || ''];
    for (const raw of browserLanguages) {
      const code = raw.toLowerCase().split('-')[0] as SupportedLanguage;
      if (SUPPORTED_LANGUAGES.includes(code)) return code;
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

## `src/App.tsx`

```tsx
import React from 'react';
import { RouterProvider, useRouter } from './router/Router';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { path } = useRouter();

  const renderCurrentPage = () => {
    if (path.startsWith('/projects/')) return <ProjectDetailPage />;
    switch (path) {
      case '/projects':
        return <ProjectsPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return <Layout>{renderCurrentPage()}</Layout>;
};

export function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </LanguageProvider>
  );
}

export default App;
```

