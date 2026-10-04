import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme, useLocale } from '@shared/context/ThemeContext';
import type { Locale } from '@shared/context/ThemeContext';
import { LOCALES, LOCALE_NATIVE_NAMES } from '../i18n/locales';
import { getCommonContent } from '../content/common';

export const NavControls: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useLocale();
  const a11y = getCommonContent(locale).a11y;

  return (
    <div className="flex items-center gap-2">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className="h-8 appearance-none rounded-lg border border-default bg-transparent px-2.5 pr-6 font-mono text-xs uppercase tracking-wide text-muted outline-none transition-colors hover:border-strong hover:text-fg"
        aria-label={a11y.selectLanguage}
      >
        {LOCALES.map((code) => (
          <option key={code} value={code} title={LOCALE_NATIVE_NAMES[code]}>
            {code}
          </option>
        ))}
      </select>

      <button
        onClick={toggleTheme}
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-default text-muted transition-colors hover:border-strong hover:text-fg"
        aria-label={a11y.toggleTheme}
      >
        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
    </div>
  );
};