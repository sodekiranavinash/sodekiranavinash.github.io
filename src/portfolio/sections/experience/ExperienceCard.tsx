import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BorderBeam } from '@shared/ui/BorderBeam';
import type { TimelineItem } from '../../content/resume';

interface ExperienceCardProps {
  item: TimelineItem;
  readMoreLabel: string;
  onReadMore: (id: string) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  item,
  readMoreLabel,
  onReadMore,
}) => {
  return (
    <article className="group grid gap-3 py-6 md:grid-cols-[minmax(0,15rem)_1fr_auto] md:items-start md:gap-8 md:py-8">
      <div>
        <h3 className="font-display text-base font-semibold text-fg">{item.roleOrDegree}</h3>
        <p className="mt-0.5 text-sm text-muted">{item.organization}</p>
        <p className="mono-label mt-1">{item.period}</p>
      </div>

      <p className="text-sm leading-relaxed text-muted">
        {item.description.slice(0, 2).join(' ')}
      </p>

      <BorderBeam activateOnGroupHover className="justify-self-start md:justify-self-end">
        <button
          type="button"
          onClick={() => onReadMore(item.id)}
          className="btn-secondary btn-sm gap-1.5"
        >
          {readMoreLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </BorderBeam>
    </article>
  );
};