/**
 * Design Tokens - Typography
 * Font families, sizes, weights, line-heights
 * Extracted from EasyMart Figma Styleguide
 */

export const TYPOGRAPHY = {
  // Font Families
  FAMILY_PRIMARY:
    '"Degular Demo", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  FAMILY_SECONDARY:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

  // Font Weights
  WEIGHT_REGULAR: 400,
  WEIGHT_SEMI_BOLD: 600,
  WEIGHT_BOLD: 700,
} as const;

export interface TypographyStyle {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
  fontFamily: string;
}

/**
 * Typography styles for different text levels
 */
export const TEXT_STYLES: Record<string, TypographyStyle> = {
  // Display Styles
  displayL: {
    fontSize: '140px',
    fontWeight: TYPOGRAPHY.WEIGHT_SEMI_BOLD,
    lineHeight: '140px',
    letterSpacing: '-2px',
    fontFamily: TYPOGRAPHY.FAMILY_PRIMARY,
  },
  displayM: {
    fontSize: '110px',
    fontWeight: TYPOGRAPHY.WEIGHT_SEMI_BOLD,
    lineHeight: '110px',
    letterSpacing: '-1.5px',
    fontFamily: TYPOGRAPHY.FAMILY_PRIMARY,
  },
  displayS: {
    fontSize: '98px',
    fontWeight: TYPOGRAPHY.WEIGHT_SEMI_BOLD,
    lineHeight: '98px',
    letterSpacing: '-1.5px',
    fontFamily: TYPOGRAPHY.FAMILY_PRIMARY,
  },

  // Heading Styles
  headingXXL: {
    fontSize: '63px',
    fontWeight: TYPOGRAPHY.WEIGHT_SEMI_BOLD,
    lineHeight: '72px',
    letterSpacing: '-1px',
    fontFamily: TYPOGRAPHY.FAMILY_PRIMARY,
  },
  headingXL: {
    fontSize: '54px',
    fontWeight: TYPOGRAPHY.WEIGHT_SEMI_BOLD,
    lineHeight: '64px',
    letterSpacing: '-0.5px',
    fontFamily: TYPOGRAPHY.FAMILY_PRIMARY,
  },
  headingLG: {
    fontSize: '44px',
    fontWeight: TYPOGRAPHY.WEIGHT_SEMI_BOLD,
    lineHeight: '52px',
    letterSpacing: '0px',
    fontFamily: TYPOGRAPHY.FAMILY_PRIMARY,
  },
  headingMD: {
    fontSize: '42px',
    fontWeight: TYPOGRAPHY.WEIGHT_SEMI_BOLD,
    lineHeight: '50px',
    letterSpacing: '0px',
    fontFamily: TYPOGRAPHY.FAMILY_PRIMARY,
  },
  headingSM: {
    fontSize: '34px',
    fontWeight: TYPOGRAPHY.WEIGHT_SEMI_BOLD,
    lineHeight: '40px',
    letterSpacing: '0px',
    fontFamily: TYPOGRAPHY.FAMILY_PRIMARY,
  },
  headingXS: {
    fontSize: '28px',
    fontWeight: TYPOGRAPHY.WEIGHT_SEMI_BOLD,
    lineHeight: '34px',
    letterSpacing: '0px',
    fontFamily: TYPOGRAPHY.FAMILY_PRIMARY,
  },
  headingXXS: {
    fontSize: '20px',
    fontWeight: TYPOGRAPHY.WEIGHT_SEMI_BOLD,
    lineHeight: '24px',
    letterSpacing: '0px',
    fontFamily: TYPOGRAPHY.FAMILY_PRIMARY,
  },

  // Body Styles
  bodyLG: {
    fontSize: '20px',
    fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
    lineHeight: '28px',
    letterSpacing: '0px',
    fontFamily: TYPOGRAPHY.FAMILY_SECONDARY,
  },
  bodyMD: {
    fontSize: '16px',
    fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
    lineHeight: '24px',
    letterSpacing: '0px',
    fontFamily: TYPOGRAPHY.FAMILY_SECONDARY,
  },
  bodySM: {
    fontSize: '14px',
    fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
    lineHeight: '20px',
    letterSpacing: '0px',
    fontFamily: TYPOGRAPHY.FAMILY_SECONDARY,
  },
  bodyXS: {
    fontSize: '12px',
    fontWeight: TYPOGRAPHY.WEIGHT_REGULAR,
    lineHeight: '16px',
    letterSpacing: '0px',
    fontFamily: TYPOGRAPHY.FAMILY_SECONDARY,
  },

  // Button Typography
  buttonLG: {
    fontSize: '16px',
    fontWeight: TYPOGRAPHY.WEIGHT_SEMI_BOLD,
    lineHeight: '24px',
    letterSpacing: '0px',
    fontFamily: TYPOGRAPHY.FAMILY_SECONDARY,
  },
  buttonMD: {
    fontSize: '14px',
    fontWeight: TYPOGRAPHY.WEIGHT_SEMI_BOLD,
    lineHeight: '20px',
    letterSpacing: '0px',
    fontFamily: TYPOGRAPHY.FAMILY_SECONDARY,
  },
  buttonSM: {
    fontSize: '12px',
    fontWeight: TYPOGRAPHY.WEIGHT_SEMI_BOLD,
    lineHeight: '16px',
    letterSpacing: '0px',
    fontFamily: TYPOGRAPHY.FAMILY_SECONDARY,
  },
} as const;

export type TypographyToken = keyof typeof TEXT_STYLES;
