import enExperience from '../i18n/en/experience.json';
import type { Locale } from '@shared/context/ThemeContext';
import { loadNamespace } from '../i18n/loadNamespace';
import type { TimelineItem } from './resume';

export interface ExperienceSectionLabels {
  eyebrow?: string;
  heading: string;
  description: string;
  readMore: string;
  close: string;
  roleAndResponsibilities: string;
  projects: string;
}

export interface ExperienceContent {
  section: ExperienceSectionLabels;
  items: TimelineItem[];
}

export const experienceContentByLocale = loadNamespace<ExperienceContent>('experience');

export const getExperienceContent = (locale?: Locale): ExperienceContent => {
  if (!locale || !experienceContentByLocale[locale]) {
    return enExperience as ExperienceContent;
  }
  return experienceContentByLocale[locale];
};
