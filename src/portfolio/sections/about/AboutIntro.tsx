import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { BrandIcon } from '../../components/BrandIcon';
import { BorderBeam } from '@shared/ui/BorderBeam';
import { Button } from '@shared/ui/Button';
import { useResumeViewer } from '../../hooks/useResumeViewer';
import type { SocialLink } from '../../content/about';
import { AboutPortrait } from './AboutPortrait';

interface AboutIntroProps {
  name: string;
  title: string;
  description: string;
  availability: string;
  resumeUrl: string;
  downloadCvLabel: string;
  tryOneAgentLabel: string;
  tryOneAgentUrl: string;
  email: string;
  emailLabel: string;
  socialLinks: SocialLink[];
}

export const AboutIntro: React.FC<AboutIntroProps> = ({
  name,
  title,
  description,
  availability,
  resumeUrl,
  downloadCvLabel,
  tryOneAgentLabel,
  tryOneAgentUrl,
  email,
  emailLabel,
  socialLinks,
}) => {
  const { openViewer, resumeViewer } = useResumeViewer({
    src: resumeUrl,
    downloadLabel: downloadCvLabel,
  });
  const linkedIn = socialLinks.find((link) => link.platform.toLowerCase().includes('linkedin'));
  const github = socialLinks.find((link) => link.platform.toLowerCase().includes('github'));
  const contactItems = [
    github && {
      key: 'github',
      label: github.platform,
      href: github.url,
      external: true,
      icon: 'github',
    },
    linkedIn && {
      key: 'linkedin',
      label: linkedIn.platform,
      href: linkedIn.url,
      external: true,
      icon: 'linkedin',
    },
    {
      key: 'email',
      label: emailLabel,
      href: `mailto:${email}`,
      external: false,
      icon: 'mail',
    },
  ].filter(Boolean) as Array<{
    key: string;
    label: string;
    href: string;
    external: boolean;
    icon: string;
  }>;

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
      <div className="order-2 flex flex-col space-y-6 lg:order-1">
        {availability ? (
          <p className="inline-flex items-center gap-2 font-mono text-xs text-subtle">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            {availability}
          </p>
        ) : null}

        <div className="space-y-2">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            {name}
          </h1>
          <p className="text-lg text-muted">{title}</p>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-muted">{description}</p>

        <div className="flex flex-wrap items-center gap-3">
          <Button className="gap-2" onClick={openViewer} aria-haspopup="dialog">
            <Download className="h-4 w-4" />
            {downloadCvLabel}
          </Button>
          <BorderBeam activateAlways>
            <a href={tryOneAgentUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="relative z-10 gap-2">
                {tryOneAgentLabel}
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </a>
          </BorderBeam>
        </div>

        <div className="flex items-center gap-2 pt-1">
          {contactItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              aria-label={item.label}
              title={item.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-default text-muted transition-colors duration-200 hover:border-strong hover:text-fg"
            >
              <BrandIcon name={item.icon} className="h-4 w-4" />
            </a>
          ))}
          <a
            href={`mailto:${email}`}
            className="ml-1 text-sm text-muted transition-colors hover:text-fg"
          >
            {email}
          </a>
        </div>
      </div>

      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <AboutPortrait alt={name} />
      </div>

      {resumeViewer}
    </div>
  );
};