import { SupportedLanguage } from '../types';

export type ShotDevice = 'laptop' | 'phone';

export interface ProjectShot {
  /** المسار داخل مجلد public، ويبدأ بـ / */
  src: string;
  device: ShotDevice;
  width: number;
  height: number;
  caption: Record<SupportedLanguage, string>;
}

const laptop = (file: string, caption: string, width = 1440, height = 900): ProjectShot => ({
  src: file,
  device: 'laptop',
  width,
  height,
  caption: { ar: caption, en: caption, de: caption },
});

const phone = (file: string, caption: string, width = 780, height = 1688): ProjectShot => ({
  src: file,
  device: 'phone',
  width,
  height,
  caption: { ar: caption, en: caption, de: caption },
});

/**
 * لقطات الشاشة لكل مشروع، مفهرسة بمعرّف المشروع.
 * الصور موجودة في public/projects/<معرّف المشروع>/ .
 * مشروع بلا مدخل هنا لا يُعرض له معرض.
 */
export const projectGalleries: Record<string, ProjectShot[]> = {
  fontat: [
    laptop('/projects/fontat/laptop-home.webp', 'الصفحة الرئيسية على الحاسوب', 2612, 1632),
    laptop('/projects/fontat/laptop-lab.webp', 'مختبر الخطوط: معاينة خط تجريبي وبياناته', 2612, 1632),
    phone('/projects/fontat/mobile-home.webp', 'الصفحة الرئيسية على الهاتف مع شريط التنقل السفلي', 1408, 3048),
    phone('/projects/fontat/mobile-lab.webp', 'بيانات الخط في المختبر على الهاتف', 1706, 3688),
  ],
  'umayyad-mosque': [
    laptop('/projects/umayyad-mosque/laptop-hero.webp', 'الشاشة الرئيسية'),
    laptop('/projects/umayyad-mosque/laptop-mosaics.webp', 'قسم الفسيفساء: جدارية وادي بردى'),
    phone('/projects/umayyad-mosque/mobile-prayer.webp', 'مواقيت الصلاة على الهاتف'),
    phone('/projects/umayyad-mosque/mobile-history.webp', 'المسار التاريخي على الهاتف'),
  ],
  'studio-lab': [
    laptop('/projects/studio-lab/laptop-projects.webp', 'قائمة المشاريع'),
    laptop('/projects/studio-lab/laptop-editor.webp', 'المحرر مع المعاينة الحية'),
    phone('/projects/studio-lab/mobile-code.webp', 'المحرر على الهاتف'),
    phone('/projects/studio-lab/mobile-preview.webp', 'المعاينة على الهاتف'),
  ],
  trainingsplan: [
    phone('/projects/trainingsplan/mobile-schedule.webp', 'جدول التمارين اليومي', 720, 1640),
    phone('/projects/trainingsplan/mobile-audio.webp', 'مشغّل الصوتيات', 720, 1640),
    phone('/projects/trainingsplan/mobile-settings.webp', 'الإعدادات والبيانات', 720, 1640),
  ],
};

export function getProjectGallery(projectId: string): ProjectShot[] {
  return projectGalleries[projectId] ?? [];
}
