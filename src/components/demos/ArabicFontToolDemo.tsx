import React, { useState } from 'react';
import { PenTool, RotateCcw } from 'lucide-react';

export const ArabicFontToolDemo: React.FC<{ isArabic?: boolean }> = ({ isArabic = false }) => {
  // Cubic Bezier curve control points: P0 (start), P1 (ctrl 1), P2 (ctrl 2), P3 (end)
  const [p1, setP1] = useState({ x: 25, y: 75 });
  const [p2, setP2] = useState({ x: 75, y: 25 });

  const p0 = { x: 15, y: 50 };
  const p3 = { x: 85, y: 50 };

  const pathData = `M ${p0.x} ${p0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`;

  const resetCurve = () => {
    setP1({ x: 25, y: 75 });
    setP2({ x: 75, y: 25 });
  };

  return (
    <div className="cream-card rounded-3xl overflow-hidden shadow-xs">
      {/* Header */}
      <div className="p-4 border-b border-[#e8ded1] flex items-center justify-between bg-[#faf5ec]/70">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#241e1a]">
          <PenTool className="w-4 h-4 text-[#9e5a26]" />
          <span>{isArabic ? 'فاحص منحنيات بيزييه للحرف العربي' : 'Bézier Glyph Inspector'}</span>
        </div>
        <button
          type="button"
          onClick={resetCurve}
          className="cream-pill p-1.5 text-[#736356] hover:text-[#241e1a] cursor-pointer"
          title="Reset"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Interactive Bezier Canvas */}
      <div className="p-6 bg-[#fcf9f4] flex flex-col items-center justify-center min-h-[200px]">
        <svg className="w-64 h-36 border border-[#e3d8c8] rounded-2xl bg-[#fbf8f2] shadow-inner" viewBox="0 0 100 100">
          {/* Grid lines */}
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-[#e0d6c8]" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-[#e0d6c8]" />

          {/* Control handle lines */}
          <line x1={p0.x} y1={p0.y} x2={p1.x} y2={p1.y} stroke="currentColor" strokeWidth="1" className="text-[#caa98c]" />
          <line x1={p3.x} y1={p3.y} x2={p2.x} y2={p2.y} stroke="currentColor" strokeWidth="1" className="text-[#caa98c]" />

          {/* Actual Bezier Curve */}
          <path d={pathData} fill="none" stroke="currentColor" strokeWidth="3" className="text-[#9e5a26]" />

          {/* End Points */}
          <circle cx={p0.x} cy={p0.y} r="2.5" fill="currentColor" className="text-[#241e1a]" />
          <circle cx={p3.x} cy={p3.y} r="2.5" fill="currentColor" className="text-[#241e1a]" />

          {/* Control Points */}
          <circle cx={p1.x} cy={p1.y} r="3" fill="currentColor" className="text-[#9e5a26] ring-2 ring-[#e8ded1]" />
          <circle cx={p2.x} cy={p2.y} r="3" fill="currentColor" className="text-[#9e5a26] ring-2 ring-[#e8ded1]" />
        </svg>

        <p className="mt-3 text-[11px] font-mono text-[#736356]">
          Cubic Bézier: ({p1.x}, {p1.y}) → ({p2.x}, {p2.y})
        </p>
      </div>

      {/* Control Sliders */}
      <div className="p-4 border-t border-[#ede4d7] bg-[#faf5ec]/50 grid grid-cols-2 gap-4 text-xs font-mono">
        <div>
          <div className="flex justify-between text-[#736356] mb-1">
            <span>{isArabic ? 'نقطة التحكم 1 (Y)' : 'Kontrollpunkt 1 (Y)'}</span>
            <span>{p1.y}</span>
          </div>
          <input
            type="range"
            min="10"
            max="90"
            value={p1.y}
            onChange={(e) => setP1({ ...p1, y: Number(e.target.value) })}
            className="w-full accent-[#9e5a26] cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-[#736356] mb-1">
            <span>{isArabic ? 'نقطة التحكم 2 (Y)' : 'Kontrollpunkt 2 (Y)'}</span>
            <span>{p2.y}</span>
          </div>
          <input
            type="range"
            min="10"
            max="90"
            value={p2.y}
            onChange={(e) => setP2({ ...p2, y: Number(e.target.value) })}
            className="w-full accent-[#9e5a26] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
