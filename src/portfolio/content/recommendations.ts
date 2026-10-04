import enRecommendations from '../i18n/en/recommendations.json';
import type { Locale } from '@shared/context/ThemeContext';
import { loadNamespace } from '../i18n/loadNamespace';

export interface RecommendationItem {
  id: string;
  name: string;
  profileUrl: string;
  role: string;
  company: string;
  experience: string;
  quote: string;
}

export interface RecommendationsSectionLabels {
  eyebrow?: string;
  heading: string;
  description: string;
  previous: string;
  next: string;
}

export interface RecommendationsContent {
  section: RecommendationsSectionLabels;
  items: RecommendationItem[];
}

export const recommendationsContentByLocale =
  loadNamespace<RecommendationsContent>('recommendations');

export const getRecommendationsContent = (locale?: Locale): RecommendationsContent => {
  if (!locale || !recommendationsContentByLocale[locale]) {
    return enRecommendations as RecommendationsContent;
  }
  return recommendationsContentByLocale[locale];
};
