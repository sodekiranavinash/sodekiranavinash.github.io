import React, { useState } from 'react';
import { getExperienceContent } from '../../content/experience';
import { useLocale } from '@shared/context/ThemeContext';
import { Container } from '@shared/ui/Container';
import { Section } from '@shared/ui/Section';
import { SectionHeader } from '@shared/ui/SectionHeader';
import { Modal } from '../../components/Modal';
import { ExperienceCard } from './ExperienceCard';

export const Experience: React.FC = () => {
  const { locale } = useLocale();
  const content = getExperienceContent(locale);
  const t = content.section;
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const active = selectedId ? content.items.find((item) => item.id === selectedId) : null;

  return (
    <Section id="experience" tone="base">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.heading} description={t.description} />
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {content.items.map((item) => (
            <ExperienceCard
              key={item.id}
              item={item}
              readMoreLabel={t.readMore}
              onReadMore={setSelectedId}
            />
          ))}
        </div>
      </Container>

      <Modal
        open={Boolean(active)}
        onClose={() => setSelectedId(null)}
        title={active?.roleOrDegree ?? ''}
        closeLabel={t.close}
      >
        {active ? (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm text-subtle">{active.organization}</p>
              <span className="rounded-full border border-default px-3 py-1 font-mono text-xs text-subtle">
                {active.period}
              </span>
            </div>

            {active.roleAndResponsibilities?.length ? (
              <div>
                <h4 className="font-mono text-xs tracking-wide text-subtle uppercase">
                  {t.roleAndResponsibilities}
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {active.roleAndResponsibilities.map((detail, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {active.projectHighlights?.length ? (
              <div>
                <h4 className="font-mono text-xs tracking-wide text-subtle uppercase">{t.projects}</h4>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {active.projectHighlights.map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-2)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </Section>
  );
};