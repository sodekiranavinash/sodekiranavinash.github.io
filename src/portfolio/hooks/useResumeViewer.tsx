import { useCallback, useState } from 'react';
import { useI18n } from '../i18n/useI18n';
import { ResumeViewerModal } from '../components/ResumeViewerModal';

// Small screens can't embed a PDF reliably, so hand those off to the native viewer.
const NATIVE_VIEWER_QUERY = '(max-width: 640px)';

const prefersNativeViewer = () =>
  typeof window !== 'undefined' && window.matchMedia(NATIVE_VIEWER_QUERY).matches;

interface UseResumeViewerOptions {
  src: string;
  downloadLabel: string;
}

export const useResumeViewer = ({ src, downloadLabel }: UseResumeViewerOptions) => {
  const [open, setOpen] = useState(false);
  const { common } = useI18n();
  const fileName = src.split('/').pop()?.split('#')[0] || 'resume.pdf';

  const openViewer = useCallback(() => {
    if (prefersNativeViewer()) {
      window.open(src, '_blank', 'noopener,noreferrer');
      return;
    }

    setOpen(true);
  }, [src]);

  const closeViewer = useCallback(() => setOpen(false), []);

  const resumeViewer = (
    <ResumeViewerModal
      open={open}
      onClose={closeViewer}
      src={src}
      title={fileName}
      downloadLabel={downloadLabel}
      closeLabel={common.a11y.closeModal}
    />
  );

  return { openViewer, resumeViewer };
};
