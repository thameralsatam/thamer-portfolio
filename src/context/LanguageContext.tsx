import React, { createContext, useContext, useState, useEffect } from 'react';
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

  const setLanguage = (newLang: SupportedLanguage) => {
    setLanguageState(newLang);
    saveLanguagePreference(newLang);
    syncDocumentAttributes(newLang);
  };

  useEffect(() => {
    // Initial sync of lang and dir attributes on <html> element
    syncDocumentAttributes(language);
  }, [language]);

  const dir = getDirection(language);
  const t = getTranslation(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
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
