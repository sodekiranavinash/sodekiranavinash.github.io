import React from 'react';

interface Metric {
  label: string;
  value: string;
  description?: string;
}

interface AboutMetricsProps {
  metrics: Metric[];
}

export const AboutMetrics: React.FC<AboutMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 divide-y divide-[var(--border)] border-y border-[var(--border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {metrics.map((metric) => (
        <div key={metric.label} className="py-5 sm:px-6 sm:py-6 sm:first:pl-0">
          <p className="font-display text-2xl font-semibold text-fg sm:text-3xl">{metric.value}</p>
          <p className="mt-1 text-sm font-medium text-fg">{metric.label}</p>
          {metric.description ? (
            <p className="mt-0.5 text-xs text-subtle">{metric.description}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
};