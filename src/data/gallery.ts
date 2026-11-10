import { SupportedLanguage } from '../types';

export type ShotDevice = 'laptop' | 'phone';

export interface ProjectShot {
  /** المسار داخل مجلد public، ويبدأ بـ / */
  src: string;
  device: ShotDevice;
  width: number;
  height: number;
  caption: Record<SupportedLanguage, string>;
  /** إن حُدِّدت تُعرض اللقطة لهذه اللغة فقط (الإنجليزية تأخذ لقطات الألمانية عند غياب لقطاتها). */
  lang?: SupportedLanguage;
}

type Caption = Record<SupportedLanguage, string>;

const laptop = (file: string, caption: Caption, width = 1440, height = 900): ProjectShot => ({
  src: file,
  device: 'laptop',
  width,
  height,
  caption,
});

const phone = (file: string, caption: Caption, width = 780, height = 1688): ProjectShot => ({
  src: file,
  device: 'phone',
  width,
  height,
  caption,
});

/**
 * لقطات الشاشة لكل مشروع، مفهرسة بمعرّف المشروع.
 * الصور موجودة في public/projects/<معرّف المشروع>/ .
 * مشروع بلا مدخل هنا لا يُعرض له معرض.
 */
export const projectGalleries: Record<string, ProjectShot[]> = {
  fontat: [
    laptop('/projects/fontat/laptop-home.webp', { ar: 'الصفحة الرئيسية على الحاسوب', en: 'Home page on desktop', de: 'Startseite am Desktop' }, 2612, 1632),
    laptop('/projects/fontat/laptop-lab.webp', { ar: 'مختبر الخطوط: معاينة خط تجريبي وبياناته', en: 'Font lab: previewing a test font and its data', de: 'Schriftlabor: Vorschau einer Testschrift und ihrer Daten' }, 2612, 1632),
    phone('/projects/fontat/mobile-home.webp', { ar: 'الصفحة الرئيسية على الهاتف مع شريط التنقل السفلي', en: 'Home page on mobile with bottom navigation bar', de: 'Startseite am Smartphone mit unterer Navigationsleiste' }, 1408, 3048),
    phone('/projects/fontat/mobile-lab.webp', { ar: 'بيانات الخط في المختبر على الهاتف', en: 'Font data in the lab on mobile', de: 'Schriftdaten im Labor am Smartphone' }, 1706, 3688),
  ],
  'umayyad-mosque': [
    laptop('/projects/umayyad-mosque/laptop-hero.webp', { ar: 'الشاشة الرئيسية', en: 'Main screen', de: 'Startbildschirm' }),
    laptop('/projects/umayyad-mosque/laptop-mosaics.webp', { ar: 'قسم الفسيفساء: جدارية وادي بردى', en: 'Mosaics section: the Barada Valley mural', de: 'Mosaik-Bereich: Wandbild des Barada-Tals' }),
    phone('/projects/umayyad-mosque/mobile-prayer.webp', { ar: 'مواقيت الصلاة على الهاتف', en: 'Prayer times on mobile', de: 'Gebetszeiten am Smartphone' }),
    phone('/projects/umayyad-mosque/mobile-history.webp', { ar: 'المسار التاريخي على الهاتف', en: 'Historical timeline on mobile', de: 'Historische Zeitleiste am Smartphone' }),
  ],
  'studio-lab': [
    laptop('/projects/studio-lab/laptop-projects.webp', { ar: 'قائمة المشاريع', en: 'Project list', de: 'Projektliste' }),
    laptop('/projects/studio-lab/laptop-editor.webp', { ar: 'المحرر مع المعاينة الحية', en: 'Editor with live preview', de: 'Editor mit Live-Vorschau' }),
    phone('/projects/studio-lab/mobile-code.webp', { ar: 'المحرر على الهاتف', en: 'Editor on mobile', de: 'Editor am Smartphone' }),
    phone('/projects/studio-lab/mobile-preview.webp', { ar: 'المعاينة على الهاتف', en: 'Preview on mobile', de: 'Vorschau am Smartphone' }),
  ],
  'arabic-font-tool': [
    laptop('/projects/font-studio/laptop-glyphs.webp', { ar: 'شبكة المحارف ولوحة معلومات الخط', en: 'Glyph grid and font overview panel', de: 'Glyphenraster und Schriftübersicht' }),
    laptop('/projects/font-studio/laptop-editor.webp', { ar: 'محرر المحرف مع المساطر وخطوط المقاييس', en: 'Glyph editor with rulers and metric guides', de: 'Glyphen-Editor mit Linealen und Metriklinien' }),
    phone('/projects/font-studio/mobile-glyphs.webp', { ar: 'شبكة المحارف على الهاتف', en: 'Glyph grid on mobile', de: 'Glyphenraster am Smartphone' }),
    phone('/projects/font-studio/mobile-editor.webp', { ar: 'محرر المحرف على الهاتف', en: 'Glyph editor on mobile', de: 'Glyphen-Editor am Smartphone' }),
  ],
  trainingsplan: [
    { ...phone('/projects/trainingsplan/de-schedule.webp', { ar: 'جدول التمارين اليومي', en: 'Daily workout schedule', de: 'Täglicher Trainingsplan' }, 780, 1688), lang: 'de' },
    { ...phone('/projects/trainingsplan/de-audio.webp', { ar: 'مشغّل الصوتيات', en: 'Audio player', de: 'Audioplayer' }, 780, 1688), lang: 'de' },
    { ...phone('/projects/trainingsplan/de-settings.webp', { ar: 'الإعدادات والبيانات', en: 'Settings and data', de: 'Einstellungen und Daten' }, 780, 1688), lang: 'de' },
    { ...phone('/projects/trainingsplan/ar-schedule.webp', { ar: 'جدول التمارين اليومي', en: 'Daily workout schedule', de: 'Täglicher Trainingsplan' }, 780, 1688), lang: 'ar' },
    { ...phone('/projects/trainingsplan/ar-audio.webp', { ar: 'مشغّل الصوتيات', en: 'Audio player', de: 'Audioplayer' }, 780, 1688), lang: 'ar' },
    { ...phone('/projects/trainingsplan/ar-settings.webp', { ar: 'الإعدادات والبيانات', en: 'Settings and data', de: 'Einstellungen und Daten' }, 780, 1688), lang: 'ar' },
  ],
};

export function getProjectGallery(projectId: string, lang?: SupportedLanguage): ProjectShot[] {
  const shots = projectGalleries[projectId] ?? [];
  if (!lang || !shots.some((s) => s.lang)) return shots;
  const own = shots.filter((s) => !s.lang || s.lang === lang);
  if (own.some((s) => s.lang)) return own;
  // لا لقطات بهذه اللغة: نعرض الألمانية كلغة افتراضية.
  return shots.filter((s) => !s.lang || s.lang === 'de');
}
