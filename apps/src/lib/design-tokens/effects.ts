/**
 * Design Tokens - Effects
 * Shadows and border-radius definitions
 * Extracted from EasyMart Figma Styleguide
 */

export const SHADOWS = {
  // Menu and elevated components
  MENU: '0 4px 84px rgba(27, 14, 24, 0.14)',

  // Standard shadow scale
  SM: '0 1px 2px rgba(0, 0, 0, 0.05)',
  MD: '0 4px 6px rgba(0, 0, 0, 0.1)',
  LG: '0 10px 15px rgba(0, 0, 0, 0.1)',
  XL: '0 20px 25px rgba(0, 0, 0, 0.1)',
} as const;

export type ShadowToken = (typeof SHADOWS)[keyof typeof SHADOWS];

export const BORDER_RADIUS = {
  // Border radius scale
  XS: '4px',
  SM: '6px',
  MD: '8px',
  LG: '12px',
  XL: '16px',
  FULL: '10000px',

  // Semantic aliases
  BUTTON: '4px',
  CARD: '8px',
  PILL: '10000px',
  INPUT: '6px',
} as const;

export type BorderRadiusToken =
  (typeof BORDER_RADIUS)[keyof typeof BORDER_RADIUS];

/**
 * Border radius values in numeric format (for calculations)
 */
export const BORDER_RADIUS_VALUES = {
  XS: 4,
  SM: 6,
  MD: 8,
  LG: 12,
  XL: 16,
  FULL: 10000,
} as const;

export type BorderRadiusValue =
  (typeof BORDER_RADIUS_VALUES)[keyof typeof BORDER_RADIUS_VALUES];
