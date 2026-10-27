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
