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
    language: string;
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
    viewProject: string;
  };
  home: {
    eyebrow: string;
    heroHeadline: string;
    heroDescription: string;
    exploreWork: string;
    getInTouch: string;
    featuredTitle: string;
    allProjects: string;
    stats: { aria: string; projects: string; live: string; inProgress: string };
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
    githubLabel: string;
    locationLabel: string;
    locationValue: string;
    copy: string;
    copied: string;
  };
  footer: { copyright: string; tagline: string; heading: string; text: string; top: string; topLabel: string };
}

const stackItems = [
  ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  ['Supabase', 'Python', 'Express', 'IndexedDB'],
  ['Cloudflare Pages', 'Capacitor', 'GitHub', 'Google AI Studio'],
];

export const translations: Record<SupportedLanguage, UIStrings> = {
  ar: {
    siteTitle: 'ثامر السطام',
    nav: { home: 'الرئيسية', projects: 'المشاريع', about: 'عني', contact: 'التواصل' },
    status: {
      fontat: 'يعمل وظيفياً، ويحتاج مراجعة أمنية قبل الاعتماد عليه',
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
      language: 'اللغة',
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
      viewProject: 'افتح المشروع',
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
      stats: { aria: 'نظرة سريعة', projects: 'مشاريع', live: 'منشورة على الإنترنت', inProgress: 'قيد التطوير' },
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
        { title: 'الواجهات', items: stackItems[0] },
        { title: 'البيانات والخوادم', items: stackItems[1] },
        { title: 'النشر والأدوات', items: stackItems[2] },
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
      githubLabel: 'GitHub',
      locationLabel: 'الموقع',
      locationValue: 'ألمانيا',
      copy: 'نسخ',
      copied: 'تم النسخ',
    },
    footer: {
      copyright: 'ثامر السطام',
      tagline: 'مواقع وتطبيقات وأدوات للخط العربي.',
      heading: 'عندك سؤال أو فرصة؟',
      text: 'يسعدني أن أسمع منك عن المشاريع، أو عن فرص التدريب والتعاون.',
      top: 'الأعلى',
      topLabel: 'العودة إلى الأعلى',
    },
  },
  en: {
    siteTitle: 'Thamer Alsatam',
    nav: { home: 'Home', projects: 'Projects', about: 'About', contact: 'Contact' },
    status: {
      fontat: 'Works, but needs a security review before you rely on it',
      umayyad_mosque: 'Prototype ready for review, not an official site',
      trainingsplan: 'Personal project, status to be confirmed',
      studio_lab: 'In development',
      arabic_font_tool: 'In development',
    },
    common: {
      skipToContent: 'Skip to content',
      mainNav: 'Main navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
      backToProjects: 'All projects',
      liveDemo: 'Visit site',
      sourceCode: 'Source code',
      interactiveStage: 'Try it yourself',
      problem: 'Why I built it',
      solution: 'What it does',
      roleAndAiUsage: 'My role and AI',
      limitations: 'Limitations',
      technologies: 'Technologies',
      features: 'What it offers',
      prevProject: 'Previous project',
      nextProject: 'Next project',
      notFoundTitle: "I couldn't find this project",
      notFoundText: 'The link may be wrong. You can go back to the projects list.',
      viewProject: 'Open project',
    },
    home: {
      eyebrow: 'Portfolio',
      heroHeadline: 'I build websites and apps, and I care about beautiful Arabic type.',
      heroDescription:
        'These are my projects as they are: what works and what is still in development, with a clear account of what I did myself and where AI helped.',
      exploreWork: 'Explore projects',
      getInTouch: 'Get in touch',
      featuredTitle: 'Selected projects',
      allProjects: 'All projects',
      stats: { aria: 'At a glance', projects: 'Projects', live: 'Published online', inProgress: 'In development' },
    },
    projectsPage: {
      eyebrow: 'Work',
      title: 'Projects',
      description: 'Everything I have built so far, including what is not finished yet. Each project’s status is stated clearly.',
    },
    aboutPage: {
      eyebrow: 'About',
      title: 'About me',
      lead: 'I learn programming by building, and I write honestly what I achieved and what I did not.',
      bio1:
        'I’m Thamer. I started with HTML and CSS pages, then began building websites and apps around things I care about: Arabic typography, workouts, and learning to code itself.',
      bio2:
        'I use AI to write a large part of the code, and I decide what gets built, how it looks and how it is used. I do not present what AI wrote as my own writing.',
      stackHeading: 'What I have actually used',
      stackGroups: [
        { title: 'Interfaces', items: stackItems[0] },
        { title: 'Data and servers', items: stackItems[1] },
        { title: 'Deployment and tools', items: stackItems[2] },
      ],
      approachHeading: 'How I work',
      approachText:
        'In every project I write what I did myself, where AI helped, and what is not finished yet. I prefer the site to be honest rather than look more complete than it is.',
      seekingText: 'I am looking for a vocational training place (Ausbildung) in application development in Germany.',
    },
    contactPage: {
      eyebrow: 'Contact',
      title: 'I would love to hear from you',
      subtitle: 'For questions about the projects, or training and collaboration opportunities.',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      locationLabel: 'Location',
      locationValue: 'Germany',
      copy: 'Copy',
      copied: 'Copied',
    },
    footer: {
      copyright: 'Thamer Alsatam',
      tagline: 'Websites, apps and tools for Arabic type.',
      heading: 'Have a question or an opportunity?',
      text: 'I would be glad to hear from you about projects, or about training and collaboration opportunities.',
      top: 'Top',
      topLabel: 'Back to top',
    },
  },
  de: {
    siteTitle: 'Thamer Alsatam',
    nav: { home: 'Start', projects: 'Projekte', about: 'Über mich', contact: 'Kontakt' },
    status: {
      fontat: 'Funktioniert, braucht aber vor dem Einsatz eine Sicherheitsprüfung',
      umayyad_mosque: 'Prototyp zur Begutachtung, keine offizielle Website',
      trainingsplan: 'Privatprojekt, Status noch zu bestätigen',
      studio_lab: 'In Entwicklung',
      arabic_font_tool: 'In Entwicklung',
    },
    common: {
      skipToContent: 'Zum Inhalt springen',
      mainNav: 'Hauptnavigation',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      language: 'Sprache',
      backToProjects: 'Alle Projekte',
      liveDemo: 'Website besuchen',
      sourceCode: 'Quellcode',
      interactiveStage: 'Probier es selbst aus',
      problem: 'Warum ich es gebaut habe',
      solution: 'Was es macht',
      roleAndAiUsage: 'Meine Rolle und die KI',
      limitations: 'Grenzen des Projekts',
      technologies: 'Technologien',
      features: 'Was das Projekt bietet',
      prevProject: 'Vorheriges Projekt',
      nextProject: 'Nächstes Projekt',
      notFoundTitle: 'Projekt nicht gefunden',
      notFoundText: 'Der Link ist vielleicht falsch. Du kannst zur Projektliste zurückkehren.',
      viewProject: 'Projekt öffnen',
    },
    home: {
      eyebrow: 'Portfolio',
      heroHeadline: 'Ich baue Websites und Apps und liebe schöne arabische Schrift.',
      heroDescription:
        'Das sind meine Projekte, wie sie sind: was funktioniert und was noch in Entwicklung ist, mit klarer Angabe, was ich selbst gemacht habe und wobei mir KI geholfen hat.',
      exploreWork: 'Projekte ansehen',
      getInTouch: 'Kontakt aufnehmen',
      featuredTitle: 'Ausgewählte Projekte',
      allProjects: 'Alle Projekte',
      stats: { aria: 'Auf einen Blick', projects: 'Projekte', live: 'Online veröffentlicht', inProgress: 'In Entwicklung' },
    },
    projectsPage: {
      eyebrow: 'Arbeiten',
      title: 'Projekte',
      description: 'Alles, was ich bisher gebaut habe, auch das, was noch nicht fertig ist. Der Status jedes Projekts ist klar angegeben.',
    },
    aboutPage: {
      eyebrow: 'Info',
      title: 'Über mich',
      lead: 'Ich lerne Programmieren durch Bauen und schreibe ehrlich, was ich geschafft habe und was nicht.',
      bio1:
        'Ich bin Thamer. Ich habe mit HTML- und CSS-Seiten angefangen und baue inzwischen Websites und Apps rund um Dinge, die mir wichtig sind: arabische Schrift, Training und das Programmierenlernen selbst.',
      bio2:
        'Ich nutze KI, um einen großen Teil des Codes zu schreiben, entscheide aber selbst, was gebaut wird, wie es aussieht und wie es benutzt wird. Was die KI geschrieben hat, gebe ich nicht als meine eigene Arbeit aus.',
      stackHeading: 'Was ich tatsächlich verwendet habe',
      stackGroups: [
        { title: 'Oberflächen', items: stackItems[0] },
        { title: 'Daten und Server', items: stackItems[1] },
        { title: 'Veröffentlichung und Werkzeuge', items: stackItems[2] },
      ],
      approachHeading: 'Wie ich arbeite',
      approachText:
        'Bei jedem Projekt schreibe ich, was ich selbst gemacht habe, wobei mir KI geholfen hat und was noch nicht fertig ist. Mir ist eine ehrliche Website lieber als eine, die vollständiger wirkt, als sie ist.',
      seekingText: 'Ich suche einen Ausbildungsplatz in der Anwendungsentwicklung in Deutschland.',
    },
    contactPage: {
      eyebrow: 'Kontakt',
      title: 'Ich freue mich, von dir zu hören',
      subtitle: 'Für Fragen zu den Projekten oder für Ausbildungs- und Kooperationsmöglichkeiten.',
      emailLabel: 'E-Mail',
      githubLabel: 'GitHub',
      locationLabel: 'Standort',
      locationValue: 'Deutschland',
      copy: 'Kopieren',
      copied: 'Kopiert',
    },
    footer: {
      copyright: 'Thamer Alsatam',
      tagline: 'Websites, Apps und Werkzeuge für arabische Schrift.',
      heading: 'Hast du eine Frage oder eine Chance?',
      text: 'Ich freue mich, von dir zu hören, über Projekte oder über Ausbildungs- und Kooperationsmöglichkeiten.',
      top: 'Nach oben',
      topLabel: 'Zurück nach oben',
    },
  },
};
