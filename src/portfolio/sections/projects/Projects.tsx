import React, { useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { getProjectsContent } from '../../content/projects';
import type { ProjectItem } from '../../content/projects';
import { useLocale } from '@shared/context/ThemeContext';
import { Container } from '@shared/ui/Container';
import { Section } from '@shared/ui/Section';
import { SectionHeader } from '@shared/ui/SectionHeader';
import { Modal } from '../../components/Modal';
import { Tag } from '@shared/ui/Tag';
import { Button } from '@shared/ui/Button';
import { ProjectList } from './ProjectList';

const isPersonalProject = (project: ProjectItem, personalProjects: ProjectItem[]) =>
  project.category === 'personal' || personalProjects.some((item) => item.id === project.id);

const ProjectModalLinks: React.FC<{
  project: ProjectItem;
  liveLabel: string;
  sourceLabel: string;
  architectureLabel: string;
}> = ({ project, liveLabel, sourceLabel, architectureLabel }) => {
  if (!project.liveUrl && !project.sourceUrl && !project.architectureUrl) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="gap-1.5">
            {liveLabel}
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </a>
      ) : null}
      {project.sourceUrl ? (
        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="sm" className="gap-1.5">
            {sourceLabel}
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </a>
      ) : null}
      {project.architectureUrl ? (
        <a href={project.architectureUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="sm" className="gap-1.5">
            {architectureLabel}
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </a>
      ) : null}
    </div>
  );
};

export const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { locale } = useLocale();
  const content = getProjectsContent(locale);
  const t = content.section;

  const personalProjects = useMemo(() => content.personal || [], [content]);
  const professionalProjects = useMemo(() => content.professional || [], [content]);
  const allProjects = [...personalProjects, ...professionalProjects];
  const active = selectedId ? allProjects.find((p) => p.id === selectedId) : null;
  const isPersonal = active ? isPersonalProject(active, personalProjects) : false;

  const companyGroups = useMemo(() => {
    const map = new Map<string, ProjectItem[]>();
    for (const project of professionalProjects) {
      const key = project.company || 'Other';
      const list = map.get(key);
      if (list) {
        list.push(project);
      } else {
        map.set(key, [project]);
      }
    }
    return Array.from(map.entries());
  }, [professionalProjects]);

  return (
    <Section id="projects" tone="muted">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.heading} description={t.description} />

        <div className="space-y-14">
          {personalProjects.length ? (
            <div className="rounded-2xl border border-default bg-[var(--accent-soft)] p-6 md:p-7">
              <div className="grid gap-6 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10">
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--accent)]">
                    {t.personal}
                  </h3>
                  <p className="mono-label mt-1">
                    {personalProjects.length} {personalProjects.length === 1 ? 'project' : 'projects'}
                  </p>
                </div>
                <ProjectList
                  projects={personalProjects}
                  variant="personal"
                  liveLabel={t.live}
                  sourceLabel={t.source}
                  architectureLabel={t.architecture}
                  readMoreLabel={t.readMore}
                  onReadMore={setSelectedId}
                />
              </div>
            </div>
          ) : null}

          <div className="space-y-12">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-lg font-semibold text-fg">{t.professional}</h3>
              <span className="mono-label">
                {professionalProjects.length} projects · {companyGroups.length} teams
              </span>
            </div>

            {companyGroups.map(([company, projects]) => (
              <div
                key={company}
                className="grid gap-6 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10"
              >
                <div className="md:sticky md:top-24 md:self-start">
                  <h4 className="font-display text-base font-semibold text-fg">{company}</h4>
                  <p className="mono-label mt-1">
                    {projects.length} {projects.length === 1 ? 'project' : 'projects'}
                  </p>
                </div>
                <ProjectList
                  projects={projects}
                  variant="professional"
                  liveLabel={t.live}
                  sourceLabel={t.source}
                  architectureLabel={t.architecture}
                  readMoreLabel={t.readMore}
                  onReadMore={setSelectedId}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Modal
        open={Boolean(active)}
        onClose={() => setSelectedId(null)}
        title={active?.title ?? ''}
        closeLabel={t.close}
      >
        {active ? (
          <div className="space-y-6">
            {active.company ? (
              <p className="font-mono text-xs tracking-wide text-subtle uppercase">{active.company}</p>
            ) : null}

            {isPersonal ? (
              <p className="text-sm leading-relaxed text-muted">{active.summary}</p>
            ) : null}

            {!isPersonal && active.caseStudy ? (
              <div>
                <h4 className="font-mono text-xs tracking-wide text-subtle uppercase">{t.caseStudy}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">{active.caseStudy}</p>
              </div>
            ) : null}

            {active.fullDetails?.length ? (
              <div>
                <h4 className="font-mono text-xs tracking-wide text-subtle uppercase">{t.highlights}</h4>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {active.fullDetails.map((detail, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {active.allSkills?.length ? (
              <div>
                <h4 className="font-mono text-xs tracking-wide text-subtle uppercase">{t.skills}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.allSkills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            ) : null}

            {isPersonal ? (
              <ProjectModalLinks
                project={active}
                liveLabel={t.live}
                sourceLabel={t.source}
                architectureLabel={t.architecture}
              />
            ) : null}
          </div>
        ) : null}
      </Modal>
    </Section>
  );
};