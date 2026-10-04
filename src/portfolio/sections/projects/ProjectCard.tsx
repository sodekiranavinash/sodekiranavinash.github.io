import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { BorderBeam } from '@shared/ui/BorderBeam';
import { Tag } from '@shared/ui/Tag';
import { Button } from '@shared/ui/Button';

interface Project {
  id: string;
  title: string;
  company?: string;
  summary: string;
  bullets?: string[];
  topSkills?: string[];
  liveUrl?: string;
  sourceUrl?: string;
  architectureUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  variant: 'personal' | 'professional';
  liveLabel: string;
  sourceLabel: string;
  architectureLabel: string;
  readMoreLabel: string;
  onReadMore: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant,
  liveLabel,
  sourceLabel,
  architectureLabel,
  readMoreLabel,
  onReadMore,
}) => {
  const isPersonal = variant === 'personal';

  const externalLink = (href: string, label: string, primary = false) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button variant={primary ? 'primary' : 'secondary'} size="sm" className="gap-1.5">
        {label}
        <ExternalLink className="h-3.5 w-3.5" />
      </Button>
    </a>
  );

  const readMore = (
    <BorderBeam activateOnGroupHover>
      <Button
        variant="secondary"
        size="sm"
        className="relative z-10 gap-1.5"
        onClick={() => onReadMore(project.id)}
      >
        {readMoreLabel}
        <ArrowRight className="h-3.5 w-3.5" />
      </Button>
    </BorderBeam>
  );

  return (
    <article className="group grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-base font-semibold text-fg">{project.title}</h3>
          {isPersonal && project.company ? (
            <span className="mono-label tracking-[0.12em] uppercase">{project.company}</span>
          ) : null}
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

        {project.topSkills?.length ? (
          <div className="flex flex-wrap gap-1.5">
            {project.topSkills.slice(0, 6).map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        ) : null}

        {isPersonal ? (
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {project.liveUrl ? externalLink(project.liveUrl, liveLabel, true) : null}
            {project.sourceUrl ? externalLink(project.sourceUrl, sourceLabel) : null}
            {project.architectureUrl ? externalLink(project.architectureUrl, architectureLabel) : null}
            {readMore}
          </div>
        ) : null}
      </div>

      {!isPersonal ? <div className="flex items-start gap-2 md:pt-0.5">{readMore}</div> : null}
    </article>
  );
};