import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export const StudioLabDemo: React.FC<{ isArabic?: boolean }> = ({ isArabic = false }) => {
  const [points, setPoints] = useState(8);
  const radius = 36;
  const [rotation, setRotation] = useState(45);
  const [complexity, setComplexity] = useState(3);

  const generatePolygon = () => {
    const coords: string[] = [];
    const center = 50;
    for (let i = 0; i < points; i++) {
      const angle = (i * 2 * Math.PI) / points + (rotation * Math.PI) / 180;
      const r = i % 2 === 0 ? radius : radius * (0.4 + complexity * 0.15);
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      coords.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return coords.join(' ');
  };

  return (
    <div className="cream-card rounded-3xl overflow-hidden shadow-xs">
      {/* Top Header */}
      <div className="p-4 border-b border-[#e8ded1] flex items-center justify-between bg-[#faf5ec]/70">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#241e1a]">
          <Sparkles className="w-4 h-4 text-[#9e5a26]" />
          <span>{isArabic ? 'ستوديو لاب: المحرك التوليدي' : 'Studio Lab: Generative Canvas'}</span>
        </div>
        <span className="cream-pill-accent text-[11px] font-mono px-2.5 py-0.5">
          Procedural SVG
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="p-6 bg-[#fcf9f4] flex items-center justify-center min-h-[200px]">
        <svg className="w-44 h-44 drop-shadow-sm" viewBox="0 0 100 100">
          {/* Ambient Guide */}
          <circle cx="50" cy="50" r={radius} fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#caa98c]/40" />
          
          {/* Dynamic Procedural Mesh */}
          <polygon
            points={generatePolygon()}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#9e5a26] transition-all duration-300"
          />
          <polygon
            points={generatePolygon()}
            fill="currentColor"
            fillOpacity="0.08"
            className="text-[#9e5a26]"
          />
        </svg>
      </div>

      {/* Interactive Controls */}
      <div className="p-4 border-t border-[#ede4d7] bg-[#faf5ec]/50 grid grid-cols-3 gap-3 text-xs font-mono">
        <div>
          <div className="flex justify-between text-[#736356] mb-1">
            <span>{isArabic ? 'النقاط' : 'Punkte'}</span>
            <span>{points}</span>
          </div>
          <input
            type="range"
            min="4"
            max="16"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
            className="w-full accent-[#9e5a26] cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-[#736356] mb-1">
            <span>{isArabic ? 'الدوران' : 'Rotation'}</span>
            <span>{rotation}°</span>
          </div>
          <input
            type="range"
            min="0"
            max="360"
            step="15"
            value={rotation}
            onChange={(e) => setRotation(Number(e.target.value))}
            className="w-full accent-[#9e5a26] cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-[#736356] mb-1">
            <span>{isArabic ? 'التعقيد' : 'Form'}</span>
            <span>{complexity}</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={complexity}
            onChange={(e) => setComplexity(Number(e.target.value))}
            className="w-full accent-[#9e5a26] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
