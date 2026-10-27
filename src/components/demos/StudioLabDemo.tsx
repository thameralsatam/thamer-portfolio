import React, { useState } from 'react';
import { RotateCcw, SquareCode } from 'lucide-react';
import { DemoFrame } from './DemoFrame';

const INITIAL_CODE = `<h1>مرحباً</h1>
<p>غيّر هذا النص وشاهد النتيجة فوراً.</p>

<style>
  body { font-family: sans-serif; background: #fdfaf4; color: #2b2218; padding: 1rem; }
  h1 { color: #a35b3a; font-weight: 400; }
</style>`;

export const StudioLabDemo: React.FC = () => {
  const [code, setCode] = useState(INITIAL_CODE);
  const srcDoc = `<!doctype html><html lang="ar" dir="rtl"><body>${code}</body></html>`;

  return (
    <DemoFrame
      icon={<SquareCode className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />}
      title="محرر ومعاينة حية"
      note="نموذج مصغّر يحاكي فكرة المحرر، وليس المشروع نفسه."
    >
      <div className="grid md:grid-cols-2">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          dir="ltr"
          aria-label="الشيفرة"
          className="h-64 w-full resize-none bg-paper-50/70 p-5 font-mono text-sm leading-7 text-ink-900 outline-none"
        />
        <iframe
          title="المعاينة"
          sandbox=""
          srcDoc={srcDoc}
          className="h-64 w-full border-t border-line bg-white md:border-s md:border-t-0"
        />
      </div>
      <div className="flex justify-end border-t border-line px-6 py-3">
        <button type="button" onClick={() => setCode(INITIAL_CODE)} className="icon-btn" aria-label="إعادة الشيفرة">
          <RotateCcw className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </DemoFrame>
  );
};
