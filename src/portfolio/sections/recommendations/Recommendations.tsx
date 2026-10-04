import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getRecommendationsContent } from '../../content/recommendations';
import { getCommonContent } from '../../content/common';
import { useLocale } from '@shared/context/ThemeContext';
import { Container } from '@shared/ui/Container';
import { Section } from '@shared/ui/Section';
import { SectionHeader } from '@shared/ui/SectionHeader';
import { RecommendationCard } from './RecommendationCard';

const GAP = 16;
const TRANSITION_MS = 500;
const ARROW_SIZE = 36;
const SCROLL_STEP = 2;

const getVisibleCount = (width: number) => (width >= 640 ? 2 : 1);

const getRowGap = (width: number) => (width >= 640 ? 16 : 12);

const arrowButtonClass = (enabled: boolean) =>
  [
    'inline-flex h-9 w-9 shrink-0 self-center items-center justify-center rounded-full border transition-all duration-200',
    enabled
      ? 'carousel-arrow border-strong bg-elevated text-fg hover:scale-105 hover:border-[var(--border-focus)]'
      : 'border-default bg-base text-muted cursor-not-allowed opacity-30',
  ].join(' ');

export const Recommendations: React.FC = () => {
  const { locale } = useLocale();
  const content = getRecommendationsContent(locale);
  const t = content.section;
  const items = content.items;

  const rowRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(2);
  const [cardWidth, setCardWidth] = useState<number | null>(null);
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, items.length - visibleCount);
  const canGoPrev = index > 0;
  const canGoNext = index < maxIndex;

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const updateLayout = () => {
      const rowWidth = row.clientWidth;
      if (rowWidth === 0) return;

      const screenWidth = window.innerWidth;
      const visible = getVisibleCount(screenWidth);
      const rowGap = getRowGap(screenWidth);
      const tileAreaWidth = rowWidth - ARROW_SIZE * 2 - rowGap * 2;
      const width = (tileAreaWidth - GAP * (visible - 1)) / visible;

      setVisibleCount(visible);
      setCardWidth(Math.max(width, 0));
    };

    updateLayout();

    const observer = new ResizeObserver(updateLayout);
    observer.observe(row);
    window.addEventListener('resize', updateLayout);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, Math.max(0, items.length - visibleCount)));
  }, [visibleCount, items.length]);

  const step = cardWidth !== null ? cardWidth + GAP : 0;
  const translateX = -index * step;

  return (
    <Section id="recommendations" tone="base">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.heading} description={t.description} />

        <div ref={rowRef} className="mt-2 flex items-stretch gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setIndex((prev) => Math.max(prev - SCROLL_STEP, 0))}
            disabled={!canGoPrev}
            aria-label={t.previous}
            className={arrowButtonClass(canGoPrev)}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
          </button>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div
              className="flex gap-4"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: `transform ${TRANSITION_MS}ms ease-in-out`,
              }}
            >
              {items.map((item, itemIndex) => (
                <RecommendationCard
                  key={item.id}
                  item={item}
                  number={itemIndex + 1}
                  profileAriaLabel={getCommonContent(locale).a11y.viewLinkedInProfile.replace(
                    '{name}',
                    item.name,
                  )}
                  style={cardWidth !== null ? { width: cardWidth, minWidth: cardWidth } : undefined}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIndex((prev) => Math.min(prev + SCROLL_STEP, maxIndex))}
            disabled={!canGoNext}
            aria-label={t.next}
            className={arrowButtonClass(canGoNext)}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
          </button>
        </div>
      </Container>
    </Section>
  );
};
