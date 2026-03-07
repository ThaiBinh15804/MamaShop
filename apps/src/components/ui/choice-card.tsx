'use client';

import React, { ReactNode } from 'react';

import { COLORS, SPACING, BORDER_RADIUS } from '@/lib/design-tokens';
import { cn } from '@/utils/cn';

export interface ChoiceCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon or SVG element to display */
  icon?: ReactNode;

  /** Label text displayed below icon */
  label: string;

  /** Whether the card is selected */
  isSelected?: boolean;

  /** Width of the card (default: "131.5px" from Figma spec) */
  width?: string | number;

  /** Height of the card (default: "150px" from Figma spec) */
  height?: string | number;
}

/**
 * ChoiceCard - A reusable interactive card for displaying choice options
 *
 * Used in questionnaire flows to display individual options with icon and label.
 * Supports selected state, hover effects, and flexible sizing.
 *
 * Layout uses flexbox to center icon and label vertically/horizontally.
 * All spacing uses semantic design tokens (SPACING) for consistency.
 *
 * Sizing:
 * - Default: 131.5px width x 150px height (from Figma specifications)
 * - Icon: 44px x 44px centered
 * - Padding: SPACING[4] (16px) on all sides
 * - Gap between icon and label: SPACING[3] (12px)
 *
 * @example
 * ```tsx
 * <ChoiceCard
 *   label="Option 1"
 *   icon={<IconComponent />}
 *   isSelected={selectedId === 'option1'}
 *   onClick={() => handleSelect('option1')}
 * />
 * ```
 */
export const ChoiceCard = React.forwardRef<HTMLButtonElement, ChoiceCardProps>(
  (
    {
      icon,
      label,
      isSelected = false,
      width = '131.5px',
      height = '150px',
      className,
      ...props
    },
    ref,
  ) => {
    // Get semantic spacing token values
    const paddingValue =
      typeof SPACING[4] === 'number' ? `${SPACING[4]}px` : SPACING[4];
    const gapValue =
      typeof SPACING[3] === 'number' ? `${SPACING[3]}px` : SPACING[3];

    // Parse width/height if numeric
    const cardWidth = typeof width === 'number' ? `${width}px` : width;
    const cardHeight = typeof height === 'number' ? `${height}px` : height;

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'flex flex-col items-center justify-center transition-all duration-200 ease-out',
          'rounded-lg hover:scale-105',
          isSelected
            ? 'bg-primary-100 shadow-md'
            : 'bg-neutral-50 hover:bg-neutral-100',
          className,
        )}
        style={{
          // Sizing
          width: cardWidth,
          height: cardHeight,

          // Layout
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: gapValue,

          // Spacing (semantic design tokens)
          padding: paddingValue,

          // Styling
          backgroundColor: isSelected ? COLORS.PRIMARY_100 : COLORS.NEUTRAL_50,
          borderRadius: BORDER_RADIUS.LG,
          cursor: 'pointer',
        }}
        {...props}
      >
        {/* Icon Container - Centered within card */}
        {icon && (
          <div
            className="flex shrink-0 items-center justify-center"
            style={{
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </div>
        )}

        {/* Label - Centered text */}
        <span
          className="line-clamp-2 text-center text-sm font-semibold text-neutral-900"
          style={{
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '22px',
            color: COLORS.TEXT_PRIMARY,
          }}
        >
          {label}
        </span>
      </button>
    );
  },
);

ChoiceCard.displayName = 'ChoiceCard';
