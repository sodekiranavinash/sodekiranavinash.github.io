import enProjects from '../i18n/en/projects.json';
import type { Locale } from '@shared/context/ThemeContext';
import { loadNamespace } from '../i18n/loadNamespace';

export interface ProjectItem {
  id: string;
  title: string;
  company?: string;
  summary: string;
  bullets: string[];
  imageUrl?: string;
  topSkills: string[];
  allSkills: string[];
  liveUrl?: string;
  sourceUrl?: string;
  architectureUrl?: string;
  category?: 'personal' | 'professional';
  caseStudy?: string;
  fullDetails: string[];
}

export interface ProjectsSectionLabels {
  eyebrow?: string;
  heading: string;
  description?: string;
  personal: string;
  professional: string;
  live: string;
  source: string;
  architecture: string;
  readMore: string;
  close: string;
  caseStudy: string;
  highlights: string;
  skills: string;
}

export interface ProjectsContent {
  section: ProjectsSectionLabels;
  personal: ProjectItem[];
  professional: ProjectItem[];
}

export const projectsContentByLocale = loadNamespace<ProjectsContent>('projects');

export const projectsContent: ProjectsContent = projectsContentByLocale.en;

export const getProjectsContent = (locale?: Locale): ProjectsContent => {
  if (!locale || !projectsContentByLocale[locale]) {
    return enProjects as ProjectsContent;
  }
  return projectsContentByLocale[locale];
};
