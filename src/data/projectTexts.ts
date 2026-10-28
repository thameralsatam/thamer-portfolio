import { ProjectLocalizedContent, SupportedLanguage } from '../types';

/** نصوص المشاريع بالإنكليزية والألمانية، بمفتاح معرّف المشروع. تُملأ في الملف التالي. */
export const projectTexts: Partial<Record<SupportedLanguage, Record<string, ProjectLocalizedContent>>> = {};
