import { ProjectLocalizedContent, SupportedLanguage } from '../types';

/**
 * نصوص تفاصيل المشاريع باللغتين الإنكليزية والألمانية.
 * جميع الحقول مترجمة بدقة واحترافية لتطابق السياق العربي الأصيل.
 */
export const projectTexts: Partial<Record<SupportedLanguage, Record<string, ProjectLocalizedContent>>> = {
  en: {
    fontat: {
      title: 'Fontat',
      category: 'Web Platform · Typography',
      summary:
        'A platform to explore, test, and manage fonts, combining a searchable library with a personal collection workspace and typography inspection tools.',
      problem:
        'Designers need a single place that brings together common fonts, allowing them to compare and test them in varied contexts before making a choice.',
      solution:
        'A font library with instant search and live preview, personal accounts to save and organize favorites, and tools to test font attributes including OpenType features and variable fonts. Works smoothly on mobile and desktop.',
      role:
        'I conceived the platform and user interface, connected the database and storage, designed data relationships, and set up the server pipeline for font operations. I utilized AI (Google AI Studio) to assist with code authoring. Development took several months, with database architecture and security being the most challenging aspects for me as a beginner.',
      limitations:
        'The project is functionally operational, but requires a thorough security and privacy audit before it can be deemed production-ready for wider public use. The repository is private.',
      features: [
        'Searchable font library with instant live preview',
        'Personal user workspace to organize and save fonts',
        'Custom user font uploads',
        'Interactive tools for font metrics and variable font axes',
        'Detailed specimen pages for individual typefaces and glyphs',
      ],
    },
    'umayyad-mosque': {
      title: 'The Great Umayyad Mosque',
      category: 'Prototype · Informational Site',
      summary:
        'A prototype showcase website for the Umayyad Mosque in Damascus, combining history, architecture, mosaics, and visitor guides in a responsive Arabic and English experience.',
      problem:
        'Prepared as a digital proposal directed to the Syrian Ministry of Awqaf (Digital Transformation Directorate), aiming to unify historical and architectural documentation with visitor guidance in one clear portal.',
      solution:
        'A responsive static website in Arabic and English with automatic layout direction switching. Features a prayer timetable dashboard, a historical timeline across four eras, architectural and mosaic sections, a 10-photo gallery, and a visitor guide. Designed adhering to the entity’s visual identity and Qumrah typography.',
      role: 'I designed the website and authored the proposal myself, utilizing AI to assist with coding and copywriting.',
      limitations:
        'An evaluation prototype, not an official government site. Historical data, prayer times, visiting hours, and photo licensing require official verification before adoption.',
      features: [
        'Prayer times and next prayer indicator based on Damascus time',
        'Historical timeline spanning four major eras',
        'Dedicated architectural and mosaic showcase sections',
        'Curated gallery of ten high-resolution photographs',
        'Practical visitor guide and etiquette tips',
      ],
    },
    trainingsplan: {
      title: 'Trainingsplan',
      category: 'Personal App · Android',
      summary:
        'An application for structuring fitness routines and weekly schedules, featuring offline local media storage and a custom workout audio player.',
      problem:
        'I wanted a personal workout app that stores routines and demonstration media directly on the device, functioning entirely without relying on an active internet connection.',
      solution:
        'A calm user interface organizing training days, exercises, sets, and reps, paired with an exercise catalog in Arabic and German, a step-by-step workout mode with rest timer, and an audio player. Built with React and packaged via Capacitor as an Android application.',
      role:
        'The concept, requirements, and user experience are mine: the minimalist UI, workout organization, bilingual naming (Arabic & German), and local-first storage. AI generated major portions of the code and assisted in resolving build errors.',
      limitations:
        'Project status is currently being verified; no permanent public link is available yet. Some listed features are awaiting final validation.',
      features: [
        'Weekly schedule structuring workout and rest days',
        'Exercise database with bilingual Arabic and German titles',
        'Demonstration images and videos stored locally on device',
        'Active workout mode with rest countdown timer and haptic vibration',
        'Custom folder-based workout audio player',
        'Full routine export and import functionality',
      ],
    },
    'studio-lab': {
      title: 'Studio Lab',
      category: 'Learning Tool · Code Editor',
      summary:
        'A hands-on code editor for learning HTML, CSS, and JavaScript with live preview, designed for simplicity and mobile friendliness without ads or required accounts.',
      problem:
        'Many existing web code playgrounds do not fit my learning workflow or are cluttered with ads and distractions, especially on mobile devices.',
      solution:
        'A coding workspace featuring multi-project management with auto-save to device storage, a folder tree, Monaco editor with Emmet support, a live preview inside a phone mockup frame, and ZIP workspace export/import.',
      role:
        'I built this for my personal learning journey. I decided the feature set and mobile-first workflow, while utilizing AI to generate code implementations.',
      limitations:
        'Currently under active development. The AI assistant feature is pending, error logging is incomplete, and no public permanent URL is available yet.',
      features: [
        'Multiple projects with automatic local storage',
        'File and folder tree directory management',
        'Monaco code editor with Emmet abbreviation support',
        'Responsive live preview in an interactive phone frame',
        'Full workspace export and import via ZIP archive',
      ],
    },
    'arabic-font-tool': {
      title: 'Arabic Font Tool',
      category: 'Design Tool · Typography',
      summary:
        'A browser-based tool in development for drawing Arabic glyphs and adjusting font metrics, complete with text preview and TTF export.',
      problem:
        'Arabic typography has unique structural and calligraphic needs that generic vector drawing software does not cater to effectively.',
      solution:
        'An in-browser glyph editor using Bézier curves, specialized Arabic dot shapes, metrics controls for baseline and side-bearings, live Arabic string preview, and TTF font generation.',
      role:
        'The concept, parameters, and design requirements originated from me, constructed with AI assistance in Google AI Studio.',
      limitations:
        'Under development. The exported font is basic and does not yet support advanced OpenType tables or complex positional substitutions; the preview is not a full shaping engine. No fixed public URL is available yet.',
      features: [
        'Bézier curve drawing with precision control points',
        'Preset Arabic diacritic dot styles and placements',
        'Baseline and side-bearing typographic metric controls',
        'Interactive live Arabic sentence preview',
        'Direct TTF font file export',
        'Local browser project saving',
      ],
    },
  },
  de: {
    fontat: {
      title: 'Fontat',
      category: 'Webplattform · Typografie',
      summary:
        'Eine Plattform zum Entdecken, Testen und Verwalten von Schriften, die eine durchsuchbare Bibliothek mit einem persönlichen Arbeitsbereich und Schriftprüfwerkzeugen verbindet.',
      problem:
        'Designer benötigen einen zentralen Ort, der gebräuchliche Schriften bündelt und es ermöglicht, sie vor der Auswahl in unterschiedlichen Kontexten zu vergleichen und auszuprobieren.',
      solution:
        'Eine Schriftbibliothek mit Suche und Vorschau, ein persönliches Konto zum Speichern und Ordnen von Schriften sowie Werkzeuge zum Testen von Schrifteigenschaften, einschließlich OpenType-Features und variabler Schriften. Funktioniert auf Smartphone und Desktop.',
      role:
        'Ich habe das Plattformkonzept und die Benutzeroberfläche entworfen, an Datenbank und Speicher angebunden, die Datenlogik gestaltet und die Schriftverarbeitung mit dem Server verknüpft. Beim Schreiben des Codes habe ich KI (Google AI Studio) eingesetzt. Die Entwicklung dauerte mehrere Monate; Datenbankarchitektur und Sicherheit waren als Einsteiger die größte Herausforderung.',
      limitations:
        'Das Projekt funktioniert technisch, erfordert jedoch eine Sicherheits- und Datenschutzprüfung vor einem zuverlässigen breiteren Einsatz. Das Repository ist privat.',
      features: [
        'Schriftbibliothek mit Suche, Filterung und Live-Vorschau',
        'Persönliches Konto zur Organisation gespeicherter Schriften',
        'Upload eigener Schriftdateien durch Nutzer',
        'Werkzeuge zum Testen von Schriftachsen und variablen Fonts',
        'Detaillierte Einzelseiten für Schriften und Schriftzeichen',
      ],
    },
    'umayyad-mosque': {
      title: 'Die Große Umayyaden-Moschee',
      category: 'Prototyp · Informationsportal',
      summary:
        'Ein Prototyp für eine Informationswebsite über die Umayyaden-Moschee in Damaskus, der Geschichte, Architektur, Mosaike und einen Besucherleitfaden in einem zweisprachigen Erlebnis (Arabisch/Englisch) vereint.',
      problem:
        'Entwickelt als Vorschlag für das syrische Ministerium für religiöse Angelegenheiten (Abteilung digitale Transformation), um geschichtliche Dokumentation und Besucherinformationen an einem zentralen Ort zugänglich zu machen.',
      solution:
        'Eine responsive statische Website auf Arabisch und Englisch mit automatischer Anpassung der Leserichtung. Beinhaltet Gebetszeiten, eine Zeitleiste über vier Epochen, Abschnitte zu Architektur und Mosaiken, eine Galerie mit zehn Bildern und einen Besucherleitfaden. Gestaltet nach dem Erscheinungsbild der Zielorganisation mit der Schriftart Qumrah.',
      role: 'Ich habe die Website gestaltet und den Vorschlag selbst verfasst; KI unterstützte mich bei der Code-Erstellung und Texterfassung.',
      limitations:
        'Ein Evaluierungsprototyp und keine offizielle Website. Historische Angaben, Gebetszeiten, Öffnungszeiten und Bildrechte bedürfen einer offiziellen Freigabe vor einer Übernahme.',
      features: [
        'Gebetszeiten und Anzeige des nächsten Gebets nach Damaskus-Zeit',
        'Historische Zeitleiste über vier prägende Epochen',
        'Themenbereiche zu islamischer Architektur und Wandmosaiken',
        'Kuratierte Galerie mit zehn Aufnahmen',
        'Praktischer Besucher- und Besichtigungsleitfaden',
      ],
    },
    trainingsplan: {
      title: 'Trainingsplan',
      category: 'Persönliche App · Android',
      summary:
        'Eine Anwendung zur Strukturierung von Fitnessübungen und Wochenplänen, mit lokaler Medienspeicherung und integriertem Audio-Player für das Training.',
      problem:
        'Ich wünschte mir eine persönliche Trainings-App, die Übungspläne und Medien direkt auf dem Gerät speichert, ganz ohne ständige Internetverbindung.',
      solution:
        'Eine ruhige Benutzeroberfläche für Trainingstage, Übungen, Sätze und Wiederholungen, ergänzt durch eine Übungsdatenbank mit arabischen und deutschen Bezeichnungen, einen schrittweisen Trainingsmodus mit Pausentimer und einen Audioplayer. Erstellt mit React und gebündelt mit Capacitor als Android-App.',
      role:
        'Idee, Anforderungen und Benutzerführung stammen von mir: ruhiges Design, Übungsstruktur, zweisprachige Benennung und lokale Datenspeicherung. KI schrieb wesentliche Teile des Codes und half bei Build-Herausforderungen.',
      limitations:
        'Projektstatus wird derzeit geprüft; ein dauerhafter öffentlicher Link existiert aktuell nicht. Ein Teil der Funktionen befindet sich noch im abschließenden Test.',
      features: [
        'Wochenplanung mit Trainings- und Ruhetagen',
        'Übungskatalog mit arabischen und deutschen Bezeichnungen',
        'Lokal auf dem Gerät gespeicherte Anleitungsvideos und Bilder',
        'Geführter Trainingsmodus mit Pausentimer und Vibrationssignal',
        'Ordnerbasierter Audioplayer für das Workout',
        'Export und Import des gesamten Trainingsplans',
      ],
    },
    'studio-lab': {
      title: 'Studio Lab',
      category: 'Lernwerkzeug · Code-Editor',
      summary:
        'Ein Editor zum praktischen Erlernen von HTML, CSS und JavaScript mit Live-Vorschau, optimiert für Einfachheit und mobile Nutzung ohne Werbung oder Registrierungszwang.',
      problem:
        'Viele verfügbare Web-Editoren entsprechen nicht meinen Anforderungen oder sind voller Werbung und Ablenkungen, besonders auf dem Smartphone.',
      solution:
        'Eine Entwicklungsumgebung mit mehreren Projekten und automatischer lokaler Speicherung, Datei- und Ordnerstruktur, Monaco-Editor mit Emmet-Unterstützung, Live-Vorschau in einem Smartphone-Rahmen sowie ZIP-Export und -Import.',
      role:
        'Ich habe das Werkzeug für meinen eigenen Lernprozess entwickelt. Ich definierte Funktionsumfang und mobile Bedienung; KI unterstützte mich bei der Code-Erstellung.',
      limitations:
        'Befindet sich in aktiver Entwicklung. KI-Assistent ist noch deaktiviert, die Fehlerkonsole unvollständig; ein fester öffentlicher Link existiert derzeit nicht.',
      features: [
        'Mehrere Projekte mit automatischer lokaler Sicherung',
        'Strukturierte Datei- und Ordnerübersicht',
        'Monaco-Editor mit Emmet-Kürzeln',
        'Echtzeit-Vorschau in einem interaktiven Mobil-Rahmen',
        'Export und Import des gesamten Arbeitsbereichs als ZIP',
      ],
    },
    'arabic-font-tool': {
      title: 'Arabisches Schriftwerkzeug',
      category: 'Designwerkzeug · Typografie',
      summary:
        'Ein Browser-Werkzeug in Entwicklung zum Zeichnen arabischer Schriftzeichen und Einstellen typografischer Maße mit Textvorschau und TTF-Export.',
      problem:
        'Die arabische Schrift erfordert spezielle Werkzeuge, die ihren Eigenheiten gerecht werden, anstatt sich auf allgemeine Vektorgrafikprogramme zu beschränken.',
      solution:
        'Ein Glyphen-Editor mit Bézier-Kurven, typischen arabischen Punktformen, Metrik-Einstellungen für Grundlinie und Vor-/Nachbreite, arabischer Textvorschau und TTF-Schriftexport.',
      role:
        'Idee, Anforderungen und Konzepte stammen von mir, umgesetzt mit Unterstützung durch KI in Google AI Studio.',
      limitations:
        'In Entwicklung. Die exportierte Schriftdatei ist grundlegend und deckt noch keine komplexen OpenType-Tabellen oder Glyphen-Positionierungen ab; die Vorschau ist noch keine vollwertige Text-Shaping-Engine. Kein fester öffentlicher Link vorhanden.',
      features: [
        'Pfadbearbeitung mit Bézier-Kurven und Kontrollpunkten',
        'Spezielle Voreinstellungen für arabische Punktformen',
        'Präzise Einstellung von Grundlinien und Seitenstegen',
        'Echtzeit-Vorschau arabischer Beispieltexte',
        'Direkter Export als TTF-Schriftdatei',
        'Lokales Speichern von Projekten im Browser',
      ],
    },
  },
};
