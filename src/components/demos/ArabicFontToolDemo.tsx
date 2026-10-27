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
