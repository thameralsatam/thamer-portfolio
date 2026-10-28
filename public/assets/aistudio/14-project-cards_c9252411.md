# الملف 14: بطاقات المشاريع (تظهر بوضوح أنها أماكن يدخلها الزائر)

**نفّذ الخطوات حرفياً وبالترتيب. لا تغيّر أي كود غير المذكور ولا تحسّن شيئاً. بعد الانتهاء اكتب فقط: تم الملف رقم 14.**

## 1) `src/i18n/translations.ts` (نص زر البطاقة: تعديلان)

**أ) القديم:**
```
    notFoundText: string;
```
**الجديد:**
```
    notFoundText: string;
    viewProject: string;
```

**ب) القديم:**
```
      notFoundText: 'قد يكون الرابط خاطئاً. يمكنك العودة إلى قائمة المشاريع.',
```
**الجديد:**
```
      notFoundText: 'قد يكون الرابط خاطئاً. يمكنك العودة إلى قائمة المشاريع.',
      viewProject: 'افتح المشروع',
```

## 2) `src/components/common/ProjectRow.tsx` (استبدل الملف كاملاً)

```tsx
import React from 'react';
import { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from '../../router/Router';
import { StatusBadge } from './StatusBadge';
import { DirectionalArrow } from './DirectionalArrow';

interface ProjectRowProps {
  project: Project;
  index: number;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project, index }) => {
  const { language, t } = useLanguage();
  const loc = project.translations[language];

  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="card-top">
        <span className="meta">{loc.category}</span>
        <span className="card-index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="project-title">{loc.title}</h3>
      <p className="project-summary">{loc.summary}</p>
      <StatusBadge statusKey={project.statusKey} className="meta" />
      <div className="card-foot">
        <p className="tech-line">{project.technologies.join(' · ')}</p>
        <span className="card-cta">
          <span>{t.common.viewProject}</span>
          <DirectionalArrow direction="forward" className="cta-arrow h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};
```

## 3) ألصق في آخر `src/index.css` دون حذف شيء

```css
/* ===== الدفعة 4: بطاقات المشاريع وبطاقات التنقل ===== */
@layer components {
  .project-list { display: grid; gap: 1.25rem; border-bottom: 0; }

  .project-card {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    padding: 1.75rem 1.5rem;
    border: 1px solid var(--color-line);
    border-radius: 1.5rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.78), rgba(250, 244, 234, 0.85));
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 18px 40px -30px rgba(90, 62, 40, 0.4);
    transition: transform 0.5s var(--ease), box-shadow 0.5s var(--ease), border-color 0.5s var(--ease);
  }
  @media (min-width: 640px) {
    .project-card { padding: 2.25rem 2.5rem; gap: 1rem; }
  }
  .project-card .card-top { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
  .project-card .card-index {
    font-family: var(--font-display);
    font-size: 0.95rem;
    color: var(--color-ink-400);
    font-variant-numeric: tabular-nums;
  }
  .project-card .project-title { transition: color 0.4s var(--ease); }
  .project-card .status { font-size: 0.875rem; }
  .project-card .card-foot {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem 1.5rem;
    margin-top: 0.75rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--color-line);
  }
  .project-card .tech-line { flex: 1 1 14rem; }

  /* الزر: واضح من البداية أنه مكان يُدخل إليه */
  .project-card .card-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.55rem 1.1rem;
    border: 1px solid var(--color-line-strong);
    border-radius: 999px;
    font-weight: 400;
    font-size: 0.95rem;
    line-height: 1.4;
    color: var(--color-ink-900);
    background: rgba(255, 255, 255, 0.55);
    transition: background-color 0.4s var(--ease), color 0.4s var(--ease), border-color 0.4s var(--ease);
  }
  .project-card .cta-arrow { transition: transform 0.4s var(--ease); }

  @media (hover: hover) {
    .project-card:hover {
      transform: translateY(-4px);
      border-color: var(--color-line-strong);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 28px 52px -30px rgba(90, 62, 40, 0.5);
    }
    .project-card:hover .project-title { color: var(--color-clay-700); }
    .project-card:hover .card-cta { background: var(--color-ink-900); border-color: var(--color-ink-900); color: var(--color-paper-50); }
    .project-card:hover .cta-arrow { transform: translateX(calc(var(--shift) * 4px)); }
  }
  .project-card:active { transform: scale(0.99); }
  .project-card:focus-visible { border-color: var(--color-clay-600); }

  /* التنقل بين المشاريع: بطاقتان بدل نص مجرد */
  .pager {
    padding: 1.25rem 1.5rem;
    border: 1px solid var(--color-line);
    border-radius: 1.25rem;
    background: rgba(255, 255, 255, 0.4);
    transition: border-color 0.4s var(--ease), background-color 0.4s var(--ease);
  }
  .pager:hover { border-color: var(--color-line-strong); background: rgba(255, 255, 255, 0.75); }
}
```
