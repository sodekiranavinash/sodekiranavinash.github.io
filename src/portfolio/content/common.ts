import enCommon from '../i18n/en/common.json';
import type { Locale } from '@shared/context/ThemeContext';
import { loadNamespace } from '../i18n/loadNamespace';

export interface CommonContent {
  nav: {
    about: string;
    experience: string;
    projects: string;
    awards: string;
    recommendations: string;
    skills: string;
  };
  footer: {
    tagline: string;
    rights: string;
    privacyPolicy: string;
    lastUpdated: string;
    back: string;
  };
  a11y: {
    selectLanguage: string;
    toggleTheme: string;
    toggleMenu: string;
    closeModal: string;
    previousRecommendation: string;
    nextRecommendation: string;
    viewLinkedInProfile: string;
  };
}

export const commonContentByLocale = loadNamespace<CommonContent>('common');

export const getCommonContent = (locale?: Locale): CommonContent => {
  if (!locale || !commonContentByLocale[locale]) {
    return enCommon as CommonContent;
  }
  return commonContentByLocale[locale];
};
