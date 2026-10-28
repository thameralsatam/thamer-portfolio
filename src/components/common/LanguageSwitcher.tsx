import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from '../../i18n/config';

/**
 * مبدّل اللغة: تصميم هادئ ومتقن بحركة انزلاق فورية للمؤشر الداكن.
 * الاتجاه محدد كـ ltr دائماً لضمان ثبات مواضع الأزرار تحت يد المستخدم عند التبديل بين العربية واللغات الأخرى.
 */
export const LanguageSwitcher: React.FC = () => {
  const { activeLanguage, setLanguage, t } = useLanguage();
  const activeIndex = SUPPORTED_LANGUAGES.indexOf(activeLanguage);

  return (
    <div
      className="lang-switch"
      role="group"
      aria-label={t.common.language}
      dir="ltr"
      style={{ '--active-idx': activeIndex >= 0 ? activeIndex : 0 } as React.CSSProperties}
    >
      <span className="lang-pill" aria-hidden="true" />
      {SUPPORTED_LANGUAGES.map((code) => {
        const isCurrent = code === activeLanguage;
        const meta = LANGUAGE_LABELS[code];
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={isCurrent}
            aria-label={meta.nativeName}
            title={meta.nativeName}
            onClick={() => setLanguage(code)}
          >
            <span>{meta.short}</span>
          </button>
        );
      })}
    </div>
  );
};
