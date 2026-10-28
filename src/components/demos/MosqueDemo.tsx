import React, { useState } from 'react';
import { ArrowUp, Compass } from 'lucide-react';
import { DemoFrame } from './DemoFrame';
import { useLanguage } from '../../context/LanguageContext';

interface SpotText {
  name: string;
  period: string;
  description: string;
}

interface SpotConfig {
  id: string;
  x: number; // percentage width
  y: number; // percentage height
  translations: Record<'ar' | 'en' | 'de', SpotText>;
}

const STRINGS = {
  ar: {
    title: 'مخطط الجامع',
    note: 'رسم تخطيطي مبسّط وليس مقياساً دقيقاً. اختر نقطة لقراءة نبذة عنها.',
    north: 'شمال',
  },
  en: {
    title: 'Mosque Schematic',
    note: 'An illustrative schematic rather than a technical survey. Select a numbered spot to read details.',
    north: 'North',
  },
  de: {
    title: 'Moschee-Grundriss',
    note: 'Ein vereinfachtes Schema und keine millimetergenaue Bauzeichnung. Wähle einen Punkt für Details.',
    north: 'Nord',
  },
};

const SPOTS: SpotConfig[] = [
  {
    id: 'minaret',
    x: 50,
    y: 9,
    translations: {
      ar: {
        name: 'مئذنة العروس',
        period: 'أصلها من العصر الأموي',
        description: 'مئذنة الجدار الشمالي، وتمتاز ببدنها المربع المتدرج وتعد من أقدم مآذن المسجد.',
      },
      en: {
        name: 'Minaret of the Bride',
        period: 'Umayyad origins',
        description: 'The minaret on the northern wall, renowned for its square stepped tower and historical antiquity.',
      },
      de: {
        name: 'Braut-Minarett',
        period: 'Umayyadischen Ursprungs',
        description: 'Das Minarett der Nordmauer, bekannt für seinen quadratisch gestuften Turm und seine lange Geschichte.',
      },
    },
  },
  {
    id: 'dome',
    x: 26,
    y: 30,
    translations: {
      ar: {
        name: 'قبة الخزنة',
        period: 'العصر العباسي',
        description: 'قبة مثمنة قائمة على ثمانية أعمدة رخامية في الصحن، شُيدت لحفظ أموال بيت المال.',
      },
      en: {
        name: 'Dome of the Treasury',
        period: 'Abbasid era',
        description: 'An octagonal dome standing on eight marble columns in the courtyard, originally built to protect state funds.',
      },
      de: {
        name: 'Schatzhaus-Kuppel',
        period: 'Abbasidische Epoche',
        description: 'Achteckige Kuppel auf acht Marmorsäulen im Innenhof, ursprünglich zur sicheren Aufbewahrung öffentlicher Gelder errichtet.',
      },
    },
  },
  {
    id: 'sahn',
    x: 56,
    y: 38,
    translations: {
      ar: {
        name: 'الصحن الكبير',
        period: 'العصر الأموي',
        description: 'فناء مفتوح فسيح تحيط به الأروقة المعمدة المزخرفة بالفسيفساء النباتية والمعمارية الشهيرة.',
      },
      en: {
        name: 'The Great Courtyard',
        period: 'Umayyad era',
        description: 'A grand open courtyard flanked by columned porticoes decorated with iconic vegetative and architectural mosaics.',
      },
      de: {
        name: 'Der Große Innenhof',
        period: 'Umayyadische Epoche',
        description: 'Ein weitläufiger offener Hof, gesäumt von Säulenarkaden, die mit weltberühmten Pflanzen- und Stadtmosaiken geschmückt sind.',
      },
    },
  },
  {
    id: 'hall',
    x: 50,
    y: 86,
    translations: {
      ar: {
        name: 'حرم الصلاة',
        period: 'العصر الأموي',
        description: 'قاعة الصلاة الكبرى ذات الأروقة المتوازية، تتوسطها قبة النسر الشامخة ومقام النبي يحيى عليه السلام.',
      },
      en: {
        name: 'Prayer Sanctuary',
        period: 'Umayyad era',
        description: 'The monumental prayer hall featuring parallel colonnades, centered beneath the Eagle Dome and housing the shrine of John the Baptist.',
      },
      de: {
        name: 'Gebetssaal',
        period: 'Umayyadische Epoche',
        description: 'Monumentale Gebetshalle mit parallelen Säulenreihen, überwölbt von der majestätischen Adlerkuppel und der Johannes-Grabstätte.',
      },
    },
  },
];

const ACTIVE_FILL = 'rgba(163, 91, 58, 0.2)';
const IDLE_FILL = 'rgba(117, 104, 90, 0.07)';

export const MosqueDemo: React.FC = () => {
  const { language } = useLanguage();
  const s = STRINGS[language] || STRINGS.ar;

  const [activeId, setActiveId] = useState(SPOTS[2].id);
  const activeSpot = SPOTS.find((sp) => sp.id === activeId) ?? SPOTS[0];
  const active = activeSpot.translations[language] || activeSpot.translations.ar;

  const fill = (id: string) => (id === activeId ? ACTIVE_FILL : IDLE_FILL);
  const stroke = (id: string) => (id === activeId ? '#a35b3a' : '#9b8d7b');

  return (
    <DemoFrame
      icon={<Compass className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />}
      title={s.title}
      note={s.note}
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
            <span>{s.north}</span>
          </div>

          {SPOTS.map((spot, i) => {
            const selected = spot.id === activeId;
            const spotLoc = spot.translations[language] || spot.translations.ar;
            return (
              <button
                key={spot.id}
                type="button"
                aria-pressed={selected}
                aria-label={spotLoc.name}
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

      <div key={activeSpot.id} className="fade-swap border-t border-line px-6 py-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h4 className="font-display text-xl text-ink-900">{active.name}</h4>
          <span className="text-sm text-ink-500">{active.period}</span>
        </div>
        <p className="mt-2 text-ink-700">{active.description}</p>
      </div>
    </DemoFrame>
  );
};
