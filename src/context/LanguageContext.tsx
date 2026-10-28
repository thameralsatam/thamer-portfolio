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
  activeLanguage: SupportedLanguage;
  isSwitching: boolean;
  setLanguage: (lang: SupportedLanguage) => void;
  dir: TextDirection;
  t: UIStrings;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => getInitialLanguage());
  const [activeLanguage, setActiveLanguage] = useState<SupportedLanguage>(language);
  const [isSwitching, setIsSwitching] = useState(false);
  const busy = useRef(false);

  useEffect(() => {
    setActiveLanguage(language);
  }, [language]);

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
        setActiveLanguage(next);
        commit();
        return;
      }

      busy.current = true;
      setActiveLanguage(next); // استجابة فورية لمؤشر التبديل المنزلق عند الضغط
      setIsSwitching(true);

      // انتقال هادئ: تهدئة خفيفة للمحتوى مع بقاء الرأس والأزرار ثابتة
      root.classList.add('lang-switching-out');

      window.setTimeout(() => {
        commit();
        root.classList.remove('lang-switching-out');
        root.classList.add('lang-switching-in');

        window.setTimeout(() => {
          root.classList.remove('lang-switching-in');
          setIsSwitching(false);
          busy.current = false;
        }, 320);
      }, 150);
    },
    [language]
  );

  useEffect(() => {
    syncDocumentAttributes(language);
  }, [language]);

  const dir = getDirection(language);
  const t = getTranslation(language);

  return (
    <LanguageContext.Provider value={{ language, activeLanguage, isSwitching, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
