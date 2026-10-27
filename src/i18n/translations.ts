import { SupportedLanguage, ProjectStatusKey } from '../types';

export interface UIStrings {
  siteTitle: string;
  siteSubtitle: string;
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  status: Record<ProjectStatusKey, string>;
  common: {
    viewAllProjects: string;
    featuredProjects: string;
    allProjects: string;
    projectDetails: string;
    technologies: string;
    roleAndAiUsage: string;
    limitations: string;
    problem: string;
    solution: string;
    features: string;
    links: string;
    liveDemo: string;
    sourceCode: string;
    watchVideo: string;
    statusLabel: string;
    backToProjects: string;
    placeholderNote: string;
    themeToggle: string;
    languageToggle: string;
    lightTheme: string;
    darkTheme: string;
    systemTheme: string;
    inProgressNotice: string;
    noEmojiPolicyNote: string;
    interactiveStage: string;
    switchProject: string;
    prevProject: string;
    nextProject: string;
  };
  home: {
    heroGreeting: string;
    heroHeadline: string;
    heroDescription: string;
    exploreWork: string;
    getInTouch: string;
    highlightProjects: string;
    highlightStack: string;
    highlightDesign: string;
  };
  projectsPage: {
    title: string;
    description: string;
    filterAll: string;
    searchPlaceholder: string;
    emptyPlaceholder: string;
    projectsCount: string;
  };
  aboutPage: {
    title: string;
    roleHeadline: string;
    bioParagraph1: string;
    bioParagraph2: string;
    skillsHeading: string;
    philosophyHeading: string;
    philosophyText: string;
  };
  contactPage: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    githubLabel: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
    formCopied: string;
    formSuccess: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}

export const translations: Record<SupportedLanguage, UIStrings> = {
  de: {
    siteTitle: 'Thamer Alsatam',
    siteSubtitle: 'Software-Entwicklung & Web-Design',
    nav: {
      home: 'Startseite',
      projects: 'Projekte',
      about: 'Über mich',
      contact: 'Kontakt',
    },
    status: {
      fontat: 'Funktional einsatzbereit, benötigt weitere Sicherheits- und Datenschutzüberprüfung',
      umayyad_mosque: 'Prototyp bereit zur Evaluierung, keine offizielle Website',
      trainingsplan: 'Persönliches Projekt, Status noch zu bestätigen',
      studio_lab: 'In Entwicklung',
      arabic_font_tool: 'In Entwicklung',
    },
    common: {
      viewAllProjects: 'Alle Projekte ansehen',
      featuredProjects: 'Ausgewählte Projekte',
      allProjects: 'Projektkatalog',
      projectDetails: 'Projektdetails',
      technologies: 'Technologien',
      roleAndAiUsage: 'Meine Rolle und KI-Einsatz',
      limitations: 'Aktuelle Einschränkungen',
      problem: 'Problemstellung',
      solution: 'Lösung',
      features: 'Verifizierte Funktionen',
      links: 'Links und Ressourcen',
      liveDemo: 'Live-Demo ansehen',
      sourceCode: 'Quellcode auf GitHub',
      watchVideo: 'Demo-Video ansehen',
      statusLabel: 'Projektstatus',
      backToProjects: 'Zurück zur Übersicht',
      placeholderNote: 'Platzhalter: Inhalte werden aus der Referenzdatei bestätigt.',
      themeToggle: 'Erscheinungsbild anpassen',
      languageToggle: 'Sprache wechseln',
      lightTheme: 'Hell',
      darkTheme: 'Dunkel',
      systemTheme: 'System',
      inProgressNotice: 'Inhalte im Aufbau',
      noEmojiPolicyNote: 'Strukturierte und fokussierte Präsentation.',
      interactiveStage: 'Interaktive Projektbühne',
      switchProject: 'Projekt wählen',
      prevProject: 'Vorheriges Projekt',
      nextProject: 'Nächstes Projekt',
    },
    home: {
      heroGreeting: 'Thamer Alsatam',
      heroHeadline: 'Digitale Produkte mit klarer Struktur und hoher Präzision.',
      heroDescription:
        'Software-Entwickler mit Schwerpunkt auf modernen Web-Technologien, skalierbaren Benutzeroberflächen und innovativen Prototypen.',
      exploreWork: 'Projekte entdecken',
      getInTouch: 'Kontakt aufnehmen',
      highlightProjects: '5 Webanwendungen & Prototypen',
      highlightStack: 'TypeScript, React & Modern UI',
      highlightDesign: 'Fokussiertes und ruhiges Design',
    },
    projectsPage: {
      title: 'Projekte & Prototypen',
      description:
        'Vollständige Übersicht aller Arbeiten von Web-Anwendungen über interaktive Prototypen bis hin zu typografischen Werkzeugen.',
      filterAll: 'Alle',
      searchPlaceholder: 'Nach Projekten oder Technologien suchen...',
      emptyPlaceholder: 'Keine passenden Projekte gefunden.',
      projectsCount: 'Projekte im Portfolio',
    },
    aboutPage: {
      title: 'Über mich',
      roleHeadline: 'Software-Entwickler mit Leidenschaft für sauberen Code und visuelle Klarheit',
      bioParagraph1:
        'Ich entwickle moderne Webanwendungen mit Fokus auf Leistung, intuitive Benutzerführung und durchdachte Softwarearchitektur. Meine Arbeit verbindet logische Code-Strukturen mit ruhigem, ausdrucksstarkem Design.',
      bioParagraph2:
        'Im Entwicklungsprozess nutze ich moderne Entwicklungswerkzeuge und KI-Unterstützung transparent und zielgerichtet, um Ideen effizient in funktionale, hochqualitative Software umzusetzen.',
      skillsHeading: 'Technische Kompetenzen',
      philosophyHeading: 'Arbeitsphilosophie',
      philosophyText:
        'Minimalismus ohne Kompromisse bei der Funktionalität: Jedes Element hat einen klaren Zweck. Hohe Barrierefreiheit, saubere Typografie und robuste Architektur stehen immer im Mittelpunkt.',
    },
    contactPage: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Offen für spannende Softwareprojekte, Zusammenarbeit und neue Herausforderungen.',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
      locationLabel: 'Standort',
      locationValue: 'Deutschland',
      githubLabel: 'GitHub Profil',
      formName: 'Ihr Name',
      formEmail: 'Ihre E-Mail-Adresse',
      formSubject: 'Betreff',
      formMessage: 'Ihre Nachricht',
      formSubmit: 'Nachricht senden',
      formCopied: 'In die Zwischenablage kopiert',
      formSuccess: 'Vielen Dank! Ihre Nachricht wird vorbereitet.',
    },
    footer: {
      copyright: 'Thamer Alsatam. Alle Rechte vorbehalten.',
      tagline: 'Entwicklung strukturierter Weblösungen und Software-Prototypen.',
    },
  },

  ar: {
    siteTitle: 'ثامر السطام',
    siteSubtitle: 'تطوير الويب وهندسة البرمجيات',
    nav: {
      home: 'الرئيسية',
      projects: 'المشاريع',
      about: 'عني',
      contact: 'التواصل',
    },
    status: {
      fontat: 'يعمل وظيفياً، بانتظار مراجعة إضافية للأمان والخصوصية',
      umayyad_mosque: 'نموذج أولي جاهز للتقييم، ليس موقعاً رسمياً',
      trainingsplan: 'مشروع شخصي، الحالة قيد التأكيد',
      studio_lab: 'قيد التطوير',
      arabic_font_tool: 'قيد التطوير',
    },
    common: {
      viewAllProjects: 'عرض جميع المشاريع',
      featuredProjects: 'مشاريع مختارة',
      allProjects: 'دليل المشاريع',
      projectDetails: 'تفاصيل المشروع',
      technologies: 'التقنيات المستخدمة',
      roleAndAiUsage: 'دوري واستخدام الذكاء الاصطناعي بنزاهة',
      limitations: 'القيود الحالية',
      problem: 'المشكلة',
      solution: 'الحل',
      features: 'المزايا المؤكدة',
      links: 'الروابط والمراجع',
      liveDemo: 'معاينة الموقع الحي',
      sourceCode: 'الكود المصدري على GitHub',
      watchVideo: 'مشاهدة الفيديو التوضيحي',
      statusLabel: 'حالة المشروع',
      backToProjects: 'العودة إلى المشاريع',
      placeholderNote: 'عنصر نائب: يتم استكمال المحتوى طبقاً للملف المرجعي المعتمد.',
      themeToggle: 'تغيير المظهر',
      languageToggle: 'اختيار اللغة',
      lightTheme: 'فاتح',
      darkTheme: 'داكن',
      systemTheme: 'تلقائي',
      inProgressNotice: 'قيد الإعداد والتحديث',
      noEmojiPolicyNote: 'عرض هادئ ومنظم يركز على المحتوى التقني.',
      interactiveStage: 'المسرح التفاعلي للمشاريع',
      switchProject: 'اختر المشروع',
      prevProject: 'المشروع السابق',
      nextProject: 'المشروع التالي',
    },
    home: {
      heroGreeting: 'ثامر السطام',
      heroHeadline: 'بناء منتجات رقمية بهندسة واضحة وتصميم متقن.',
      heroDescription:
        'مطور برمجيات أركز على تقنيات الويب الحديثة، بناء واجهات مستخدم رصينة، وتحويل الأفكار إلى نماذج أولية عملية وتطبيقات متكاملة.',
      exploreWork: 'استكشاف الأعمال',
      getInTouch: 'تواصل معي',
      highlightProjects: '5 تطبيقات ويب ونماذج أولية',
      highlightStack: 'TypeScript و React وواجهات عصرية',
      highlightDesign: 'تصميم هادئ يركز على الجوهر',
    },
    projectsPage: {
      title: 'المشاريع والنماذج الأولية',
      description:
        'استعراض شامل لجميع الأعمال البرمجية، متضمنة تطبيقات الويب المتكاملة والنماذج الأولية وأدوات الخط العربي.',
      filterAll: 'الكل',
      searchPlaceholder: 'ابحث باسم المشروع أو التقنية...',
      emptyPlaceholder: 'لم يتم العثور على مشاريع مطابقة.',
      projectsCount: 'مشاريع في المعرض',
    },
    aboutPage: {
      title: 'عني',
      roleHeadline: 'مطور برمجيات يجمع بين جودة الكود والوضوح البصري',
      bioParagraph1:
        'أعمل على تطوير تطبيقات الويب الحديثة مع التركيز على السرعة، سهولة الاستخدام، والبنية البرمجية النظيفة. أسعى دائماً لأن يكون كل سطر برمجي مكتوباً بعناية وكل عنصر في الواجهة له وظيفة واضحة.',
      bioParagraph2:
        'أعتمد في عملي على أدوات التطوير المتقدمة وتقنيات الذكاء الاصطناعي بشكل شفاف وواعٍ كأداة تسريع مساعدة، مع الفهم التام للأسس المنطقية والتقنية لكل ما يتم بناؤه.',
      skillsHeading: 'المهارات التقنية',
      philosophyHeading: 'فلسفة العمل',
      philosophyText:
        'البساطة الهادفة دون المساس بالوظيفة: تباين مريح للعين، طباعة عربية ولاتينية عالية الدقة، وتجربة تصفح سريعة وخالية من التشتت والزخرفة الزائدة.',
    },
    contactPage: {
      title: 'التواصل المباشر',
      subtitle: 'متاح للنقاش حول المشاريع البرمجية، الأفكار التقنية، وفرص التعاون.',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      locationLabel: 'الموقع',
      locationValue: 'ألمانيا',
      githubLabel: 'حساب GitHub',
      formName: 'الاسم',
      formEmail: 'البريد الإلكتروني',
      formSubject: 'الموضوع',
      formMessage: 'نص الرسالة',
      formSubmit: 'إرسال الرسالة',
      formCopied: 'تم النسخ إلى الحافظة',
      formSuccess: 'شكراً لك! سيتم فتح بريدك لإرسال الرسالة.',
    },
    footer: {
      copyright: 'ثامر السطام. جميع الحقوق محفوظة.',
      tagline: 'تطوير الحلول البرمجية وتطبيقات الويب الحديثة.',
    },
  },

  en: {
    siteTitle: 'Thamer Alsatam',
    siteSubtitle: 'Software Development & Web Engineering',
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    status: {
      fontat: 'Works functionally, needs further security and privacy review',
      umayyad_mosque: 'Prototype ready for evaluation, not an official site',
      trainingsplan: 'Personal project, status to be confirmed',
      studio_lab: 'In development',
      arabic_font_tool: 'In development',
    },
    common: {
      viewAllProjects: 'View all projects',
      featuredProjects: 'Featured Projects',
      allProjects: 'Projects Catalog',
      projectDetails: 'Project Details',
      technologies: 'Technologies',
      roleAndAiUsage: 'My Role & AI Usage',
      limitations: 'Current Limitations',
      problem: 'Problem',
      solution: 'Solution',
      features: 'Verified Features',
      links: 'Links & Resources',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code on GitHub',
      watchVideo: 'Demo Video',
      statusLabel: 'Project Status',
      backToProjects: 'Back to Projects',
      placeholderNote: 'Placeholder: Content to be confirmed from the master reference file.',
      themeToggle: 'Toggle theme',
      languageToggle: 'Change language',
      lightTheme: 'Light',
      darkTheme: 'Dark',
      systemTheme: 'System',
      inProgressNotice: 'Under development',
      noEmojiPolicyNote: 'Focused, calm, and distraction-free presentation.',
      interactiveStage: 'Interactive Project Stage',
      switchProject: 'Select Project',
      prevProject: 'Previous Project',
      nextProject: 'Next Project',
    },
    home: {
      heroGreeting: 'Thamer Alsatam',
      heroHeadline: 'Building digital products with architectural clarity and precision.',
      heroDescription:
        'Software developer focused on modern web architectures, scalable interfaces, and high-impact digital prototypes.',
      exploreWork: 'Explore Projects',
      getInTouch: 'Get in Touch',
      highlightProjects: '5 Web Applications & Prototypes',
      highlightStack: 'TypeScript, React & Modern UI',
      highlightDesign: 'Calm, Purposeful Design',
    },
    projectsPage: {
      title: 'Projects & Prototypes',
      description:
        'Complete directory of software work spanning web applications, cultural prototypes, and typography tools.',
      filterAll: 'All',
      searchPlaceholder: 'Search by project or technology...',
      emptyPlaceholder: 'No matching projects found.',
      projectsCount: 'Projects in portfolio',
    },
    aboutPage: {
      title: 'About Me',
      roleHeadline: 'Software developer dedicated to code quality and visual clarity',
      bioParagraph1:
        'I build modern web applications focusing on performance, intuitive workflows, and clean software architecture. My work balances structured logic with calm, expressive design.',
      bioParagraph2:
        'Throughout the engineering cycle, I leverage modern tooling and disciplined AI assistance to translate concepts into resilient, maintainable codebases.',
      skillsHeading: 'Technical Expertise',
      philosophyHeading: 'Design & Code Philosophy',
      philosophyText:
        'Simplicity without compromising depth: Every element serves a clear functional purpose with high accessibility, meticulous typography, and robust modularity.',
    },
    contactPage: {
      title: 'Get in Touch',
      subtitle: 'Open for software projects, technical collaboration, and engineering opportunities.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      locationValue: 'Germany',
      githubLabel: 'GitHub Profile',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSubmit: 'Send Message',
      formCopied: 'Copied to clipboard',
      formSuccess: 'Thank you! Preparing your message draft.',
    },
    footer: {
      copyright: 'Thamer Alsatam. All rights reserved.',
      tagline: 'Engineering structured web solutions and digital prototypes.',
    },
  },

  tr: {
    siteTitle: 'Thamer Alsatam',
    siteSubtitle: 'Yazılım Geliştirme & Web Mühendisliği',
    nav: {
      home: 'Ana Sayfa',
      projects: 'Projeler',
      about: 'Hakkımda',
      contact: 'İletişim',
    },
    status: {
      fontat: 'İşlevsel olarak çalışıyor, ek güvenlik ve gizlilik incelemesi gerekiyor',
      umayyad_mosque: 'Değerlendirmeye hazır prototip, resmi bir web sitesi değildir',
      trainingsplan: 'Kişisel proje, durumu onaylanacak',
      studio_lab: 'Geliştirme aşamasında',
      arabic_font_tool: 'Geliştirme aşamasında',
    },
    common: {
      viewAllProjects: 'Tüm projeleri görüntüle',
      featuredProjects: 'Öne Çıkan Projeler',
      allProjects: 'Proje Kataloğu',
      projectDetails: 'Proje Detayları',
      technologies: 'Teknolojiler',
      roleAndAiUsage: 'Rolüm ve Yapay Zeka Kullanımı',
      limitations: 'Mevcut Kısıtlamalar',
      problem: 'Problem',
      solution: 'Çözüm',
      features: 'Doğrulanmış Özellikler',
      links: 'Bağlantılar ve Kaynaklar',
      liveDemo: 'Canlı Önizleme',
      sourceCode: 'GitHub Kaynak Kodu',
      watchVideo: 'Tanıtım Videosu',
      statusLabel: 'Proje Durumu',
      backToProjects: 'Tüm Projelere Dön',
      placeholderNote: 'Yer tutucu: İçerik ana referans dosyasından onaylanacaktır.',
      themeToggle: 'Görünüm modu',
      languageToggle: 'Dil seçimi',
      lightTheme: 'Açık',
      darkTheme: 'Koyu',
      systemTheme: 'Sistem',
      inProgressNotice: 'Geliştirme aşamasında',
      noEmojiPolicyNote: 'Sade ve dikkat dağıtmayan sunum.',
      interactiveStage: 'Etkileşimli Proje Alanı',
      switchProject: 'Proje Seç',
      prevProject: 'Önceki Proje',
      nextProject: 'Sonraki Proje',
    },
    home: {
      heroGreeting: 'Thamer Alsatam',
      heroHeadline: 'Net mimari ve hassasiyetle dijital ürünler geliştiriyorum.',
      heroDescription:
        'Modern web teknolojileri, ölçeklenebilir arayüzler ve yenilikçi prototipler üzerine odaklanan yazılım geliştirici.',
      exploreWork: 'Projeleri Keşfet',
      getInTouch: 'İletişime Geç',
      highlightProjects: '5 Web Uygulaması ve Prototip',
      highlightStack: 'TypeScript, React ve Modern UI',
      highlightDesign: 'Amaca Yönelik Sade Tasarım',
    },
    projectsPage: {
      title: 'Projeler ve Prototipler',
      description:
        'Web uygulamaları, kültürel prototipler ve tipografi araçlarını kapsayan tüm çalışmaların kataloğu.',
      filterAll: 'Tümü',
      searchPlaceholder: 'Proje veya teknoloji ara...',
      emptyPlaceholder: 'Eşleşen proje bulunamadı.',
      projectsCount: 'Katalogdaki Projeler',
    },
    aboutPage: {
      title: 'Hakkımda',
      roleHeadline: 'Kod kalitesine ve görsel netliğe odaklanan yazılım geliştirici',
      bioParagraph1:
        'Performans, sezgisel kullanım ve temiz mimariye odaklanarak modern web uygulamaları geliştiriyorum. Çalışmalarımda mantıksal kod yapısını sade ve etkili tasarımla buluşturuyorum.',
      bioParagraph2:
        'Geliştirme sürecinde modern araçları ve yapay zeka desteğini şeffaf ve bilinçli bir şekilde kullanarak fikirleri güvenilir kodlara dönüştürüyorum.',
      skillsHeading: 'Teknik Yetkinlikler',
      philosophyHeading: 'Çalışma Felsefesi',
      philosophyText:
        'İşlevsellikten ödün vermeden sadelik: Erişilebilirlik, temiz tipografi ve güçlü bileşen mimarisi her zaman odak noktamdadır.',
    },
    contactPage: {
      title: 'İletişim',
      subtitle: 'Yazılım projeleri, teknik iş birlikleri ve yeni fırsatlar için iletişime geçebilirsiniz.',
      emailLabel: 'E-posta',
      phoneLabel: 'Telefon',
      locationLabel: 'Konum',
      locationValue: 'Almanya',
      githubLabel: 'GitHub Profili',
      formName: 'Adınız',
      formEmail: 'E-posta Adresiniz',
      formSubject: 'Konu',
      formMessage: 'Mesajınız',
      formSubmit: 'Mesaj Gönder',
      formCopied: 'Panoya kopyalandı',
      formSuccess: 'Teşekkürler! Mesajınız hazırlanıyor.',
    },
    footer: {
      copyright: 'Thamer Alsatam. Tüm hakları saklıdır.',
      tagline: 'Yapılandırılmış web çözümleri ve yazılım prototipleri.',
    },
  },
};
