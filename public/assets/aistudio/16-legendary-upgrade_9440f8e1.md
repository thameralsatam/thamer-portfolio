# الملف 16: الارتقاء الكبير (هوية الزخرفة، حركة العنوان، ضوء البطاقات، ملمس الورق)

**نفّذ الخطوات حرفياً وبالترتيب من 1 إلى 7. لا تغيّر أي كود غير المذكور ولا تضف ولا تحذف ولا تحسّن شيئاً من عندك. بعد كل قسم لا تكتب شيئاً. في النهاية اكتب فقط: تم الملف رقم 16.**

## 1) أنشئ ملفاً جديداً `src/components/common/Words.tsx`

```tsx
import React from 'react';

interface WordsProps {
  text: string;
  delay?: number;
}

/** يُظهر كل كلمة بصعود ناعم من خلف قناع، بالتتابع. */
export const Words: React.FC<WordsProps> = ({ text, delay = 120 }) => {
  const words = text.split(' ');
  return (
    <span aria-label={text}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="word-mask" aria-hidden="true">
            <span className="word" style={{ animationDelay: `${delay + i * 80}ms` }}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </span>
  );
};
```

## 2) أنشئ ملفاً جديداً `src/components/common/HeroOrnament.tsx`

```tsx
import React from 'react';

/** نجمة هندسية ثمانية (طابع إسلامي هادئ) ترسم نفسها ثم تدور ببطء شديد. */
export const HeroOrnament: React.FC = () => (
  <svg className="hero-ornament" viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <g className="ornament-lines" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
      <circle cx="100" cy="100" r="92" pathLength="1" vectorEffect="non-scaling-stroke" />
      <path d="M100 10 L190 100 L100 190 L10 100 Z" pathLength="1" vectorEffect="non-scaling-stroke" />
      <path d="M163.6 36.4 L163.6 163.6 L36.4 163.6 L36.4 36.4 Z" pathLength="1" vectorEffect="non-scaling-stroke" />
      <circle cx="100" cy="100" r="60" pathLength="1" vectorEffect="non-scaling-stroke" />
      <circle cx="100" cy="100" r="34" pathLength="1" vectorEffect="non-scaling-stroke" />
    </g>
  </svg>
);
```

## 3) `src/pages/HomePage.tsx` (ثلاثة تعديلات: ابحث عن "القديم" بالضبط واستبدله)

**أ) القديم:**
```
import { DirectionalArrow } from '../components/common/DirectionalArrow';
```
**الجديد:**
```
import { DirectionalArrow } from '../components/common/DirectionalArrow';
import { Words } from '../components/common/Words';
import { HeroOrnament } from '../components/common/HeroOrnament';
```

**ب) القديم:**
```
<div className="hero-glow" aria-hidden="true" />
```
**الجديد:**
```
<div className="hero-glow" aria-hidden="true" />
        <HeroOrnament />
```

**ج) القديم:**
```
<h1 className="display mt-8 max-w-3xl">{t.home.heroHeadline}</h1>
```
**الجديد:**
```
<h1 className="display mt-8 max-w-3xl">
            <Words text={t.home.heroHeadline} />
          </h1>
```

## 4) `src/components/common/ProjectRow.tsx` (تعديل واحد: ضوء يتبع المؤشر)

**القديم:**
```
<Link to={`/projects/${project.slug}`} className="project-card">
```
**الجديد:**
```
<Link
      to={`/projects/${project.slug}`}
      className="project-card"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
      }}
    >
```

## 5) `src/pages/ProjectDetailPage.tsx` (تعديل واحد: العناوين الجانبية تلتصق أثناء القراءة)

**القديم:**
```
<h2 className="heading mb-3 md:mb-0">{block.label}</h2>
```
**الجديد:**
```
<h2 className="heading mb-3 md:sticky md:top-28 md:mb-0 md:self-start">{block.label}</h2>
```

## 6) ألصق في آخر `src/index.css` دون حذف شيء

```css
/* ===== الدفعة 5: الارتقاء الكبير ===== */

/* ملمس ورق خفيف جداً فوق الصفحة كلها */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
  opacity: 0.05;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

@layer components {
  /* عنوان الرئيسية: كل كلمة تصعد من خلف قناع */
  .word-mask {
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    padding-block: 0.22em;
    margin-block: -0.22em;
  }
  .word {
    display: inline-block;
    transform: translateY(120%);
    animation: wordUp 1s var(--ease) forwards;
  }

  /* الزخرفة الهندسية في الرئيسية */
  .hero-ornament {
    position: absolute;
    inset-inline-end: -9rem;
    top: -4rem;
    z-index: -1;
    width: min(30rem, 90vw);
    height: auto;
    color: var(--color-clay-600);
    opacity: 0.32;
    pointer-events: none;
    animation: ornamentSpin 160s linear infinite;
  }
  .hero-ornament .ornament-lines > * {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ornamentDraw 3.2s var(--ease) forwards;
  }
  .hero-ornament .ornament-lines > *:nth-child(2) { animation-delay: 0.25s; }
  .hero-ornament .ornament-lines > *:nth-child(3) { animation-delay: 0.5s; }
  .hero-ornament .ornament-lines > *:nth-child(4) { animation-delay: 0.75s; }
  .hero-ornament .ornament-lines > *:nth-child(5) { animation-delay: 1s; }

  /* ضوء ناعم يتبع المؤشر داخل البطاقة */
  .project-card { position: relative; isolation: isolate; overflow: hidden; }
  .project-card::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: radial-gradient(22rem circle at var(--mx, 50%) var(--my, 0%), rgba(214, 150, 110, 0.18), transparent 60%);
    opacity: 0;
    transition: opacity 0.5s var(--ease);
    pointer-events: none;
  }
  @media (hover: hover) {
    .project-card:hover::after { opacity: 1; }
  }
}

@keyframes wordUp { to { transform: none; } }
@keyframes ornamentSpin { to { transform: rotate(360deg); } }
@keyframes ornamentDraw { to { stroke-dashoffset: 0; } }

@media (prefers-reduced-motion: reduce) {
  .word { transform: none; animation: none; }
  .hero-ornament { animation: none; }
  .hero-ornament .ornament-lines > * { stroke-dashoffset: 0; animation: none; }
}
```

## 7) الفحص (للفحص فقط)

شغّل `npm run lint` ثم `npm run build`. إذا ظهر خطأ برمجي أصلحه بأقل تغيير دون المساس بالتصميم أو النصوص، واذكر لي ما غيّرته حرفياً. ثم افتح الصفحة الرئيسية وأخبرني بما تراه.
