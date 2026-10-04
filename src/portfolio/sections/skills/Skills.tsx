import React from 'react';
import { getSkillsContent } from '../../content/skills';
import { useLocale } from '@shared/context/ThemeContext';
import { Container } from '@shared/ui/Container';
import { Section } from '@shared/ui/Section';
import { SectionHeader } from '@shared/ui/SectionHeader';
import { SkillRow } from './SkillRow';

export const Skills: React.FC = () => {
  const { locale } = useLocale();
  const content = getSkillsContent(locale);
  const t = content.section;

  return (
    <Section id="skills" tone="muted">
      <Container>
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.heading}
          description={t.description}
        />
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {content.categories.map((category) => (
            <SkillRow key={category.categoryName} category={category} />
          ))}
        </div>
      </Container>
    </Section>
  );
};