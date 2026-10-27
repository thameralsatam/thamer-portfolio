import React, { useState } from 'react';
import { Type, RotateCcw, Copy, Check } from 'lucide-react';

export const FontatDemo: React.FC = () => {
  const [text, setText] = useState('أبجد هوز حطي كلمن — Typografie im Web');
  const [fontSize, setFontSize] = useState(32);
  const [fontWeight, setFontWeight] = useState(600);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(1.6);
  const [fontFamily, setFontFamily] = useState<'kufam' | 'ibm'>('kufam');
  const [copied, setCopied] = useState(false);

  const resetDefaults = () => {
    setText('أبجد هوز حطي كلمن — Typografie im Web');
    setFontSize(32);
    setFontWeight(600);
    setLetterSpacing(0);
    setLineHeight(1.6);
    setFontFamily('kufam');
  };

  const copyCSS = () => {
    const css = `font-family: '${fontFamily === 'kufam' ? 'Kufam' : 'IBM Plex Sans Arabic'}';\nfont-size: ${fontSize}px;\nfont-weight: ${fontWeight};\nletter-spacing: ${letterSpacing}px;\nline-height: ${lineHeight};`;
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFontFamilyStyle = () => {
    if (fontFamily === 'kufam') return 'var(--font-display), "Kufam", sans-serif';
    return 'var(--font-sans), "IBM Plex Sans Arabic", sans-serif';
  };

  return (
    <div className="cream-card rounded-3xl overflow-hidden shadow-xs">
      {/* Interactive Toolbar */}
      <div className="p-4 border-b border-[#e8ded1] flex flex-wrap items-center justify-between gap-3 bg-[#faf5ec]/70">
        <div className="flex items-center gap-2">
          <Type className="w-4 h-4 text-[#9e5a26]" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#241e1a]">
            Fontat Typography Lab
          </span>
          <span className="cream-pill-accent text-[11px] font-mono px-2.5 py-0.5">
            Live Interactive
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copyCSS}
            className="cream-pill inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono transition-colors hover:border-[#9e5a26] cursor-pointer"
            title="CSS kopieren"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3 text-[#736356]" />}
            <span>{copied ? 'Kopiert' : 'CSS'}</span>
          </button>
          <button
            type="button"
            onClick={resetDefaults}
            className="cream-pill p-1.5 text-[#736356] hover:text-[#241e1a] hover:border-[#9e5a26] cursor-pointer"
            title="Zurücksetzen"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Control sliders */}
      <div className="p-4 border-b border-[#ede4d7] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono bg-[#fdfbf7]/60">
        <div>
          <div className="flex justify-between text-[#736356] mb-1">
            <span>Schriftfamilie</span>
          </div>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value as any)}
            className="w-full cream-pill px-3 py-1 text-xs text-[#241e1a] focus:outline-none"
          >
            <option value="kufam">Kufam (Geometric Display)</option>
            <option value="ibm">IBM Plex Sans (Body)</option>
          </select>
        </div>

        <div>
          <div className="flex justify-between text-[#736356] mb-1">
            <span>Größe</span>
            <span>{fontSize}px</span>
          </div>
          <input
            type="range"
            min="18"
            max="64"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full accent-[#9e5a26] cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-[#736356] mb-1">
            <span>Gewicht</span>
            <span>{fontWeight}</span>
          </div>
          <input
            type="range"
            min="300"
            max="700"
            step="100"
            value={fontWeight}
            onChange={(e) => setFontWeight(Number(e.target.value))}
            className="w-full accent-[#9e5a26] cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-[#736356] mb-1">
            <span>Zeilenhöhe</span>
            <span>{lineHeight}</span>
          </div>
          <input
            type="range"
            min="1.1"
            max="2.2"
            step="0.1"
            value={lineHeight}
            onChange={(e) => setLineHeight(Number(e.target.value))}
            className="w-full accent-[#9e5a26] cursor-pointer"
          />
        </div>
      </div>

      {/* Live Preview Canvas */}
      <div className="p-6 sm:p-8 min-h-[180px] flex items-center justify-center bg-[#fefcf9]">
        <div
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setText(e.currentTarget.textContent || '')}
          style={{
            fontFamily: getFontFamilyStyle(),
            fontSize: `${fontSize}px`,
            fontWeight: fontWeight,
            letterSpacing: `${letterSpacing}px`,
            lineHeight: lineHeight,
          }}
          className="w-full text-center outline-none text-[#241e1a] transition-all select-text"
        >
          {text}
        </div>
      </div>

      {/* Footer telemetry */}
      <div className="px-4 py-2.5 border-t border-[#ede4d7] flex items-center justify-between text-[11px] font-mono text-[#736356] bg-[#faf5ec]/50">
        <span>Unicode UTF-8: {text.length} Zeichen</span>
        <span>Echtzeit-Rendering</span>
      </div>
    </div>
  );
};
