import React from 'react';
import { motion } from 'framer-motion';

type SectionTone = 'base' | 'muted';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: SectionTone;
  divider?: boolean;
}

const toneClasses: Record<SectionTone, string> = {
  base: 'section-base',
  muted: 'section-muted',
};

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  tone = 'base',
  divider = false,
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`py-16 transition-colors duration-300 md:py-24 ${toneClasses[tone]} ${divider ? 'section-divider' : ''} ${className}`}
    >
      {children}
    </motion.section>
  );
};