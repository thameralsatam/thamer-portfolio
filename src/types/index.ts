// اللغات المدعومة حاليا: العربية فقط.
// لإضافة لغة لاحقا: أضفها هنا ثم أضف نصوصها في translations.ts و projects.ts.
export type SupportedLanguage = 'ar';

export type TextDirection = 'ltr' | 'rtl';

export type ProjectStatusKey =
  | 'fontat'
  | 'umayyad_mosque'
  | 'trainingsplan'
  | 'studio_lab'
  | 'arabic_font_tool';

export interface ProjectLocalizedContent {
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  limitations: string;
  features: string[];
}

export interface ProjectLinks {
  liveUrl?: string;
  githubUrl?: string;
  demoVideoUrl?: string;
}

export interface Project {
  id: string;
  slug: string;
  statusKey: ProjectStatusKey;
  technologies: string[];
  links: ProjectLinks;
  featured: boolean;
  coverImage?: string;
  gallery?: string[];
  demoVideo?: string;
  translations: Record<SupportedLanguage, ProjectLocalizedContent>;
}
