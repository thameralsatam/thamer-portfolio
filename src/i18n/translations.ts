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
