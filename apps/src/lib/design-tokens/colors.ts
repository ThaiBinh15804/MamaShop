/**
 * Design Tokens - Colors
 * Primary, neutral, and semantic color definitions
 * Extracted from EasyMart Figma Styleguide
 */

export const COLORS = {
  // Primary Colors (10 shades)
  PRIMARY_50: '#fef5fd',
  PRIMARY_100: '#fde8f9',
  PRIMARY_200: '#fad1f2',
  PRIMARY_300: '#f7b3e6',
  PRIMARY_400: '#f18ad5',
  PRIMARY_500: '#e662c1',
  PRIMARY_600: '#d63ba8',
  PRIMARY_700: '#b12a7f',
  PRIMARY_800: '#8c1f5f',
  PRIMARY_900: '#6c2358',

  // Neutral Colors (13 shades)
  NEUTRAL_0: '#ffffff',
  NEUTRAL_50: '#fafafa',
  NEUTRAL_100: '#f5f5f5',
  NEUTRAL_200: '#eeeeee',
  NEUTRAL_300: '#e0e0e0',
  NEUTRAL_400: '#bdbdbd',
  NEUTRAL_500: '#9e9e9e',
  NEUTRAL_600: '#757575',
  NEUTRAL_700: '#616161',
  NEUTRAL_800: '#424242',
  NEUTRAL_900: '#212121',
  NEUTRAL_950: '#0a0a0a',
  NEUTRAL_1000: '#000000',

  // Semantic Status Colors
  SUCCESS: '#10b981',
  ERROR: '#ef4444',
  WARNING: '#f59e0b',
  INFO: '#3b82f6',

  // Semantic Aliases
  TEXT_PRIMARY: '#212121',
  TEXT_SECONDARY: '#757575',
  TEXT_DISABLED: '#bdbdbd',
  TEXT_INVERSE: '#ffffff',

  BG_PRIMARY: '#ffffff',
  BG_SECONDARY: '#fafafa',
  BG_TERTIARY: '#f5f5f5',

  BORDER_PRIMARY: '#e0e0e0',
  BORDER_SECONDARY: '#eeeeee',

  ICON_PRIMARY: '#212121',
  ICON_SECONDARY: '#757575',
  ICON_DISABLED: '#bdbdbd',
} as const;

export type ColorToken = (typeof COLORS)[keyof typeof COLORS];

/**
 * Color palette organized by category for UI reference
 */
export const COLOR_PALETTE = {
  primary: {
    50: COLORS.PRIMARY_50,
    100: COLORS.PRIMARY_100,
    200: COLORS.PRIMARY_200,
    300: COLORS.PRIMARY_300,
    400: COLORS.PRIMARY_400,
    500: COLORS.PRIMARY_500,
    600: COLORS.PRIMARY_600,
    700: COLORS.PRIMARY_700,
    800: COLORS.PRIMARY_800,
    900: COLORS.PRIMARY_900,
  },
  neutral: {
    0: COLORS.NEUTRAL_0,
    50: COLORS.NEUTRAL_50,
    100: COLORS.NEUTRAL_100,
    200: COLORS.NEUTRAL_200,
    300: COLORS.NEUTRAL_300,
    400: COLORS.NEUTRAL_400,
    500: COLORS.NEUTRAL_500,
    600: COLORS.NEUTRAL_600,
    700: COLORS.NEUTRAL_700,
    800: COLORS.NEUTRAL_800,
    900: COLORS.NEUTRAL_900,
    950: COLORS.NEUTRAL_950,
    1000: COLORS.NEUTRAL_1000,
  },
  status: {
    success: COLORS.SUCCESS,
    error: COLORS.ERROR,
    warning: COLORS.WARNING,
    info: COLORS.INFO,
  },
} as const;
