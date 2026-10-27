# الملف 3 من 8: المحتوى العربي (بدون أي نص نائب)

**نفّذ الخطوات حرفياً وبالترتيب. لا تغيّر أي كود ولا تضف أو تحذف شيئاً من عندك ولا تحسّن شيئاً. كل ملف أدناه: استبدل محتواه كاملاً بالكود المعطى (أنشئه إن لم يكن موجوداً). بعد الانتهاء اكتب فقط: تم الملف رقم كذا.**

استبدل الملفين التاليين.

## `src/i18n/translations.ts`

```ts
import { SupportedLanguage, ProjectStatusKey } from '../types';

export interface UIStrings {
  siteTitle: string;
  nav: { home: string; projects: string; about: string; contact: string };
  status: Record<ProjectStatusKey, string>;
  common: {
    skipToContent: string;
    mainNav: string;
    openMenu: string;
    closeMenu: string;
    backToProjects: string;
    liveDemo: string;
    sourceCode: string;
    interactiveStage: string;
    problem: string;
    solution: string;
    roleAndAiUsage: string;
    limitations: string;
    technologies: string;
    features: string;
    prevProject: string;
    nextProject: string;
    notFoundTitle: string;
    notFoundText: string;
  };
  home: {
    eyebrow: string;
    heroHeadline: string;
    heroDescription: string;
    exploreWork: string;
    getInTouch: string;
    featuredTitle: string;
    allProjects: string;
  };
  projectsPage: { eyebrow: string; title: string; description: string };
  aboutPage: {
    eyebrow: string;
    title: string;
    lead: string;
    bio1: string;
    bio2: string;
    stackHeading: string;
    stackGroups: { title: string; items: string[] }[];
    approachHeading: string;
    approachText: string;
    seekingText: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    githubLabel: string;
    locationLabel: string;
    locationValue: string;
    copy: string;
    copied: string;
  };
  footer: { copyright: string; tagline: string };
}

export const translations: Record<SupportedLanguage, UIStrings> = {
  ar: {
    siteTitle: 'ثامر السطام',
    nav: { home: 'الرئيسية', projects: 'المشاريع', about: 'عني', contact: 'التواصل' },
    status: {
      fontat: 'يعمل وظيفياً، ويحتاج إلى مراجعة أمنية وخصوصية قبل الاستخدام الموثوق',
      umayyad_mosque: 'نموذج أولي جاهز للتقييم، وليس موقعاً رسمياً',
      trainingsplan: 'مشروع شخصي، الحالة قيد التأكيد',
      studio_lab: 'قيد التطوير',
      arabic_font_tool: 'قيد التطوير',
    },
    common: {
      skipToContent: 'تخطَّ إلى المحتوى',
      mainNav: 'التنقل الرئيسي',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      backToProjects: 'كل المشاريع',
      liveDemo: 'زيارة الموقع',
      sourceCode: 'الشيفرة المصدرية',
      interactiveStage: 'جرّب بنفسك',
      problem: 'لماذا بنيته',
      solution: 'ما يفعله',
      roleAndAiUsage: 'دوري والذكاء الاصطناعي',
      limitations: 'حدود المشروع',
      technologies: 'التقنيات',
      features: 'ما يقدمه المشروع',
      prevProject: 'المشروع السابق',
      nextProject: 'المشروع التالي',
      notFoundTitle: 'لم أجد هذا المشروع',
      notFoundText: 'قد يكون الرابط خاطئاً. يمكنك العودة إلى قائمة المشاريع.',
    },
    home: {
      eyebrow: 'معرض أعمال',
      heroHeadline: 'أبني مواقع وتطبيقات، وأهتم بجمال الخط العربي.',
      heroDescription:
        'هذه مشاريعي كما هي: ما يعمل منها وما هو قيد التطوير، مع توضيح ما فعلته أنا وما ساعدني فيه الذكاء الاصطناعي.',
      exploreWork: 'استكشف المشاريع',
      getInTouch: 'تواصل معي',
      featuredTitle: 'مشاريع مختارة',
      allProjects: 'جميع المشاريع',
    },
    projectsPage: {
      eyebrow: 'الأعمال',
      title: 'المشاريع',
      description: 'كل ما بنيته حتى الآن، بما فيه ما لم يكتمل بعد. حالة كل مشروع مكتوبة بوضوح.',
    },
    aboutPage: {
      eyebrow: 'نبذة',
      title: 'عني',
      lead: 'أتعلم البرمجة بالبناء، وأكتب بصراحة ما أنجزته وما لم أنجزه.',
      bio1:
        'أنا ثامر. بدأت بصفحات HTML وCSS، ثم صرت أبني مواقع وتطبيقات حول أشياء تهمني: الخط العربي، والتمارين الرياضية، وتعلم البرمجة نفسه.',
      bio2:
        'أستعين بالذكاء الاصطناعي في كتابة جزء كبير من الشيفرة، وأنا من يقرر ما يُبنى وكيف يبدو وكيف يُستخدم. ولا أقدّم ما كتبه الذكاء الاصطناعي على أنه من كتابتي.',
      stackHeading: 'ما استخدمته فعلاً',
      stackGroups: [
        { title: 'الواجهات', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
        { title: 'البيانات والخوادم', items: ['Supabase', 'Python', 'Express', 'IndexedDB'] },
        { title: 'النشر والأدوات', items: ['Cloudflare Pages', 'Capacitor', 'GitHub', 'Google AI Studio'] },
      ],
      approachHeading: 'طريقتي في العمل',
      approachText:
        'أكتب في كل مشروع ما فعلته أنا، وما ساعد فيه الذكاء الاصطناعي، وما لم يكتمل بعد. أفضّل أن يكون الموقع صريحاً على أن يبدو أكمل مما هو.',
      seekingText: 'أبحث عن مكان تدريب مهني في تطوير التطبيقات في ألمانيا.',
    },
    contactPage: {
      eyebrow: 'التواصل',
      title: 'يسعدني أن أسمع منك',
      subtitle: 'للأسئلة عن المشاريع، أو فرص التدريب والتعاون.',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      githubLabel: 'GitHub',
      locationLabel: 'الموقع',
      locationValue: 'ألمانيا',
      copy: 'نسخ',
      copied: 'تم النسخ',
    },
    footer: {
      copyright: 'ثامر السطام',
      tagline: 'مواقع وتطبيقات وأدوات للخط العربي.',
    },
  },
};
```

## `src/data/projects.ts`

```ts
import { Project } from '../types';

/**
 * مصدر واحد لبيانات المشاريع.
 * القاعدة: لا نضيف ميزة أو رابطاً أو ادعاءً غير موجود في المرجع.
 * روابط run.app التجريبية وروابط المستودعات الخاصة لا تُنشر هنا.
 * أسماء ستوديو لاب وأداة الخطوط لم تُحسم نهائياً بعد.
 */
export const projects: Project[] = [
  {
    id: 'fontat',
    slug: 'fontat',
    statusKey: 'fontat',
    featured: true,
    technologies: ['React', 'TypeScript', 'Supabase', 'Python', 'Cloudflare Pages'],
    links: { liveUrl: 'https://fontat.pages.dev' },
    translations: {
      ar: {
        title: 'فونتات',
        category: 'منصة ويب · خطوط',
        summary:
          'منصة لاستكشاف الخطوط وتجربتها وإدارتها، تجمع مكتبة قابلة للبحث مع مساحة شخصية وأدوات لمعاينة خصائص الخطوط.',
        problem:
          'يحتاج المصمم إلى مكان واحد يجمع الخطوط الشائعة، ويسمح بمقارنتها وتجربتها في سياقات مختلفة قبل اختيار أحدها.',
        solution:
          'مكتبة خطوط مع بحث ومعاينة، وحساب شخصي لحفظ الخطوط وتنظيمها، وأدوات لتجربة خصائص الخط، منها بعض خصائص OpenType والخطوط المتغيرة. يعمل على الهاتف والحاسوب.',
        role:
          'تصورت المنصة والواجهة، وربطتها بقاعدة البيانات والتخزين، وصممت منطق إدارة البيانات والعلاقات، وربطت الموقع بخادم يعالج عمليات الخطوط. استعنت بالذكاء الاصطناعي (Google AI Studio) في كتابة الشيفرة. استغرق العمل عدة أشهر، وكانت قاعدة البيانات والأمان أصعب ما فيه عليّ كمبتدئ.',
        limitations:
          'المشروع يعمل وظيفياً، لكنه يحتاج إلى مراجعة أمنية وخصوصية قبل اعتباره جاهزاً للاستخدام الموثوق على نطاق أوسع. مستودعه خاص.',
        features: [
          'مكتبة خطوط مع استعراض وبحث ومعاينة',
          'حساب ومساحة شخصية للخطوط المحفوظة',
          'رفع الخطوط الخاصة بالمستخدم',
          'أدوات لتجربة خصائص الخط والخطوط المتغيرة',
          'صفحات تفصيلية للخطوط والحروف المنفردة',
        ],
      },
    },
  },
  {
    id: 'umayyad-mosque',
    slug: 'umayyad-mosque',
    statusKey: 'umayyad_mosque',
    featured: true,
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    links: { liveUrl: 'https://umayyad.pages.dev' },
    translations: {
      ar: {
        title: 'الجامع الأموي الكبير',
        category: 'نموذج أولي · موقع تعريفي',
        summary:
          'نموذج أولي لموقع تعريفي بالجامع الأموي في دمشق، يجمع التاريخ والعمارة والفسيفساء ودليل الزيارة بتجربة عربية وإنكليزية متجاوبة.',
        problem:
          'أعددته كمقترح موجّه إلى وزارة الأوقاف السورية (إدارة التحول الرقمي)، بهدف جمع المعلومات التاريخية والمعمارية ودليل الزيارة في تجربة واحدة واضحة.',
        solution:
          'موقع ثابت متجاوب باللغتين العربية والإنكليزية، يتبدل اتجاه الصفحة فيه تلقائياً. يضم شاشة رئيسية بمواقيت الصلاة، ومساراً تاريخياً من أربع حقب، وأقساماً للعمارة والفسيفساء، ومعرضاً من عشر صور، ودليلاً للزيارة. صُمم وفق الهوية البصرية للجهة المستهدفة وبخط قمرة.',
        role: 'صممت الموقع وكتبت المقترح بنفسي، واستعنت بالذكاء الاصطناعي في الشيفرة والصياغة.',
        limitations:
          'نموذج للتقييم وليس موقعاً رسمياً. تحتاج المعلومات التاريخية ومواقيت الصلاة وأوقات الزيارة وحقوق الصور إلى مراجعة من الجهة المعنية قبل أي اعتماد.',
        features: [
          'مواقيت الصلاة والصلاة القادمة بتوقيت دمشق',
          'مسار تاريخي من أربع حقب',
          'أقسام للعمارة والفسيفساء',
          'معرض من عشر صور',
          'دليل الزيارة',
        ],
      },
    },
  },
  {
    id: 'trainingsplan',
    slug: 'trainingsplan',
    statusKey: 'trainingsplan',
    featured: true,
    technologies: ['React', 'TypeScript', 'Capacitor', 'IndexedDB'],
    links: {},
    translations: {
      ar: {
        title: 'خطة التدريب',
        category: 'تطبيق شخصي · أندرويد',
        summary:
          'تطبيق لتنظيم التمارين الرياضية وخطط الأسبوع، مع حفظ الوسائط محلياً ومشغل صوتي مخصص للتدريب.',
        problem:
          'أردت تطبيقاً شخصياً يحفظ خطط التمارين ووسائطها على الجهاز نفسه، دون الاعتماد الدائم على الإنترنت.',
        solution:
          'واجهة هادئة تنظم أيام الأسبوع والتمارين والمجموعات والتكرارات، مع مكتبة تمارين بأسماء عربية وألمانية، وجلسة تدريب خطوة بخطوة بمؤقت راحة، ومشغل صوتي. بُني بواجهة React وغُلّف بـ Capacitor ليعمل كتطبيق أندرويد.',
        role:
          'الفكرة لي، وأنا من قرر المتطلبات وتجربة الاستخدام: الواجهة الهادئة، وتنظيم التمارين، ودعم الأسماء العربية والألمانية، والاعتماد على التخزين المحلي. كتب الذكاء الاصطناعي أجزاء كبيرة من الشيفرة وساعد في حل مشاكل البناء.',
        limitations:
          'حالة المشروع قيد التأكيد، ولا يتوفر له حالياً رابط عام ثابت. المزايا المذكورة لم تُختبر كلها بعد اختباراً نهائياً.',
        features: [
          'تنظيم الأسبوع وأيام التدريب والراحة',
          'مكتبة تمارين بأسماء عربية وألمانية',
          'صور وفيديوهات توضيحية تُحفظ محلياً',
          'جلسة تدريب بمؤقت راحة وتنبيه اهتزازي',
          'مشغل صوتي بمجلدات',
          'تصدير الخطة واستيرادها',
        ],
      },
    },
  },
  {
    id: 'studio-lab',
    slug: 'studio-lab',
    statusKey: 'studio_lab',
    featured: false,
    technologies: ['React', 'TypeScript', 'Monaco Editor', 'IndexedDB'],
    links: {},
    translations: {
      ar: {
        title: 'ستوديو لاب',
        category: 'أداة تعليمية · محرر',
        summary:
          'محرر لتعلّم HTML وCSS وJavaScript مع معاينة حية، صُمم ليكون أبسط وأنسب للهاتف، دون تسجيل أو إعلانات.',
        problem:
          'كثير من المحررات المتاحة لا توفر ما أحتاجه، أو تمتلئ بالإعلانات والتشتيت، خاصة عند استخدامها من الهاتف.',
        solution:
          'بيئة تضم عدة مشاريع بحفظ تلقائي على الجهاز، وشجرة ملفات، ومحرراً (Monaco) مع Emmet، ومعاينة حية داخل إطار يشبه الهاتف، وتصدير مساحة العمل واستيرادها.',
        role: 'صنعته لنفسي لأتعلم من خلاله. قررت ما يحتاجه المحرر وكيف يعمل على الهاتف، واستعنت بالذكاء الاصطناعي في كتابة الشيفرة.',
        limitations:
          'لا يزال قيد التطوير. ميزة الذكاء الاصطناعي غير مفعّلة، ولوحة عرض الأخطاء لم تكتمل، ولا يتوفر له حالياً رابط عام ثابت.',
        features: [
          'عدة مشاريع بحفظ تلقائي محلي',
          'شجرة ملفات ومجلدات',
          'محرر Monaco مع Emmet',
          'معاينة حية داخل إطار هاتف',
          'تصدير مساحة العمل واستيرادها بملف ZIP',
        ],
      },
    },
  },
  {
    id: 'arabic-font-tool',
    slug: 'arabic-font-tool',
    statusKey: 'arabic_font_tool',
    featured: false,
    technologies: ['React', 'TypeScript', 'opentype.js', 'Express'],
    links: {},
    translations: {
      ar: {
        title: 'أداة تصميم الخطوط العربية',
        category: 'أداة تصميم · خطوط',
        summary:
          'أداة قيد التطوير لتصميم المحارف العربية وضبط مقاييسها داخل المتصفح، مع معاينة النص وتصدير ملف خط.',
        problem: 'الحرف العربي يحتاج إلى أدوات تراعي خصوصيته، بدل الاكتفاء بأدوات رسم عامة.',
        solution:
          'محرر لرسم المحارف بمنحنيات بيزييه، مع أنماط للنقاط العربية، وضبط للمقاييس مثل خط الأساس والهوامش الجانبية، ومعاينة لنص عربي، وتصدير خط بصيغة TTF.',
        role: 'الفكرة والمتطلبات مني، وبُنيت بمساعدة الذكاء الاصطناعي في Google AI Studio.',
        limitations:
          'قيد التطوير. ملف الخط الناتج أساسي ولا يغطي جداول OpenType المتقدمة ولا التموضع المعقد للحروف، والمعاينة ليست محرك تشكيل عربي كاملاً. لا يتوفر حالياً رابط عام ثابت.',
        features: [
          'رسم المسارات بمنحنيات بيزييه',
          'أنماط النقاط العربية',
          'ضبط المقاييس والهوامش',
          'معاينة نص عربي',
          'تصدير ملف TTF',
          'حفظ المشاريع محلياً',
        ],
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
```

