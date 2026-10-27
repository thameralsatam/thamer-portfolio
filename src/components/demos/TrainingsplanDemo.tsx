import React, { useState, useEffect } from 'react';
import { Dumbbell, Play, Pause, RotateCcw, Check } from 'lucide-react';

interface Exercise {
  id: string;
  nameDe: string;
  nameAr: string;
  sets: number;
  reps: number;
  weight: number;
  completed: boolean;
}

const initialExercises: Exercise[] = [
  { id: '1', nameDe: 'Bankdrücken', nameAr: 'ضغط الصدر بالبار (Bench Press)', sets: 4, reps: 8, weight: 70, completed: true },
  { id: '2', nameDe: 'Kniebeugen', nameAr: 'القرفصاء (Squats)', sets: 4, reps: 8, weight: 90, completed: false },
  { id: '3', nameDe: 'Klimmzüge', nameAr: 'العقلة (Pull-ups)', sets: 3, reps: 10, weight: 0, completed: false },
];

export const TrainingsplanDemo: React.FC<{ isArabic?: boolean }> = ({ isArabic = false }) => {
  const [exercises, setExercises] = useState<Exercise[]>(initialExercises);
  const [seconds, setSeconds] = useState(90);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (timerActive && seconds > 0) {
      interval = setInterval(() => setSeconds((s) => s - 1), 1000);
    } else if (seconds === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, seconds]);

  const toggleExercise = (id: string) => {
    setExercises((prev) =>
      prev.map((ex) => (ex.id === id ? { ...ex, completed: !ex.completed } : ex))
    );
  };

  const resetTimer = () => {
    setTimerActive(false);
    setSeconds(90);
  };

  const completedCount = exercises.filter((e) => e.completed).length;

  return (
    <div className="cream-card rounded-3xl overflow-hidden shadow-xs">
      {/* Top Header */}
      <div className="p-4 border-b border-[#e8ded1] flex items-center justify-between bg-[#faf5ec]/70">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#241e1a]">
          <Dumbbell className="w-4 h-4 text-[#9e5a26]" />
          <span>{isArabic ? 'جلسة التدريب التفاعلية' : 'Trainingsplan Session Monitor'}</span>
        </div>
        <span className="cream-pill-accent text-[11px] font-mono px-2.5 py-0.5">
          {completedCount}/{exercises.length} {isArabic ? 'مكتمل' : 'Erledigt'}
        </span>
      </div>

      {/* Routine Exercise List */}
      <div className="p-5 space-y-2.5 bg-[#fcf9f4]">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            onClick={() => toggleExercise(exercise.id)}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between text-xs ${
              exercise.completed
                ? 'bg-[#f7eedd] border-[#dfc7a7] text-[#7c4417]'
                : 'cream-card text-[#382e27] hover:border-[#caa98c]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  exercise.completed
                    ? 'bg-[#9e5a26] border-[#9e5a26] text-white'
                    : 'border-[#cfc4b4]'
                }`}
              >
                {exercise.completed && <Check className="w-3 h-3" />}
              </div>
              <span className="font-medium font-sans">
                {isArabic ? exercise.nameAr : exercise.nameDe}
              </span>
            </div>

            <div className="font-mono text-[11px] text-[#736356]">
              {exercise.sets} × {exercise.reps} {exercise.weight > 0 ? `@ ${exercise.weight}kg` : ''}
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Rest Interval Timer */}
      <div className="p-4 border-t border-[#ede4d7] bg-[#faf5ec]/50 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 font-mono">
          <span className="text-[#736356]">{isArabic ? 'مؤقت الراحة:' : 'Satzpause:'}</span>
          <span className="text-base font-bold text-[#241e1a] tabular-nums">
            {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? '0' : ''}{seconds % 60}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTimerActive(!timerActive)}
            className="cream-pill-primary inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono cursor-pointer"
          >
            {timerActive ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            <span>{timerActive ? (isArabic ? 'إيقاف' : 'Pause') : (isArabic ? 'بدء' : 'Start')}</span>
          </button>
          <button
            type="button"
            onClick={resetTimer}
            className="cream-pill p-1.5 text-[#736356] hover:text-[#241e1a] cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
