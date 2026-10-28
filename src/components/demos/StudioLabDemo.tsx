import React, { useState, useEffect } from 'react';
import { RotateCcw, SquareCode } from 'lucide-react';
import { DemoFrame } from './DemoFrame';
import { useLanguage } from '../../context/LanguageContext';

const STRINGS = {
  ar: {
    title: 'محرر ومعاينة حية',
    note: 'نموذج مصغّر يحاكي فكرة المحرر، وليس المشروع نفسه.',
    codeLabel: 'الشيفرة البرمجية',
    previewLabel: 'المعاينة الحية',
    reset: 'إعادة الشيفرة الافتراضية',
    initialCode: `<h1>مرحباً</h1>\n<p>غيّر هذا النص وشاهد النتيجة فوراً.</p>\n\n<style>\n  body { font-family: sans-serif; background: #fdfaf4; color: #2b2218; padding: 1rem; }\n  h1 { color: #a35b3a; font-weight: 400; }\n</style>`,
  },
  en: {
    title: 'Live Code Sandbox',
    note: 'A mini sandbox simulating the editor concept, not the project itself.',
    codeLabel: 'Source Code',
    previewLabel: 'Live Preview',
    reset: 'Reset default code',
    initialCode: `<h1>Hello World</h1>\n<p>Edit this text to see live changes instantly.</p>\n\n<style>\n  body { font-family: sans-serif; background: #fdfaf4; color: #2b2218; padding: 1rem; }\n  h1 { color: #a35b3a; font-weight: 400; }\n</style>`,
  },
  de: {
    title: 'Live-Code-Editor',
    note: 'Ein Mini-Sandbox-Modell, das das Editor-Konzept veranschaulicht.',
    codeLabel: 'Quellcode',
    previewLabel: 'Live-Vorschau',
    reset: 'Code zurücksetzen',
    initialCode: `<h1>Hallo Welt</h1>\n<p>Bearbeite diesen Text, um sofort Änderungen zu sehen.</p>\n\n<style>\n  body { font-family: sans-serif; background: #fdfaf4; color: #2b2218; padding: 1rem; }\n  h1 { color: #a35b3a; font-weight: 400; }\n</style>`,
  },
};

export const StudioLabDemo: React.FC = () => {
  const { language } = useLanguage();
  const s = STRINGS[language] || STRINGS.ar;

  const [code, setCode] = useState(s.initialCode);

  useEffect(() => {
    setCode(s.initialCode);
  }, [language]);

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const srcDoc = `<!doctype html><html lang="${language}" dir="${dir}"><body>${code}</body></html>`;

  return (
    <DemoFrame
      icon={<SquareCode className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />}
      title={s.title}
      note={s.note}
    >
      <div className="grid md:grid-cols-2">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          dir="ltr"
          aria-label={s.codeLabel}
          className="h-64 w-full resize-none bg-paper-50/70 p-5 font-mono text-sm leading-7 text-ink-900 outline-none"
        />
        <iframe
          title={s.previewLabel}
          sandbox=""
          srcDoc={srcDoc}
          className="h-64 w-full border-t border-line bg-white md:border-s md:border-t-0"
        />
      </div>
      <div className="flex justify-end border-t border-line px-6 py-3">
        <button
          type="button"
          onClick={() => setCode(s.initialCode)}
          className="icon-btn"
          aria-label={s.reset}
        >
          <RotateCcw className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </DemoFrame>
  );
};
