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
