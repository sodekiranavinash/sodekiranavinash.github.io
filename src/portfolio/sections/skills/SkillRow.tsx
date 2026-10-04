import React from 'react';
import type { SkillCategory, SkillItem } from '../../content/skills';
import { Tag } from '@shared/ui/Tag';

interface SkillRowProps {
  category: SkillCategory;
}

export const SkillRow: React.FC<SkillRowProps> = ({ category }) => {
  return (
    <div className="grid gap-3 py-6 md:grid-cols-[220px_1fr] md:gap-10 md:py-7">
      <div>
        <h3 className="font-display text-base font-semibold text-fg">
          {category.categoryName}
        </h3>
        <p className="mono-label mt-1">{category.skills.length} skills</p>
      </div>

      <div className="flex flex-wrap gap-1.5 md:pt-0.5">
        {category.skills.map((skill: SkillItem) => (
          <Tag key={skill.name}>{skill.name}</Tag>
        ))}
      </div>
    </div>
  );
};