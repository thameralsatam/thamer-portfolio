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
                className={`absolute grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-sm transition-all duration-300 ${
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
