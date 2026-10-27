import { Project } from '../types';

/**
 * Single source of truth for all projects.
 * Strict rules:
 * - Use only confirmed data from master reference.
 * - Do not invent features, links, awards, or statistics.
 * - Mark unconfirmed details clearly as placeholders.
 * - Respect exact status wording.
 */
export const projects: Project[] = [
  {
    id: 'fontat',
    slug: 'fontat',
    statusKey: 'fontat',
    category: 'Web Application / Typography',
    featured: true,
    technologies: ['TypeScript', 'React', 'Tailwind CSS'],
    features: [
      'Funktionale Text- und Schriftvorschau',
      'Interaktive Schriftparametrierung (Placeholder)',
      'Lokale Verarbeitungslogik (Placeholder)',
    ],
    links: {
      liveUrl: undefined, // Pending confirmation from master reference
      githubUrl: undefined, // Pending confirmation from master reference
    },
    gallery: [],
    translations: {
      de: {
        title: 'Fontat',
        summary:
          'Plattform für arabische Typografie und Schriftanzeige im Web. Funktional einsatzbereit, benötigt weitere Sicherheits- und Datenschutzüberprüfung.',
        problem:
          'Platzhalter: Spezifische Problemstellung der Schriftdarstellung im Browser gemäß Referenzdatei.',
        solution:
          'Platzhalter: Technische Lösungsarchitektur zur sicheren und flüssigen Darstellung arabischer Schriften.',
        role:
          'Platzhalter: Konzeption, Frontend-Entwicklung mit React/TypeScript und strukturierte KI-Unterstützung bei der Komponentenentwicklung.',
        limitations:
          'Benötigt noch eine vertiefte Sicherheits- und Datenschutzüberprüfung vor einem breiten Produktiveinsatz.',
      },
      ar: {
        title: 'فونتات (Fontat)',
        summary:
          'منصة للخطوط العربية واستعراض الطباعة الرقمية. يعمل وظيفياً، بانتظار مراجعة إضافية للأمان والخصوصية.',
        problem:
          'عنصر نائب: المشكلة المتعلقة بتجربة الخطوط والطباعة الرقمية وفق الملف المرجعي.',
        solution:
          'عنصر نائب: الحل التقني لعرض الخطوط والتحكم بخصائصها.',
        role:
          'عنصر نائب: تصميم الواجهة وتطويرها بمساعدة الذكاء الاصطناعي مع تدقيق الكود.',
        limitations:
          'يعمل وظيفياً، ويحتاج إلى مراجعة إضافية لجوانب الأمان والخصوصية.',
      },
      en: {
        title: 'Fontat',
        summary:
          'Arabic typography web application. Works functionally, needs further security and privacy review.',
        problem: 'Placeholder: Problem statement regarding Arabic font handling in web browsers.',
        solution: 'Placeholder: Technical solution and rendering pipeline.',
        role: 'Placeholder: Front-end engineering with React/TypeScript and disciplined AI coding assistance.',
        limitations: 'Requires further review regarding security and privacy standards.',
      },
      tr: {
        title: 'Fontat',
        summary:
          'Arapça tipografi ve web yazı tipi platformu. İşlevsel olarak çalışıyor, ek güvenlik ve gizlilik incelemesi gerekiyor.',
        problem: 'Yer tutucu: Web üzerinde yazı tipi gösterimi ve parametrelendirme zorlukları.',
        solution: 'Yer tutucu: React tabanlı arayüz çözümü.',
        role: 'Yer tutucu: Arayüz geliştirme ve yapay zeka destekli kod optimizasyonu.',
        limitations: 'Güvenlik ve gizlilik açılarından ileri düzey inceleme beklenmektedir.',
      },
    },
  },

  {
    id: 'umayyad-mosque',
    slug: 'umayyad-mosque',
    statusKey: 'umayyad_mosque',
    category: 'Cultural Prototype / Interactive Experience',
    featured: true,
    technologies: ['React', 'TypeScript', 'CSS'],
    features: [
      'Interaktive architektonische Übersicht (Prototyp)',
      'Strukturierte historische Informationsvermittlung (Placeholder)',
      'Responsive Navigationselemente (Placeholder)',
    ],
    links: {
      liveUrl: undefined,
      githubUrl: undefined,
    },
    gallery: [],
    translations: {
      de: {
        title: 'Umayyaden-Moschee Prototyp',
        summary:
          'Interaktiver Prototyp zur Vorstellung der architektonischen und kulturellen Bedeutung der Umayyaden-Moschee. Prototyp bereit zur Evaluierung, keine offizielle Website.',
        problem:
          'Platzhalter: Mangel an zugänglichen, interaktiven digitalen Prototypen für historische Bauwerke.',
        solution:
          'Platzhalter: Entwicklung eines barrierearmen, modularen Web-Prototyps zur Vermittlung architektonischer Aspekte.',
        role:
          'Platzhalter: Eigenständige Konzeption und Programmierung des Prototyps unter gezieltem Einsatz von KI als Lernwerkzeug.',
        limitations:
          'Es handelt sich um einen unabhängigen Prototyp zur technischen Evaluierung, nicht um eine offizielle Webpräsenz der Institution.',
      },
      ar: {
        title: 'الجامع الأموي الكبير (نموذج أولي)',
        summary:
          'نموذج أولي تفاعلي لاستعراض معالم وتاريخ الجامع الأموي. نموذج أولي جاهز للتقييم، ليس موقعاً رسمياً.',
        problem:
          'عنصر نائب: الحاجة إلى تمثيل رقمي حديث وتفاعلي للمواقع التاريخية والمعمارية.',
        solution:
          'عنصر نائب: بناء نموذج ويب تفاعلي يتيح استكشاف المعالم المعمارية بصرياً.',
        role:
          'عنصر نائب: التطوير البرمجي المستقل واستخدام أدوات الذكاء الاصطناعي في صياغة الكود والهيكلة.',
        limitations:
          'مشروع تجريبي مستقل لتقييم الفكرة والتقنية، وليس موقعاً رسمياً صادراً عن إدارة الجامع.',
      },
      en: {
        title: 'Umayyad Mosque Prototype',
        summary:
          'Interactive prototype presenting the architectural landmark. Prototype ready for evaluation, not an official site.',
        problem: 'Placeholder: Challenge in delivering accessible digital presentation of historical architecture.',
        solution: 'Placeholder: Interactive prototype designed with modular web components.',
        role: 'Placeholder: Conceptual design, implementation, and transparent AI-assisted workflow.',
        limitations: 'Technical prototype for evaluation purposes only; not an official representation.',
      },
      tr: {
        title: 'Emevi Camii Prototipi',
        summary:
          'Mimari ve tarihi yapıyı tanıtan etkileşimli prototip. Değerlendirmeye hazır prototip, resmi bir web sitesi değildir.',
        problem: 'Yer tutucu: Tarihi yapıların dijital ortamda modern sunumu ihtiyacı.',
        solution: 'Yer tutucu: Modüler bileşenlerle hazırlanmış prototip.',
        role: 'Yer tutucu: Geliştirme süreci ve yapay zeka desteği ile kodlama.',
        limitations: 'Bağımsız bir teknik prototiptir, resmi kurum sitesi değildir.',
      },
    },
  },

  {
    id: 'trainingsplan',
    slug: 'trainingsplan',
    statusKey: 'trainingsplan',
    category: 'Personal Utility / Web App',
    featured: true,
    technologies: ['TypeScript', 'React', 'Local State'],
    features: [
      'Übersicht persönlicher Trainingseinheiten (Placeholder)',
      'Fortschrittsverfolgung (Placeholder)',
      'Lokale Speicherung (Placeholder)',
    ],
    links: {
      liveUrl: undefined,
      githubUrl: undefined,
    },
    gallery: [],
    translations: {
      de: {
        title: 'Trainingsplan',
        summary:
          'Webbasierte Anwendung zur Organisation und Verfolgung persönlicher Trainingsroutinen. Persönliches Projekt, Status noch zu bestätigen.',
        problem:
          'Platzhalter: Bedarf nach einer minimalistischen, ablenkungsfreien Trainingsverwaltung ohne Registrierungszwang.',
        solution:
          'Platzhalter: Einfache, fokussierte Benutzeroberfläche mit lokaler Datenhaltung.',
        role:
          'Platzhalter: Eigenständiges Projekt zur Vertiefung von React-Zustandsverwaltung und UI-Logik.',
        limitations:
          'Persönliches Projekt im Prototypenstadium; Status und Funktionsumfang werden noch final bestätigt.',
      },
      ar: {
        title: 'خطة التدريب (Trainingsplan)',
        summary:
          'تطبيق لتنظيم التمارين الرياضية ومتابعة الأهداف البدنية. مشروع شخصي، الحالة قيد التأكيد.',
        problem:
          'عنصر نائب: الحاجة إلى متابعة التمارين بواجهة بسيطة وسريعة الاستجابة.',
        solution:
          'عنصر نائب: تطبيق يركز على سهولة الاستخدام وتخزين البيانات محلياً.',
        role:
          'عنصر نائب: تطبيق عملي لتعلم إدارة الحالة في React وبناء المكونات التفاعلية.',
        limitations:
          'مشروع شخصي تجريبي، والحالة النهائية للمزايا قيد التأكيد.',
      },
      en: {
        title: 'Trainingsplan',
        summary:
          'Personal training routine and fitness tracking web application. Personal project, status to be confirmed.',
        problem: 'Placeholder: Need for a distraction-free workout planner without heavy overhead.',
        solution: 'Placeholder: Clean user interface built for fast local state interactions.',
        role: 'Placeholder: Personal learning project strengthening state management skills in React.',
        limitations: 'Personal experimental project; status to be confirmed from reference file.',
      },
      tr: {
        title: 'Antrenman Planı (Trainingsplan)',
        summary:
          'Kişisel egzersiz ve rutin takip web uygulaması. Kişisel proje, durumu onaylanacak.',
        problem: 'Yer tutucu: Basit ve hızlı bir antrenman takip aracı ihtiyacı.',
        solution: 'Yer tutucu: Sade React arayüzü.',
        role: 'Yer tutucu: Durum yönetimi (State) pratiği için geliştirilen kişisel çalışma.',
        limitations: 'Kişisel proje niteliğindedir; son durumu teyit edilecektir.',
      },
    },
  },

  {
    id: 'studio-lab',
    slug: 'studio-lab',
    statusKey: 'studio_lab',
    category: 'Creative Tools / In Development',
    featured: false,
    technologies: ['TypeScript', 'React', 'Canvas/SVG'],
    features: [
      'Experimentelle Kreativ-Leinwand (In Entwicklung)',
      'Modulare Werkzeugauswahl (Placeholder)',
      'Export-Vorschau (Placeholder)',
    ],
    links: {
      liveUrl: undefined,
      githubUrl: undefined,
    },
    gallery: [],
    translations: {
      de: {
        title: 'Studio Lab',
        summary:
          'Experimentelle Arbeitsumgebung für kreative Web-Werkzeuge und visuelle Prototypen. In Entwicklung.',
        problem:
          'Platzhalter: Plattform für experimentelle Frontend-Komponenten und interaktive Visualisierungen.',
        solution:
          'Platzhalter: Modulares Setup für schnelle Experimente mit Canvas, SVG und Layoutsystemen.',
        role:
          'Platzhalter: Erforschung fortgeschrittener Frontend-Techniken mit AI-gestütztem Pair-Programming.',
        limitations:
          'Befindet sich aktiv in der Entwicklungsphase und ist noch nicht vollständig einsatzbereit.',
      },
      ar: {
        title: 'ستوديو لاب (Studio Lab)',
        summary:
          'بيئة تجريبية لأدوات الويب الإبداعية والنماذج البصرية. قيد التطوير.',
        problem:
          'عنصر نائب: تجربة أدوات تصميم تفاعلية واستكشاف إمكانيات الواجهات الرقمية.',
        solution:
          'عنصر نائب: بنية معيارية لتجربة عناصر Canvas وSVG.',
        role:
          'عنصر نائب: تجارب تطوير واجهات وتطبيق تقنيات حديثة بتوجيه الذكاء الاصطناعي.',
        limitations:
          'المشروع في مرحلة التطوير الأولية ولم يكتمل بعد.',
      },
      en: {
        title: 'Studio Lab',
        summary:
          'Experimental workspace for creative web tools and visual prototypes. In development.',
        problem: 'Placeholder: Need for a sandbox testing ground for advanced UI concepts.',
        solution: 'Placeholder: Modular React and Canvas architecture.',
        role: 'Placeholder: Front-end exploration with disciplined AI collaboration.',
        limitations: 'Currently in active development; unfinished functional scope.',
      },
      tr: {
        title: 'Studio Lab',
        summary:
          'Yaratıcı web araçları ve görsel prototipler için deneysel çalışma alanı. Geliştirme aşamasında.',
        problem: 'Yer tutucu: Gelişmiş arayüz teknikleri için deneme ortamı.',
        solution: 'Yer tutucu: Modüler bileşen yapısı.',
        role: 'Yer tutucu: Yeni teknolojileri keşfetme ve kodlama pratiği.',
        limitations: 'Aktif geliştirme aşamasındadır.',
      },
    },
  },

  {
    id: 'arabic-font-tool',
    slug: 'arabic-font-tool',
    statusKey: 'arabic_font_tool',
    category: 'Font Engineering / In Development',
    featured: false,
    technologies: ['TypeScript', 'Vector Graphics', 'OpenType concepts'],
    features: [
      'Parametrische Glyphen-Vorschau (In Entwicklung)',
      'Kurven- und Ankerpunkt-Inspektor (Placeholder)',
      'Export-Grundlagen (Placeholder)',
    ],
    links: {
      liveUrl: undefined,
      githubUrl: undefined,
    },
    gallery: [],
    translations: {
      de: {
        title: 'Arabisches Schriftdesign-Tool',
        summary:
          'Spezialisiertes Webwerkzeug zur Analyse und Gestaltung arabischer Schriftzeichen und Ligaturen. In Entwicklung.',
        problem:
          'Platzhalter: Komplexität arabischer Schriftregeln (Kalligrafie, variable Breiten, Konnektivität) in browserbasierten Editoren.',
        solution:
          'Platzhalter: Vektorbasierte Modellierung von Buchstabenformen mit mathematischen Bezier-Kurven.',
        role:
          'Platzhalter: Konzeptionelle Recherche zu Schriftformaten und Prototyping der Berechnungslogik.',
        limitations:
          'Befindet sich in der frühen Konzeptions- und Entwicklungsphase; keine freigegebene Version.',
      },
      ar: {
        title: 'أداة تصميم الخطوط العربية',
        summary:
          'أداة متخصصة لتحليل وتصميم الحروف والوصلات في الخط العربي عبر المتصفح. قيد التطوير.',
        problem:
          'عنصر نائب: خصوصية الحرف العربي وتشابكاته التي تتطلب معالجة متقدمة للمنحنيات.',
        solution:
          'عنصر نائب: بناء عارض متجهي ومحرر تجريبي لنقاط التحكم بالخط.',
        role:
          'عنصر نائب: دراسة قواعد الخط وتطوير الخوارزميات الحسابية بالاستعانة بالذكاء الاصطناعي.',
        limitations:
          'مشروع في مرحلة البحث والتطوير الأولي.',
      },
      en: {
        title: 'Arabic Font Design Tool',
        summary:
          'Specialized tool for analyzing and creating Arabic glyphs and ligatures. In development.',
        problem: 'Placeholder: High complexity of Arabic cursive rules in web-based editors.',
        solution: 'Placeholder: Vector-based curve modeling and parametric glyph generator.',
        role: 'Placeholder: Typography research and mathematical prototype engineering.',
        limitations: 'Early development stage with unconfirmed final feature set.',
      },
      tr: {
        title: 'Arapça Yazı Tipi Tasarım Aracı',
        summary:
          'Arapça harf ve glif yapısını web üzerinde tasarlamaya ve incelemeye yönelik araç. Geliştirme aşamasında.',
        problem: 'Yer tutucu: Arapça hat sanatının ve harf bağlantılarının webde modellenmesi.',
        solution: 'Yer tutucu: Vektör tabanlı eğri ve glif motoru.',
        role: 'Yer tutucu: Araştırma ve prototip kodlama süreci.',
        limitations: 'Henüz erken geliştirme aşamasındadır.',
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
