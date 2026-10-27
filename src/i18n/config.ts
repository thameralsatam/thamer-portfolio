import { SupportedLanguage, TextDirection } from '../types';
import { translations, UIStrings } from './translations';

const STORAGE_KEY = 'thamer_portfolio_lang';
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['de', 'ar', 'en', 'tr'];

export const LANGUAGE_LABELS: Record<SupportedLanguage, { label: string; nativeName: string }> = {
  de: { label: 'Deutsch', nativeName: 'Deutsch' },
  ar: { label: 'العربية', nativeName: 'العربية' },
  en: { label: 'English', nativeName: 'English' },
  tr: { label: 'Türkçe', nativeName: 'Türkçe' },
};

export function getInitialLanguage(): SupportedLanguage {
  // 1. Try reading manual user choice from localStorage
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
  } catch {
    // localStorage might be unavailable or restricted; continue to detection
  }

  // 2. Detect browser language
  try {
    const browserLanguages = navigator.languages || [navigator.language || ''];
    for (const rawLang of browserLanguages) {
      const code = rawLang.toLowerCase().split('-')[0] as SupportedLanguage;
      if (SUPPORTED_LANGUAGES.includes(code)) {
        return code;
      }
    }
  } catch {
    // Fall back to German
  }

  // 3. Default fallback is German (primary audience: German employers)
  return 'de';
}

export function saveLanguagePreference(lang: SupportedLanguage): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Gracefully handle private browsing or storage errors
  }
}

export function getDirection(lang: SupportedLanguage): TextDirection {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

export function syncDocumentAttributes(lang: SupportedLanguage): void {
  const dir = getDirection(lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', dir);
}

export function getTranslation(lang: SupportedLanguage): UIStrings {
  // Ensure robust fallback to German if key or language is ever incomplete
  return translations[lang] || translations.de;
}
