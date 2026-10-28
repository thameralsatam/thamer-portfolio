import React, { useState } from 'react';
import { Check, Copy, RotateCcw, Type } from 'lucide-react';
import { DemoFrame } from './DemoFrame';
import { useLanguage } from '../../context/LanguageContext';

type Family = 'kufam' | 'plex';

const STRINGS = {
  ar: {
    title: 'مختبر الخطوط',
    note: 'نموذج مصغّر يحاكي فكرة المنصة، وليس المنصة نفسها.',
    footer: 'اضغط على النص لتعديله.',
    font: 'الخط',
    size: 'الحجم',
    weight: 'الوزن',
    lineHeight: 'ارتفاع السطر',
    copyCss: 'نسخ CSS',
    copied: 'تم النسخ',
    reset: 'إعادة الضبط',
    defaultText: 'الكلمة الجميلة تحتاج إلى خط جميل',
    kufamName: 'كوفام',
    plexName: 'آي بي إم بلكس عربي',
  },
  en: {
    title: 'Typography Sandbox',
    note: 'A mini sandbox simulating the platform concept, not the full platform.',
    footer: 'Click on the text above to edit it freely.',
    font: 'Typeface',
    size: 'Font Size',
    weight: 'Weight',
    lineHeight: 'Line Height',
    copyCss: 'Copy CSS',
    copied: 'Copied',
    reset: 'Reset',
    defaultText: 'الكلمة الجميلة تحتاج إلى خط جميل',
    kufamName: 'Kufam',
    plexName: 'IBM Plex Sans Arabic',
  },
  de: {
    title: 'Schriftlabor',
    note: 'Ein Mini-Sandbox-Modell, das das Plattformkonzept veranschaulicht.',
    footer: 'Klicke auf den Text, um ihn frei zu bearbeiten.',
    font: 'Schriftart',
    size: 'Schriftgröße',
    weight: 'Stärke',
    lineHeight: 'Zeilenhöhe',
    copyCss: 'CSS kopieren',
    copied: 'Kopiert',
    reset: 'Zurücksetzen',
    defaultText: 'الكلمة الجميلة تحتاج إلى خط جميل',
    kufamName: 'Kufam',
    plexName: 'IBM Plex Sans Arabic',
  },
};

const RANGES: Record<Family, { min: number; max: number }> = {
  kufam: { min: 400, max: 600 },
  plex: { min: 200, max: 500 },
};

const FAMILY_CSS: Record<Family, string> = {
  kufam: "'Kufam', sans-serif",
  plex: "'IBM Plex Sans Arabic', sans-serif",
};

export const FontatDemo: React.FC = () => {
  const { language } = useLanguage();
  const s = STRINGS[language] || STRINGS.ar;

  const [text, setText] = useState(s.defaultText);
  const [size, setSize] = useState(40);
  const [weight, setWeight] = useState(400);
  const [lineHeight, setLineHeight] = useState(1.8);
  const [family, setFamily] = useState<Family>('kufam');
  const [copied, setCopied] = useState(false);

  const range = RANGES[family];
  const effectiveWeight = Math.min(Math.max(weight, range.min), range.max);

  const reset = () => {
    setText(s.defaultText);
    setSize(40);
    setWeight(400);
    setLineHeight(1.8);
    setFamily('kufam');
  };

  const copyCss = async () => {
    const css = `font-family: ${FAMILY_CSS[family]};\nfont-size: ${size}px;\nfont-weight: ${effectiveWeight};\nline-height: ${lineHeight};`;
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // النسخ غير متاح
    }
  };

  const slider = (label: string, value: number, min: number, max: number, step: number, onChange: (v: number) => void) => (
    <label className="block">
      <span className="flex justify-between text-sm text-ink-500">
        <span>{label}</span>
        <span dir="ltr">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full cursor-pointer"
      />
    </label>
  );

  return (
    <DemoFrame
      icon={<Type className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />}
      title={s.title}
      note={s.note}
      footer={s.footer}
    >
      <div className="grid gap-6 px-6 py-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-ink-500">{s.font}</span>
          <select
            value={family}
            onChange={(e) => setFamily(e.target.value as Family)}
            className="mt-1 w-full rounded-full border border-line-strong bg-paper-50 px-4 py-2 text-ink-900"
          >
            <option value="kufam">{s.kufamName}</option>
            <option value="plex">{s.plexName}</option>
          </select>
        </label>
        {slider(s.size, size, 20, 72, 1, setSize)}
        {slider(s.weight, effectiveWeight, range.min, range.max, 100, setWeight)}
        {slider(s.lineHeight, lineHeight, 1.2, 2.4, 0.1, setLineHeight)}
      </div>

      <div className="flex min-h-[11rem] items-center justify-center border-t border-line bg-paper-50/70 px-6 py-10">
        <div
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-label={s.title}
          onBlur={(e) => setText(e.currentTarget.textContent || '')}
          style={{ fontFamily: FAMILY_CSS[family], fontSize: size, fontWeight: effectiveWeight, lineHeight }}
          className="w-full text-center text-ink-900 outline-none"
        >
          {text}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 border-t border-line px-6 py-4">
        <button type="button" onClick={copyCss} className="btn btn-ghost !px-4 !py-2 text-sm">
          {copied ? <Check className="h-4 w-4" strokeWidth={1.5} /> : <Copy className="h-4 w-4" strokeWidth={1.5} />}
          <span>{copied ? s.copied : s.copyCss}</span>
        </button>
        <button type="button" onClick={reset} className="icon-btn" aria-label={s.reset}>
          <RotateCcw className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </DemoFrame>
  );
};
