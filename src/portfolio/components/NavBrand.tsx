import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useI18n from '../i18n/useI18n';

export const NavBrand: React.FC = () => {
  const bundle = useI18n();
  const location = useLocation();
  const initials = bundle.about.name
    .split(' ')
    .map((part: string) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <Link
      to="/"
      onClick={(e) => {
        if (location.pathname === '/') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }}
      className="group flex items-center gap-2.5"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-strong font-mono text-xs font-semibold text-fg transition-colors group-hover:border-[var(--fg-secondary)] group-hover:text-[var(--accent)]">
        {initials}
      </span>
      <span className="font-display text-sm font-semibold text-fg">{bundle.about.name}</span>
    </Link>
  );
};