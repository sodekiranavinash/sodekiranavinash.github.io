import enAwards from '../i18n/en/awards.json';
import type { Locale } from '@shared/context/ThemeContext';
import { loadNamespace } from '../i18n/loadNamespace';

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface AwardsSectionLabels {
  eyebrow?: string;
  heading: string;
  description?: string;
}

export interface AwardsContent {
  section: AwardsSectionLabels;
  items: AwardItem[];
}

export const awardsContentByLocale = loadNamespace<AwardsContent>('awards');

export const getAwardsContent = (locale?: Locale): AwardsContent => {
  if (!locale || !awardsContentByLocale[locale]) {
    return enAwards as AwardsContent;
  }
  return awardsContentByLocale[locale];
};
