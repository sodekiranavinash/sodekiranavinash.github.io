import React from 'react';
import { Section } from '@shared/ui/Section';
import { Container } from '@shared/ui/Container';
import { getResumeContent } from '../content/resume';
import { useLocale } from '@shared/context/ThemeContext';
import { useResumeViewer } from '../hooks/useResumeViewer';
import { Download, Eye, Award } from 'lucide-react';

export const Resume: React.FC = () => {
  const { locale } = useLocale();
  const content = getResumeContent(locale);
  const t = content.section;
  const { openViewer, resumeViewer } = useResumeViewer({
    src: content.resumeUrl,
    downloadLabel: t.downloadResume,
  });

  return (
    <Section id="resume">
      <Container>
      <div className="space-y-4 mb-16 text-center">
        <p className="inline-flex items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300 px-4 py-2 text-xs uppercase tracking-[0.24em] font-semibold">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          {t.heading}
        </h2>
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="glass-card rounded-[1.5rem] border border-slate-200/60 dark:border-slate-800/60 bg-white/85 dark:bg-slate-950/70 p-10 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.reviewOrDownload}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={openViewer}
                aria-haspopup="dialog"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white hover:bg-slate-800 transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>{t.reviewResume}</span>
              </button>
              <button
                type="button"
                onClick={openViewer}
                aria-haspopup="dialog"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 px-6 py-4 text-sm font-semibold text-white hover:from-violet-700 hover:to-cyan-600 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>{t.downloadResume}</span>
              </button>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[1.5rem] border border-slate-200/60 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-950/70 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-violet-100 dark:bg-violet-950/40 p-3 text-violet-600 dark:text-violet-300">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] font-semibold text-slate-500 dark:text-slate-400">{t.highlights}</p>
                <p className="text-base font-semibold text-slate-900 dark:text-white">{t.certifications}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {content.certifications.map((cert) => (
              <article
                key={cert.id}
                className="rounded-[1.5rem] border border-slate-200/60 dark:border-slate-800/60 bg-white/85 dark:bg-slate-950/70 p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{cert.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
                  </div>
                  <span className="inline-flex rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                    {cert.date}
                  </span>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:text-indigo-700"
                  >
                    {t.verifyCredential}
                  </a>
                )}
              </article>
            ))}
          </div>
        </aside>
      </div>

      {resumeViewer}
      </Container>
    </Section>
  );
};
