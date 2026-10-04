import React from 'react';
import { motion } from 'framer-motion';
import useI18n from '../../i18n/useI18n';
import { useLocale } from '@shared/context/ThemeContext';
import { getResumeContent } from '../../content/resume';
import { Container } from '@shared/ui/Container';
import { Section } from '@shared/ui/Section';
import { AboutIntro } from './AboutIntro';
import { AboutBio } from './AboutBio';
import { AboutMetrics } from './AboutMetrics';

export const About: React.FC = () => {
  const bundle = useI18n();
  const { locale } = useLocale();
  const hero = bundle.about.hero;
  const t = bundle.about.section;
  const resumeContent = getResumeContent(locale);

  return (
    <Section id="about" tone="base" className="pt-24 pb-12 md:pt-28 md:pb-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="w-full space-y-10"
        >
          <AboutIntro
            name={bundle.about.name}
            title={bundle.about.title}
            description={hero.description}
            availability={hero.availability}
            resumeUrl={resumeContent.resumeUrl}
            downloadCvLabel={hero.downloadCv}
            tryOneAgentLabel={hero.tryOneAgent}
            tryOneAgentUrl={hero.tryOneAgentUrl}
            email={bundle.about.email}
            emailLabel={bundle.about.emailLabel}
            socialLinks={bundle.about.socialLinks || []}
          />

          <AboutMetrics metrics={bundle.about.metrics || []} />

          <div className="max-w-3xl space-y-3 border-t border-default pt-8">
            <h2 className="font-display text-lg font-semibold text-fg sm:text-xl">
              {t.aboutLabel}
            </h2>
            <AboutBio paragraphs={bundle.about.bioParagraphs || []} />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};