import React from 'react';
import { ProjectCard } from './ProjectCard';

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

interface ProjectListProps {
  projects: Project[];
  variant: 'personal' | 'professional';
  liveLabel: string;
  sourceLabel: string;
  architectureLabel: string;
  readMoreLabel: string;
  onReadMore: (id: string) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  variant,
  liveLabel,
  sourceLabel,
  architectureLabel,
  readMoreLabel,
  onReadMore,
}) => {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          variant={variant}
          liveLabel={liveLabel}
          sourceLabel={sourceLabel}
          architectureLabel={architectureLabel}
          readMoreLabel={readMoreLabel}
          onReadMore={onReadMore}
        />
      ))}
    </div>
  );
};