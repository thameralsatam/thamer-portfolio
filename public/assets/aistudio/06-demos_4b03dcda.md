# الملف 6 من 8: التجارب التفاعلية الخمس

**نفّذ الخطوات حرفياً وبالترتيب. لا تغيّر أي كود ولا تضف أو تحذف شيئاً من عندك ولا تحسّن شيئاً. كل ملف أدناه: استبدل محتواه كاملاً بالكود المعطى (أنشئه إن لم يكن موجوداً). بعد الانتهاء اكتب فقط: تم الملف رقم كذا.**

استبدل الملفات التالية (كلها بنفس إطار التصميم الجديد).

## `src/components/demos/FontatDemo.tsx`

```tsx
import React, { useState } from 'react';
import { Check, Copy, RotateCcw, Type } from 'lucide-react';
import { DemoFrame } from './DemoFrame';

type Family = 'kufam' | 'plex';

const DEFAULTS = { text: 'الكلمة الجميلة تحتاج إلى خط جميل', size: 40, weight: 400, lineHeight: 1.8, family: 'kufam' as Family };
const RANGES: Record<Family, { min: number; max: number }> = {
  kufam: { min: 400, max: 600 },
  plex: { min: 200, max: 500 },
};
const FAMILY_CSS: Record<Family, string> = {
  kufam: "'Kufam', sans-serif",
  plex: "'IBM Plex Sans Arabic', sans-serif",
};

export const FontatDemo: React.FC = () => {
  const [text, setText] = useState(DEFAULTS.text);
  const [size, setSize] = useState(DEFAULTS.size);
  const [weight, setWeight] = useState(DEFAULTS.weight);
  const [lineHeight, setLineHeight] = useState(DEFAULTS.lineHeight);
  const [family, setFamily] = useState<Family>(DEFAULTS.family);
  const [copied, setCopied] = useState(false);

  const range = RANGES[family];
  const effectiveWeight = Math.min(Math.max(weight, range.min), range.max);

  const reset = () => {
    setText(DEFAULTS.text);
    setSize(DEFAULTS.size);
    setWeight(DEFAULTS.weight);
    setLineHeight(DEFAULTS.lineHeight);
    setFamily(DEFAULTS.family);
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
      title="مختبر الخطوط"
      note="نموذج مصغّر يحاكي فكرة المنصة، وليس المنصة نفسها."
      footer="اضغط على النص لتعديله."
    >
      <div className="grid gap-6 px-6 py-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-ink-500">الخط</span>
          <select
            value={family}
            onChange={(e) => setFamily(e.target.value as Family)}
            className="mt-1 w-full rounded-full border border-line-strong bg-paper-50 px-4 py-2 text-ink-900"
          >
            <option value="kufam">كوفام</option>
            <option value="plex">آي بي إم بلكس عربي</option>
          </select>
        </label>
        {slider('الحجم', size, 20, 72, 1, setSize)}
        {slider('الوزن', effectiveWeight, range.min, range.max, 100, setWeight)}
        {slider('ارتفاع السطر', lineHeight, 1.2, 2.4, 0.1, setLineHeight)}
      </div>

      <div className="flex min-h-[11rem] items-center justify-center border-t border-line bg-paper-50/70 px-6 py-10">
        <div
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-label="نص التجربة"
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
          <span>{copied ? 'تم النسخ' : 'نسخ CSS'}</span>
        </button>
        <button type="button" onClick={reset} className="icon-btn" aria-label="إعادة الضبط">
          <RotateCcw className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </DemoFrame>
  );
};
```

## `src/components/demos/MosqueDemo.tsx`

```tsx
import React, { useState } from 'react';
import { ArrowUp, Compass } from 'lucide-react';
import { DemoFrame } from './DemoFrame';

interface Spot {
  id: string;
  name: string;
  period: string;
  description: string;
  x: number; // نسبة مئوية من العرض
  y: number; // نسبة مئوية من الارتفاع
}

const SPOTS: Spot[] = [
  {
    id: 'minaret',
    name: 'مئذنة العروس',
    period: 'أصلها من العصر الأموي',
    description: 'مئذنة الجدار الشمالي، وتمتاز ببدنها المربع المتدرج.',
    x: 50,
    y: 9,
  },
  {
    id: 'dome',
    name: 'قبة الخزنة',
    period: 'العصر العباسي',
    description: 'قبة مثمنة قائمة على أعمدة في الصحن، كانت لحفظ أموال بيت المال.',
    x: 26,
    y: 30,
  },
  {
    id: 'sahn',
    name: 'الصحن',
    period: 'العصر الأموي',
    description: 'فناء واسع تحيط به الأروقة، وتزين جدرانه فسيفساء نباتية.',
    x: 56,
    y: 38,
  },
  {
    id: 'hall',
    name: 'حرم الصلاة',
    period: 'العصر الأموي',
    description: 'قاعة الصلاة الكبرى بأروقة متوازية، تتوسطها قبة النسر.',
    x: 50,
    y: 86,
  },
];

const ACTIVE_FILL = 'rgba(163, 91, 58, 0.2)';
const IDLE_FILL = 'rgba(117, 104, 90, 0.07)';

export const MosqueDemo: React.FC = () => {
  const [activeId, setActiveId] = useState(SPOTS[2].id);
  const active = SPOTS.find((s) => s.id === activeId) ?? SPOTS[0];
  const fill = (id: string) => (id === activeId ? ACTIVE_FILL : IDLE_FILL);
  const stroke = (id: string) => (id === activeId ? '#a35b3a' : '#9b8d7b');

  return (
    <DemoFrame
      icon={<Compass className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />}
      title="مخطط الجامع"
      note="رسم تخطيطي مبسّط وليس مقياساً دقيقاً. اختر نقطة لقراءة نبذة عنها."
    >
      <div className="px-6 py-8">
        <div className="relative mx-auto aspect-[16/10] w-full max-w-xl">
          <svg viewBox="0 0 160 100" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
            <rect x="18" y="12" width="124" height="80" rx="2" stroke="#9b8d7b" strokeWidth="1" strokeDasharray="3 2" />
            <rect x="75" y="2" width="10" height="10" fill={fill('minaret')} stroke={stroke('minaret')} strokeWidth="1" style={{ transition: 'all .4s' }} />
            <rect x="26" y="20" width="108" height="38" fill={fill('sahn')} stroke={stroke('sahn')} strokeWidth="1" style={{ transition: 'all .4s' }} />
            <circle cx="42" cy="30" r="6" fill={fill('dome')} stroke={stroke('dome')} strokeWidth="1" style={{ transition: 'all .4s' }} />
            <rect x="18" y="62" width="124" height="30" fill={fill('hall')} stroke={stroke('hall')} strokeWidth="1" style={{ transition: 'all .4s' }} />
            <circle cx="80" cy="73" r="6" stroke="#9b8d7b" strokeWidth="0.8" />
          </svg>

          <div className="absolute start-2 top-2 flex items-center gap-1 text-xs text-ink-500">
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
            <span>شمال</span>
          </div>

          {SPOTS.map((spot, i) => {
            const selected = spot.id === activeId;
            return (
              <button
                key={spot.id}
                type="button"
                aria-pressed={selected}
                aria-label={spot.name}
                onClick={() => setActiveId(spot.id)}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className={`absolute grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-sm transition-all duration-300 ${
                  selected
                    ? 'scale-110 bg-ink-900 text-paper-50 shadow-lg'
                    : 'border border-line-strong bg-paper-50 text-ink-700 hover:scale-110'
                }`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      <div key={active.id} className="fade-swap border-t border-line px-6 py-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h4 className="font-display text-xl text-ink-900">{active.name}</h4>
          <span className="text-sm text-ink-500">{active.period}</span>
        </div>
        <p className="mt-2 text-ink-700">{active.description}</p>
      </div>
    </DemoFrame>
  );
};
```

## `src/components/demos/TrainingsplanDemo.tsx`

```tsx
import React, { useEffect, useState } from 'react';
import { Check, Dumbbell, Pause, Play, RotateCcw } from 'lucide-react';
import { DemoFrame } from './DemoFrame';

interface Exercise {
  id: string;
  name: string;
  detail: string;
  done: boolean;
}

const REST_SECONDS = 90;

const INITIAL: Exercise[] = [
  { id: '1', name: 'ضغط الصدر بالبار', detail: '4 × 8', done: true },
  { id: '2', name: 'القرفصاء', detail: '4 × 8', done: false },
  { id: '3', name: 'العقلة', detail: '3 × 10', done: false },
];

export const TrainingsplanDemo: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>(INITIAL);
  const [seconds, setSeconds] = useState(REST_SECONDS);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    if (seconds <= 0) {
      setRunning(false);
      return;
    }
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [running, seconds]);

  const toggle = (id: string) =>
    setExercises((list) => list.map((e) => (e.id === id ? { ...e, done: !e.done } : e)));

  const toggleTimer = () => {
    if (seconds === 0) {
      setSeconds(REST_SECONDS);
      setRunning(true);
      return;
    }
    setRunning((r) => !r);
  };

  const resetTimer = () => {
    setRunning(false);
    setSeconds(REST_SECONDS);
  };

  const doneCount = exercises.filter((e) => e.done).length;
  const progress = (doneCount / exercises.length) * 100;
  const clock = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

  return (
    <DemoFrame
      icon={<Dumbbell className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />}
      title="جلسة تدريب"
      note="نموذج مصغّر يحاكي فكرة التطبيق، وليس التطبيق نفسه."
    >
      <div className="px-6 pt-6">
        <div className="flex justify-between text-sm text-ink-500">
          <span>التقدم</span>
          <span>
            {doneCount} من {exercises.length}
          </span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-paper-300">
          <div
            className="h-full rounded-full bg-clay-600 transition-all duration-700"
            style={{ width: `${progress}%`, transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
          />
        </div>
      </div>

      <ul className="px-6 py-4">
        {exercises.map((e) => (
          <li key={e.id} className="border-b border-line last:border-b-0">
            <button
              type="button"
              onClick={() => toggle(e.id)}
              aria-pressed={e.done}
              className="flex w-full items-center justify-between gap-4 py-4 text-start"
            >
              <span className="flex items-center gap-4">
                <span
                  className={`grid h-6 w-6 place-items-center rounded-full border transition-all duration-300 ${
                    e.done ? 'border-clay-600 bg-clay-600 text-paper-50' : 'border-line-strong'
                  }`}
                >
                  {e.done && <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />}
                </span>
                <span className={`transition-colors ${e.done ? 'text-ink-500 line-through' : 'text-ink-900'}`}>{e.name}</span>
              </span>
              <span className="text-sm text-ink-500" dir="ltr">
                {e.detail}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between gap-4 border-t border-line px-6 py-5">
        <div>
          <p className="text-sm text-ink-500">مؤقت الراحة</p>
          <p className="font-display text-3xl tabular-nums text-ink-900" dir="ltr">
            {clock}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleTimer} className="btn btn-primary !px-5 !py-2 text-sm">
            {running ? <Pause className="h-4 w-4" strokeWidth={1.5} /> : <Play className="h-4 w-4" strokeWidth={1.5} />}
            <span>{running ? 'إيقاف' : 'ابدأ'}</span>
          </button>
          <button type="button" onClick={resetTimer} className="icon-btn" aria-label="إعادة المؤقت">
            <RotateCcw className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </DemoFrame>
  );
};
```

## `src/components/demos/StudioLabDemo.tsx`

```tsx
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
```

## `src/components/demos/ArabicFontToolDemo.tsx`

```tsx
import React, { useRef, useState } from 'react';
import { PenTool, RotateCcw } from 'lucide-react';
import { DemoFrame } from './DemoFrame';

type Point = { x: number; y: number };
type Handle = 'p1' | 'p2';

const W = 160;
const H = 100;
const P0: Point = { x: 26, y: 62 };
const P3: Point = { x: 134, y: 62 };
const START_P1: Point = { x: 54, y: 16 };
const START_P2: Point = { x: 106, y: 92 };

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

export const ArabicFontToolDemo: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [p1, setP1] = useState<Point>(START_P1);
  const [p2, setP2] = useState<Point>(START_P2);
  const [dragging, setDragging] = useState<Handle | null>(null);

  const setHandle = (h: Handle, p: Point) => (h === 'p1' ? setP1(p) : setP2(p));

  const pointFromEvent = (e: React.PointerEvent): Point => {
    const rect = svgRef.current!.getBoundingClientRect();
    return {
      x: Math.round(clamp(((e.clientX - rect.left) / rect.width) * W, 4, W - 4)),
      y: Math.round(clamp(((e.clientY - rect.top) / rect.height) * H, 4, H - 4)),
    };
  };

  const onKey = (h: Handle, current: Point) => (e: React.KeyboardEvent) => {
    const step = 4;
    const moves: Record<string, Point> = {
      ArrowLeft: { x: -step, y: 0 },
      ArrowRight: { x: step, y: 0 },
      ArrowUp: { x: 0, y: -step },
      ArrowDown: { x: 0, y: step },
    };
    const m = moves[e.key];
    if (!m) return;
    e.preventDefault();
    setHandle(h, { x: clamp(current.x + m.x, 4, W - 4), y: clamp(current.y + m.y, 4, H - 4) });
  };

  const reset = () => {
    setP1(START_P1);
    setP2(START_P2);
  };

  const d = `M ${P0.x} ${P0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${P3.x} ${P3.y}`;

  const handleDot = (h: Handle, p: Point, label: string) => (
    <circle
      cx={p.x}
      cy={p.y}
      r={dragging === h ? 5 : 4}
      fill="#a35b3a"
      stroke="#fdfaf4"
      strokeWidth="1.5"
      tabIndex={0}
      role="slider"
      aria-label={label}
      aria-valuetext={`${p.x}, ${p.y}`}
      style={{ cursor: 'grab', transition: 'r .2s', outline: 'none' }}
      onPointerDown={(e) => {
        (e.target as Element).setPointerCapture(e.pointerId);
        setDragging(h);
      }}
      onKeyDown={onKey(h, p)}
    />
  );

  return (
    <DemoFrame
      icon={<PenTool className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />}
      title="فاحص منحنيات بيزييه"
      note="اسحب النقطتين لتغيير شكل الخط. نموذج مصغّر يحاكي فكرة الأداة."
      footer={
        <span dir="ltr" className="inline-block">
          P1 ({p1.x}, {p1.y}) · P2 ({p2.x}, {p2.y})
        </span>
      }
    >
      <div className="relative px-6 py-8">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="mx-auto block w-full max-w-xl select-none rounded-2xl border border-line bg-paper-50/80"
          style={{ touchAction: 'none' }}
          onPointerMove={(e) => dragging && setHandle(dragging, pointFromEvent(e))}
          onPointerUp={() => setDragging(null)}
          onPointerCancel={() => setDragging(null)}
        >
          <line x1="0" y1="62" x2={W} y2="62" stroke="#e6dccb" strokeWidth="0.6" strokeDasharray="2 2" />
          <line x1={P0.x} y1={P0.y} x2={p1.x} y2={p1.y} stroke="#d6c8b0" strokeWidth="0.8" />
          <line x1={P3.x} y1={P3.y} x2={p2.x} y2={p2.y} stroke="#d6c8b0" strokeWidth="0.8" />
          <path d={d} fill="none" stroke="#2b2218" strokeOpacity="0.12" strokeWidth="9" strokeLinecap="round" />
          <path d={d} fill="none" stroke="#a35b3a" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx={P0.x} cy={P0.y} r="2.6" fill="#2b2218" />
          <circle cx={P3.x} cy={P3.y} r="2.6" fill="#2b2218" />
          {handleDot('p1', p1, 'نقطة التحكم الأولى')}
          {handleDot('p2', p2, 'نقطة التحكم الثانية')}
        </svg>
        <button type="button" onClick={reset} className="icon-btn absolute end-7 top-9" aria-label="إعادة المنحنى">
          <RotateCcw className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </DemoFrame>
  );
};
```

