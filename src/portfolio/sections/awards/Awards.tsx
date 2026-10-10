import React from 'react';
import { Award } from 'lucide-react';
import { getAwardsContent } from '../../content/awards';
import { useLocale } from '@shared/context/ThemeContext';
import { Container } from '@shared/ui/Container';
import { Section } from '@shared/ui/Section';
import { SectionHeader } from '@shared/ui/SectionHeader';

export const Awards: React.FC = () => {
  const { locale } = useLocale();
  const content = getAwardsContent(locale);
  const t = content.section;

  return (
    <Section id="awards" tone="base">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.heading} description={t.description} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => (
            <article
              key={item.id}
              className="card-surface flex flex-col gap-5 p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                  <Award className="h-5 w-5 text-accent" />
                </span>
                <span className="tag">{item.year}</span>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-fg">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};
