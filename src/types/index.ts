export type SupportedLanguage = 'de' | 'ar' | 'en' | 'tr';

export type TextDirection = 'ltr' | 'rtl';

export type ProjectStatusKey =
  | 'fontat'
  | 'umayyad_mosque'
  | 'trainingsplan'
  | 'studio_lab'
  | 'arabic_font_tool';

export interface ProjectLocalizedContent {
  title: string;
  summary: string;
  problem?: string;
  solution?: string;
  role?: string;
  limitations?: string;
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
  category: string;
  technologies: string[];
  features: string[];
  links: ProjectLinks;
  coverImage?: string;
  gallery: string[];
  demoVideo?: string;
  featured: boolean;
  translations: Record<SupportedLanguage, ProjectLocalizedContent>;
}

export type ThemeMode = 'system' | 'light' | 'dark';

export interface NavItem {
  key: string;
  path: string;
}
