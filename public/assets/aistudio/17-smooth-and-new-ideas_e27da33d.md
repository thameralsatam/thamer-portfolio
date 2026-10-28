# الملف 17: سكرول سلس، إزالة الزخرفة، أفكار جديدة

**نفّذ الخطوات حرفياً وبالترتيب من 1 إلى 5. لا تغيّر أي شيء غير المذكور ولا تحسّن شيئاً. في التعديلات: ابحث عن "القديم" بالضبط واستبدله بـ"الجديد" (الفارغ يعني احذفه). في النهاية اكتب فقط: تم الملف رقم 17.**

## 1) إزالة الزخرفة

احذف الملف `src/components/common/HeroOrnament.tsx`.

في `src/pages/HomePage.tsx`:

احذف هذا السطر:
```
import { HeroOrnament } from '../components/common/HeroOrnament';
```
احذف هذا السطر:
```
        <HeroOrnament />
```

## 2) سلاسة السكرول (ألصق في آخر `src/index.css`)

```css
/* ===== الدفعة 6: سلاسة وأداء ===== */
/* إزالة ملمس الورق: كان يثقل الرسم أثناء التمرير */
body::after { display: none; }
.hero-ornament { display: none; }

@layer components {
  /* الرأس: خلفية شبه معتمة بدل التمويه الثقيل */
  .site-header.is-scrolled {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background: rgba(253, 250, 244, 0.95);
  }
  /* توهج الخلفية ثابت بدل الحركة الدائمة */
  .hero-glow { animation: none; }
  /* لا طبقات حركة دائمة على كل عنصر */
  .reveal { will-change: auto; }
}
```

## 3) انتقال ناعم بين الصفحات

في `src/router/Router.tsx`:

**أ) القديم:**
```
import React, { createContext, useContext, useEffect, useState } from 'react';
```
**الجديد:**
```
import React, { createContext, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
```

**ب) القديم:**
```
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
```
**الجديد:**
```
    const apply = () => {
      setPath(to);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    const doc = document as unknown as { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      doc.startViewTransition(() => flushSync(apply));
    } else {
      apply();
    }
```

ثم ألصق في آخر `src/index.css`:
```css
/* انتقال الصفحات: تلاشٍ متقاطع هادئ */
::view-transition-old(root) { animation: 0.28s var(--ease) both vtOut; }
::view-transition-new(root) { animation: 0.45s var(--ease) both vtIn; }
@keyframes vtOut { to { opacity: 0; } }
@keyframes vtIn { from { opacity: 0; } }
.page-enter { animation: none; }
```

## 4) حركة الرئيسية: العنوان يخفت برفق عند التمرير + شارة "أبحث عن تدريب"

في `src/pages/HomePage.tsx`:

**أ) القديم:**
```
<section className="relative pt-4 sm:pt-12">
```
**الجديد:**
```
<section className="hero-scroll relative pt-4 sm:pt-12">
```

**ب) القديم:**
```
        <Reveal delay={270}>
```
**الجديد:**
```
        <Reveal delay={230}>
          <p className="seeking-chip">
            <span className="pulse-dot" aria-hidden="true" />
            <span>{t.aboutPage.seekingText}</span>
          </p>
        </Reveal>
        <Reveal delay={270}>
```

ثم ألصق في آخر `src/index.css`:
```css
@layer components {
  .seeking-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    margin-top: 2rem;
    padding: 0.4rem 1.1rem;
    border: 1px solid var(--color-line-strong);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.8;
    color: var(--color-ink-700);
  }
  .pulse-dot {
    position: relative;
    flex: none;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 999px;
    background: var(--color-clay-600);
  }
  .pulse-dot::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: inherit;
    animation: pulseRing 2.6s ease-out infinite;
  }
}
@keyframes pulseRing { from { transform: scale(1); opacity: 0.5; } to { transform: scale(3.2); opacity: 0; } }

/* خفوت العنوان مع التمرير: بلا جافاسكربت، فلا تعليق */
@supports (animation-timeline: scroll()) {
  .hero-scroll {
    animation: heroOut linear both;
    animation-timeline: scroll(root);
    animation-range: 0 60vh;
  }
  @keyframes heroOut { to { opacity: 0.3; transform: translateY(-28px); } }
}
@media (prefers-reduced-motion: reduce) {
  .pulse-dot::after { animation: none; opacity: 0; }
  .hero-scroll { animation: none; }
}
```

## 5) الفحص (للفحص فقط)

شغّل `npm run lint` ثم `npm run build`. إذا ظهر خطأ برمجي أصلحه بأقل تغيير دون المساس بالتصميم أو النصوص، واذكر لي ما غيّرته حرفياً. ثم افتح الموقع وأخبرني بأي خطأ.
