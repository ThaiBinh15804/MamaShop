'use client';

import React, { ReactNode, useMemo } from 'react';

import {
  SPACING,
  RESPONSIVE_MOBILE,
  RESPONSIVE_TABLET,
  RESPONSIVE_DESKTOP,
} from '@/lib/design-tokens';
import { cn } from '@/utils/cn';

export interface ChoiceGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Grid items (typically ChoiceCard components) */
  children: ReactNode;

  /** Gap between grid items (default: "MD" for 16px) */
  gap?: 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'XXL' | number;
}

/**
 * ChoiceGrid - A responsive grid wrapper for ChoiceCard components
 *
 * Uses CSS media queries to adapt the number of columns based on screen size:
 * - Mobile (< 640px): 2 columns
 * - Tablet (640px - 1024px): 2 columns
 * - Desktop (>= 1024px): 4 columns
 *
 * Gap is configurable via design tokens for consistent spacing.
 *
 * @example
 * ```tsx
 * <ChoiceGrid gap="MD">
 *   <ChoiceCard label="Option 1" icon={<Icon />} />
 *   <ChoiceCard label="Option 2" icon={<Icon />} />
 * </ChoiceGrid>
 * ```
 */
export const ChoiceGrid = React.forwardRef<HTMLDivElement, ChoiceGridProps>(
  ({ children, gap = 'MD', className, style, ...props }, ref) => {
    // Get gap value from spacing tokens
    const gapValue = useMemo(() => {
      if (typeof gap === 'number') return gap;
      return SPACING[gap as keyof typeof SPACING] ?? SPACING[4] ?? 16;
    }, [gap]);

    // Build responsive grid styles - defaults to mobile, overridden by media queries
    const gridStyle = useMemo<React.CSSProperties>(
      () => ({
        display: 'grid',
        gridTemplateColumns: `repeat(${RESPONSIVE_MOBILE.GRID_COLUMNS}, 1fr)`,
        gap: gapValue,
        width: '100%',
        justifyItems: 'center',
        ...style,
      }),
      [gapValue, style],
    );

    // CSS for media query responsive columns
    const mediaQueryStyles = `
      @media (min-width: 640px) and (max-width: 1023px) {
        .choice-grid-container {
          grid-template-columns: repeat(${RESPONSIVE_TABLET.GRID_COLUMNS}, 1fr);
        }
      }
      @media (min-width: 1024px) {
        .choice-grid-container {
          grid-template-columns: repeat(${RESPONSIVE_DESKTOP.GRID_COLUMNS}, 1fr);
        }
      }
    `;

    return (
      <>
        <style>{mediaQueryStyles}</style>
        <div
          ref={ref}
          className={cn('w-full choice-grid-container', className)}
          style={gridStyle}
          {...props}
        >
          {children}
        </div>
      </>
    );
  },
);

ChoiceGrid.displayName = 'ChoiceGrid';

export default ChoiceGrid;
