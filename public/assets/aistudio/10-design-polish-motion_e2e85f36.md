# الملف 10: صقل المقاييس والمحاذاة والحركة

**نفّذ الخطوات حرفياً. لا تغيّر أي كود موجود ولا تحذف شيئاً ولا تحسّن شيئاً من عندك. المطلوب فقط: افتح `src/index.css` وألصق الكتلة التالية في آخر الملف تماماً، بعد آخر سطر فيه، كما هي. بعد الانتهاء اكتب فقط: تم الملف رقم 10.**

```css
/* ===== صقل التصميم والحركة (الدفعة 2) ===== */
@layer components {
  /* سلّم الطباعة: أصغر قليلاً وأكثر اتزاناً، وأسطر أقصر للقراءة */
  .display { font-size: clamp(2.25rem, 6vw, 4rem); line-height: 1.4; letter-spacing: -0.005em; }
  .title { font-size: clamp(1.75rem, 3.8vw, 2.5rem); }
  .lead { font-size: clamp(1.1rem, 2vw, 1.3rem); line-height: 2; max-width: 36rem; }
  .prose-ar { font-size: 1.0625rem; line-height: 2.1; max-width: 38rem; }
  .project-title { font-size: clamp(1.5rem, 3vw, 2rem); }
  .pager .pager-title { font-size: clamp(1.25rem, 2.6vw, 1.5rem); }
  p, li { text-wrap: pretty; }

  /* حالة المشروع: النقطة تتبع السطر الأول، والنص الطويل يلتف بترتيب */
  .status { align-items: flex-start; max-width: 36rem; line-height: 1.8; }
  .status .dot { margin-top: 0.7em; }
  .meta { row-gap: 0.5rem; }

  /* إيقاع المسافات في قائمة المشاريع */
  .project-row { padding: 2.5rem 0; gap: 1rem 2rem; }
  .project-row .index { padding-top: 0.75rem; min-width: 2ch; }
  .project-row .arrow { margin-top: 0.75rem; }
  @media (max-width: 639px) {
    .project-row { padding: 2rem 0; }
    .project-row::before { inset: 0.25rem -0.75rem; }
  }

  /* أزرار أريح للمس */
  .btn { min-height: 3rem; justify-content: center; }
  .icon-btn { min-width: 2.75rem; min-height: 2.75rem; }

  /* الظهور: أنعم وأبطأ قليلاً، وبدون ارتجاف */
  .reveal {
    transform: translateY(18px);
    transition: opacity 1s var(--ease), transform 1s var(--ease);
    will-change: opacity, transform;
  }
  .reveal.is-visible { will-change: auto; }

  /* خط العنوان الصغير يُرسم عند الظهور */
  .reveal .eyebrow::before {
    transform: scaleX(0);
    transform-origin: var(--origin);
    transition: transform 0.9s var(--ease) 0.15s;
  }
  .reveal.is-visible .eyebrow::before { transform: scaleX(1); }

  /* انتقال الصفحة: ظهور مع صعود خفيف */
  .page-enter { animation: pageInUp 0.6s var(--ease) both; }

  /* التجارب: تفاعل أنعم عند اللمس والتركيز */
  .surface { transition: box-shadow 0.5s var(--ease); }
  .surface:focus-within {
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 28px 56px -32px rgba(90, 62, 40, 0.45);
  }

  /* الأجهزة اللمسية: لا تأثيرات تعلق بعد اللمس */
  @media (hover: none) {
    .project-row::before { display: none; }
    .project-row:active { background: rgba(248, 238, 230, 0.6); }
    .btn-primary:hover { transform: none; }
  }
}

@keyframes pageInUp {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .reveal .eyebrow::before { transform: none; }
  .page-enter { animation: none; }
}
```
