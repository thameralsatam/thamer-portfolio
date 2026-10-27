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
