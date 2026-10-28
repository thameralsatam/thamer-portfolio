import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from '../../i18n/config';

/**
 * مبدّل اللغة: قائمة منسدلة مدمجة، هادئة وأنيقة، بكلمة اللغة الواضحة وبخط الموقع الأصلي.
 */
export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // إغلاق القائمة عند النقر خارجها أو الضغط على مفتاح Escape
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="lang-dropdown" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="lang-trigger"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${t.common.language}: ${LANGUAGE_LABELS[language].nativeName}`}
      >
        <Globe className="lang-globe h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
        <span className="lang-trigger-label">{LANGUAGE_LABELS[language].nativeName}</span>
        <ChevronDown className="lang-chevron h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          className="lang-menu"
          role="menu"
          aria-orientation="vertical"
          aria-label={t.common.language}
        >
          {SUPPORTED_LANGUAGES.map((code) => {
            const isCurrent = code === language;
            return (
              <button
                key={code}
                type="button"
                role="menuitemradio"
                aria-checked={isCurrent}
                lang={code}
                className={`lang-item ${isCurrent ? 'is-active' : ''}`}
                onClick={() => {
                  setLanguage(code);
                  setIsOpen(false);
                }}
              >
                <span className="lang-item-name">{LANGUAGE_LABELS[code].nativeName}</span>
                {isCurrent && (
                  <Check className="lang-item-check h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
