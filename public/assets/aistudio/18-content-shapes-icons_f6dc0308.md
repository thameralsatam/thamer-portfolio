# الملف 18: تهدئة الحركات + أيقونات + أشكال الأزرار + ترتيب الشاشات

**نفّذ الخطوات حرفياً وبالترتيب من 1 إلى 8. لا تغيّر أي شيء غير المذكور ولا تحسّن شيئاً من عندك. في التعديلات: ابحث عن "القديم" بالضبط واستبدله بـ"الجديد" (الفارغ يعني احذفه). إذا لم تجد النص "القديم" في أي تعديل في الخطوتين 1 و2 فتجاوزه بصمت وتابع. في النهاية اكتب فقط: تم الملف رقم 18.**

## 1) تنظيف الزخرفة (إن وُجدت)

احذف الملف `src/components/common/HeroOrnament.tsx` إن كان موجوداً. وفي `src/pages/HomePage.tsx` احذف السطرين التاليين إن وُجدا:
```
import { HeroOrnament } from '../components/common/HeroOrnament';
```
```
        <HeroOrnament />
```

## 2) تهدئة الحركات وتحسين الأداء (ألصق في آخر `src/index.css`)

```css
/* ===== الدفعة 7: تهدئة وأداء ===== */
body::after { display: none; }
.hero-ornament { display: none; }
.project-card::after { display: none; }
.hero-scroll { animation: none; }
.word { transform: none; animation: none; }

@layer components {
  .site-header.is-scrolled {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background: rgba(253, 250, 244, 0.95);
  }
  .hero-glow { animation: none; }
  .reveal { transform: translateY(8px); transition-duration: 0.6s; will-change: auto; }
}
```

## 3) أنشئ ملفاً جديداً `src/components/common/ProjectIcon.tsx`

```tsx
import React from 'react';
import { Dumbbell, Landmark, PenTool, SquareCode, Type, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  fontat: Type,
  'umayyad-mosque': Landmark,
  trainingsplan: Dumbbell,
  'studio-lab': SquareCode,
  'arabic-font-tool': PenTool,
};

/** أيقونة المشروع، وهي نفس أيقونة تجربته التفاعلية. */
export const ProjectIcon: React.FC<{ id: string }> = ({ id }) => {
  const Icon = ICONS[id] ?? Type;
  return <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />;
};
```

## 4) `src/components/common/ProjectRow.tsx`

**أ) القديم:**
```
import { DirectionalArrow } from './DirectionalArrow';
```
**الجديد:**
```
import { DirectionalArrow } from './DirectionalArrow';
import { ProjectIcon } from './ProjectIcon';
```

**ب) القديم:**
```
        <span className="meta">{loc.category}</span>
```
**الجديد:**
```
        <span className="flex items-center gap-3">
          <span className="icon-tile">
            <ProjectIcon id={project.id} />
          </span>
          <span className="meta">{loc.category}</span>
        </span>
```

## 5) `src/pages/HomePage.tsx` (شريط معلومات سريعة تحت المقدمة)

**أ) القديم:**
```
import { getFeaturedProjects } from '../data/projects';
```
**الجديد:**
```
import { getFeaturedProjects, projects } from '../data/projects';
```

**ب) القديم:**
```
      <section id="projects" className="scroll-mt-24">
```
**الجديد:**
```
      <section aria-label="نظرة سريعة" className="facts">
        <div className="fact">
          <span className="fact-num">{projects.length}</span>
          <span className="fact-label">مشاريع</span>
        </div>
        <div className="fact">
          <span className="fact-num">{new Set(projects.flatMap((p) => p.technologies)).size}</span>
          <span className="fact-label">تقنية مستخدمة</span>
        </div>
        <div className="fact">
          <span className="fact-num">{t.contactPage.locationValue}</span>
          <span className="fact-label">الموقع</span>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24">
```

## 6) `src/pages/AboutPage.tsx` (مجموعات التقنيات في بطاقات بأيقونات)

**أ) القديم:**
```
import { useLanguage } from '../context/LanguageContext';
```
**الجديد:**
```
import { Database, Layers, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
```

**ب) القديم:**
```
  const a = t.aboutPage;
```
**الجديد:**
```
  const a = t.aboutPage;
  const stackIcons = [Layers, Database, Rocket];
```

**ج) القديم:**
```
            {a.stackGroups.map((group) => (
              <div key={group.title}>
                <h3 className="heading mb-3">{group.title}</h3>
```
**الجديد:**
```
            {a.stackGroups.map((group, i) => {
              const Icon = stackIcons[i];
              return (
              <div key={group.title} className="surface p-6">
                <span className="icon-tile mb-4">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="heading mb-3">{group.title}</h3>
```

**د) القديم:**
```
                </ul>
              </div>
            ))}
```
**الجديد:**
```
                </ul>
              </div>
              );
            })}
```

## 7) `src/pages/ContactPage.tsx` (صفوف التواصل في بطاقات)

**أ) القديم:**
```
<div className="mt-14 border-b border-line sm:mt-20">
```
**الجديد:**
```
<div className="mt-14 space-y-4 sm:mt-20">
```

**ب) القديم:**
```
className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-8"
```
**الجديد:**
```
className="surface flex flex-wrap items-center justify-between gap-4 p-5 sm:p-7"
```

**ج) القديم:**
```
<Icon className="h-5 w-5 shrink-0 text-clay-600" strokeWidth={1.5} aria-hidden="true" />
```
**الجديد:**
```
<Icon className="icon-tile !h-11 !w-11 !p-3" strokeWidth={1.5} aria-hidden="true" />
```

**د) القديم:**
```
className="text-link text-sm"
```
**الجديد:**
```
className="btn btn-ghost !min-h-10 !px-4 !py-1.5 text-sm"
```

**هـ) القديم:**
```
<div className="flex items-center gap-5 border-t border-line py-8">
            <MapPin className="h-5 w-5 shrink-0 text-clay-600" strokeWidth={1.5} aria-hidden="true" />
```
**الجديد:**
```
<div className="surface flex items-center gap-5 p-5 sm:p-7">
            <MapPin className="icon-tile !h-11 !w-11 !p-3" strokeWidth={1.5} aria-hidden="true" />
```

## 8) أشكال العناصر (ألصق في آخر `src/index.css`) ثم الفحص

```css
/* ===== الدفعة 8: أشكال وأيقونات وترتيب ===== */
@layer components {
  /* مربع الأيقونة الموحد */
  .icon-tile {
    display: inline-grid;
    flex: none;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 0.875rem;
    color: var(--color-clay-700);
    background: var(--color-clay-50);
    border: 1px solid var(--color-clay-100);
  }

  /* الأزرار: زوايا مستديرة هادئة بدل الكبسولة */
  .btn { border-radius: 0.875rem; }
  .icon-btn { border-radius: 0.75rem; }
  .project-card .card-cta { border-radius: 0.75rem; }

  /* حالة المشروع داخل البطاقة: شارة واضحة بدل نص مبعثر */
  .project-card .status {
    align-self: flex-start;
    padding: 0.3rem 0.85rem;
    border-radius: 0.6rem;
    background: var(--color-clay-50);
    color: var(--color-clay-700);
    line-height: 1.7;
  }

  /* شريط المعلومات السريعة في الرئيسية */
  .facts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid var(--color-line);
    border-radius: 1.25rem;
    background: rgba(255, 255, 255, 0.45);
    overflow: hidden;
  }
  .fact {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    padding: 1.4rem 0.75rem;
    text-align: center;
  }
  .fact + .fact { border-inline-start: 1px solid var(--color-line); }
  .fact-num {
    font-family: var(--font-display);
    font-size: clamp(1.4rem, 3.4vw, 2rem);
    line-height: 1.4;
    color: var(--color-ink-900);
  }
  .fact-label { font-size: 0.875rem; line-height: 1.6; color: var(--color-ink-500); }
}
```

ثم شغّل `npm run lint` و`npm run build`. إذا ظهر خطأ برمجي أصلحه بأقل تغيير دون المساس بالتصميم أو النصوص، واذكر لي ما غيّرته حرفياً. ثم افتح الموقع وأخبرني بأي خطأ.
