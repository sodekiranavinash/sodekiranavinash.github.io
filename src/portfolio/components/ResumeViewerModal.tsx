import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';

interface ResumeViewerModalProps {
  open: boolean;
  onClose: () => void;
  src: string;
  title: string;
  downloadLabel: string;
  closeLabel: string;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({
  open,
  onClose,
  src,
  title,
  downloadLabel,
  closeLabel,
}) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            className="relative flex h-[min(92dvh,calc(100dvh-2rem))] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-strong bg-[var(--bg-elevated)] shadow-2xl"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-default px-5 py-3.5">
              <p className="truncate font-mono text-sm text-muted">{title}</p>
              <div className="flex shrink-0 items-center gap-2">
                <a href={src} download className="btn-secondary btn-sm gap-1.5">
                  <Download className="h-3.5 w-3.5" />
                  {downloadLabel}
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-default text-muted transition-colors hover:border-strong hover:text-fg"
                  aria-label={closeLabel}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <iframe
              src={`${src}#view=FitH`}
              title={title}
              className="min-h-0 w-full flex-1 bg-white"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
};
