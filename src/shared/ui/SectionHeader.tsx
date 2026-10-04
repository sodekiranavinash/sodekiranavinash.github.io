import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  eyebrow,
}) => {
  return (
    <header className="mb-8 space-y-3 md:mb-12">
      {eyebrow ? (
        <p className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-fg md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">{description}</p>
      ) : null}
    </header>
  );
};