/**
 * Design Tokens - Spacing
 * 8px base unit scale from 0px to 40px
 * Extracted from EasyMart Figma Styleguide
 */

export const SPACING = {
  // Spacing Scale - 8px base unit
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',

  // Semantic aliases
  XS: '4px',
  SM: '8px',
  MD: '16px',
  LG: '24px',
  XL: '32px',
  XXL: '40px',
} as const;

export type SpacingToken = (typeof SPACING)[keyof typeof SPACING];
export type SpacingKey = keyof typeof SPACING;

/**
 * Get spacing value by key
 */
export const getSpacing = (key: SpacingKey): string => SPACING[key];

/**
 * Spacing value in numeric format (for calculations)
 */
export const SPACING_VALUES = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
} as const;

export type SpacingValue = (typeof SPACING_VALUES)[keyof typeof SPACING_VALUES];
