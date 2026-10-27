import React, { useState } from 'react';
import { Compass, MapPin } from 'lucide-react';

interface LandmarkHotspot {
  id: string;
  nameDe: string;
  nameAr: string;
  descriptionDe: string;
  descriptionAr: string;
  period: string;
  coords: { x: number; y: number };
}

const hotspots: LandmarkHotspot[] = [
  {
    id: 'sahn',
    nameDe: 'Der Große Innenhof (Sahn)',
    nameAr: 'الصحن الكبير',
    descriptionDe: 'Weitläufiger Arkadenhof (122m × 50m) mit zweigeschossigen Säulenreihen und Marmorpflasterung.',
    descriptionAr: 'فناء واسع بأروقة مزدوجة وأرضيات رخامية مزينة بفسيفساء نباتية بديعة.',
    period: '706–715 n. Chr. (Umayyaden)',
    coords: { x: 50, y: 55 },
  },
  {
    id: 'dome',
    nameDe: 'Schatzkuppel (Qubbat al-Khazna)',
    nameAr: 'قبة الخزنة',
    descriptionDe: 'Achteckiger Pavillon auf acht korinthischen Säulen, errichtet als Staatsschatzkammer.',
    descriptionAr: 'قبة مثمنة على ثمانية أعمدة كورنثية لحفظ أموال بيت المال.',
    period: '789 n. Chr. (Abbasiden)',
    coords: { x: 28, y: 40 },
  },
  {
    id: 'minaret',
    nameDe: 'Brautminarett (Madhanat al-Arus)',
    nameAr: 'مئذنة العروس',
    descriptionDe: 'Ältestes Minarett des Bauwerks an der Nordwand mit quadratischem Grundriss.',
    descriptionAr: 'أقدم مآذن الجامع في الجدار الشمالي وتمتاز ببدنها المربع المتدرج.',
    period: 'Frühes 8. Jahrhundert',
    coords: { x: 50, y: 15 },
  },
  {
    id: 'prayer-hall',
    nameDe: 'Dreischiffige Gebetshalle',
    nameAr: 'حرم الصلاة ثلاثي الأجنحة',
    descriptionDe: '136 Meter lange Haupthalle mit monumentaler Adlerkuppel und antikem Säulenbestand.',
    descriptionAr: 'قاعة صلاة ضخمة بثلاثة أروقة متوازية تتوسطها قبة النسر الشهيرة.',
    period: '715 n. Chr.',
    coords: { x: 50, y: 85 },
  },
];

export const MosqueDemo: React.FC<{ isArabic?: boolean }> = ({ isArabic = false }) => {
  const [activeSpot, setActiveSpot] = useState<LandmarkHotspot>(hotspots[0]);

  return (
    <div className="cream-card rounded-3xl overflow-hidden shadow-xs">
      {/* Top Bar */}
      <div className="p-4 border-b border-[#e8ded1] flex items-center justify-between bg-[#faf5ec]/70">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#241e1a]">
          <Compass className="w-4 h-4 text-[#9e5a26]" />
          <span>{isArabic ? 'مخطط النموذج الأولي المعماري' : 'Architektur-Prototyp Explorer'}</span>
        </div>
        <span className="cream-pill-accent text-[11px] font-mono px-2.5 py-0.5">
          SVG Vector Map
        </span>
      </div>

      {/* SVG Interactive Ground Plan */}
      <div className="p-6 bg-[#fcf9f4] relative flex items-center justify-center">
        <div className="w-full max-w-md aspect-[16/10] relative rounded-2xl border border-[#e3d8c8] bg-[#fbf8f2] p-4 shadow-inner">
          {/* Compass Rose */}
          <div className="absolute top-3 right-3 text-[10px] font-mono text-[#8a7b6f] flex flex-col items-center">
            <span>N</span>
            <span className="text-xs">↑</span>
          </div>

          {/* SVG Mosque Layout Plan */}
          <svg className="w-full h-full text-[#8a7b6f]" viewBox="0 0 100 100" fill="none">
            {/* Outer Perimeter Walls */}
            <rect x="15" y="10" width="70" height="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 1" />
            
            {/* North Arcade */}
            <line x1="15" y1="25" x2="85" y2="25" stroke="currentColor" strokeWidth="1" />
            
            {/* Courtyard Sahn Area */}
            <rect x="22" y="30" width="56" height="40" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.8" />
            
            {/* Prayer Hall Area */}
            <rect x="15" y="75" width="70" height="15" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
            
            {/* Transverse Nave & Eagle Dome */}
            <rect x="44" y="70" width="12" height="20" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="50" cy="80" r="4" stroke="currentColor" strokeWidth="1" />
          </svg>

          {/* Interactive Clickable Hotspots */}
          {hotspots.map((spot) => {
            const isSelected = activeSpot.id === spot.id;
            return (
              <button
                key={spot.id}
                type="button"
                onClick={() => setActiveSpot(spot)}
                style={{ left: `${spot.coords.x}%`, top: `${spot.coords.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer ${
                  isSelected
                    ? 'cream-pill-primary scale-125 shadow-md ring-2 ring-[#caa98c] z-20'
                    : 'cream-pill text-[#52453c] hover:scale-110 z-10'
                }`}
                title={isArabic ? spot.nameAr : spot.nameDe}
              >
                <MapPin className="w-3 h-3" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Landmark Details Pane */}
      <div className="p-5 border-t border-[#ede4d7] bg-[#faf5ec]/50 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-display font-bold text-sm text-[#241e1a] flex items-center gap-2">
            <span>{isArabic ? activeSpot.nameAr : activeSpot.nameDe}</span>
          </h4>
          <span className="cream-pill text-[11px] font-mono px-2.5 py-0.5 text-[#736356]">
            {activeSpot.period}
          </span>
        </div>
        <p className="font-sans text-xs text-[#52453c] leading-relaxed">
          {isArabic ? activeSpot.descriptionAr : activeSpot.descriptionDe}
        </p>
      </div>
    </div>
  );
};
