import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SUPPORTED_LANGUAGES, LANGUAGE_LABELS } from '../../i18n/config';
import { SupportedLanguage } from '../../types';
import { ChevronDown, Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="cream-pill px-3 py-1.5 text-xs font-medium inline-flex items-center gap-1.5 focus:outline-none transition-all cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t.common.languageToggle}
      >
        <Globe className="w-3.5 h-3.5 opacity-60 text-[#736356]" />
        <span className="font-sans font-medium text-[#2d241e]">{LANGUAGE_LABELS[language].nativeName}</span>
        <ChevronDown
          className={`w-3 h-3 text-[#736356] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-36 origin-top-right rounded-2xl cream-header p-1.5 z-50 text-xs focus:outline-none animate-page-enter shadow-lg border border-[#e8ded2]"
          role="menu"
        >
          {SUPPORTED_LANGUAGES.map((lang: SupportedLanguage) => {
            const isSelected = language === lang;
            return (
              <button
                key={lang}
                type="button"
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
                className={`w-full text-left rtl:text-right px-3 py-1.5 flex items-center justify-between rounded-xl transition-colors duration-150 cursor-pointer ${
                  isSelected
                    ? 'font-semibold text-[#8b4513] bg-[#f7eedd]'
                    : 'text-[#5a4d43] hover:text-[#241e1a] hover:bg-[#efe6d8]'
                }`}
                role="menuitem"
              >
                <span>{LANGUAGE_LABELS[lang].nativeName}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9e5a26]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
