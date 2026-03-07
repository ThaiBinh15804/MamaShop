# Design Tokens - README

## Overview

This directory contains the design token definitions extracted from the EasyMart Figma styleguide. Design tokens are the building blocks of the design system, enabling consistent styling across all UI components.

## Directory Structure

```
design-tokens/
├── colors.ts          # Color tokens (primary, neutral, semantic)
├── typography.ts      # Typography styles (display, heading, body, button)
├── spacing.ts         # Spacing scale (8px base unit, 0px-40px)
├── effects.ts         # Shadows and border-radius
├── breakpoints.ts     # Responsive breakpoints and grid system
├── responsive.ts      # Screen-specific spacing and sizing tokens
├── types.ts           # Type definitions for design tokens
└── index.ts           # Barrel export (main entry point)
```

## Quick Start

### Using Design Tokens in Components

**With Tailwind CSS (Preferred):**
```jsx
<button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
  Click me
</button>
```

**With TypeScript Constants:**
```typescript
import { COLORS, SPACING } from 'src/lib/design-tokens';

const buttonStyle = {
  backgroundColor: COLORS.PRIMARY_600,
  padding: `${SPACING[4]} ${SPACING[5]}`,
};
```

**With CSS Variables:**
```jsx
<div style={{ color: 'var(--color-neutral-900)', padding: 'var(--space-4)' }}>
  Content
</div>
```

## Token Categories

### Colors

- **Primary**: 10 shades for brand colors (#6c2358 to #fef5fd)
- **Neutral**: 13 shades for text, borders, backgrounds
- **Status**: Semantic colors (success, error, warning, info)
- **Semantic Aliases**: Text primary/secondary, background, borders

**Usage:**
```typescript
import { COLORS } from 'src/lib/design-tokens';

const bgColor = COLORS.PRIMARY_600;
```

### Typography

- **Display**: D1-D3 (140px, 110px, 98px) - Hero text
- **Headings**: H1-H7 (63px to 20px) - Page structure
- **Body**: lg, md, sm, xs (20px to 12px) - Content text
- **Buttons**: lg, md, sm - Button labels

**Usage:**
```typescript
import { TEXT_STYLES } from 'src/lib/design-tokens';

const headingStyle = TEXT_STYLES.headingLG; // { fontSize, fontWeight, ... }
```

### Spacing

- **Scale**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (0px to 40px)
- **Base Unit**: 8px
- **Semantic Aliases**: XS, SM, MD, LG, XL, XXL

**Usage:**
```typescript
import { SPACING } from 'src/lib/design-tokens';

const padding = SPACING[4]; // "16px"
```

### Effects

- **Shadows**: Menu, SM, MD, LG, XL
- **Border Radius**: XS, SM, MD, LG, XL, FULL
- **Semantic Aliases**: button, card, pill, input

**Usage:**
```typescript
import { SHADOWS, BORDER_RADIUS } from 'src/lib/design-tokens';

const cardStyle = {
  boxShadow: SHADOWS.MD,
  borderRadius: BORDER_RADIUS.CARD,
};
```

### Breakpoints

- **Mobile**: 375px (12 columns, 82px width, 16px gutter)
- **Tablet**: 768px (12 columns, 53.5px width, 24px gutter)
- **Desktop**: 1440px (12 columns, 82px width, 32px gutter)

**Usage:**
```typescript
import { BREAKPOINTS, GRID_CONFIG } from 'src/lib/design-tokens';

const isMobile = window.innerWidth < BREAKPOINTS.MOBILE;
const gridConfig = GRID_CONFIG.DESKTOP;
```

### Responsive Tokens

Screen-specific spacing and sizing values that adapt to different viewport sizes. These tokens complement the base design token system with breakpoint-aware values.

**Token Sets:**
- **RESPONSIVE_MOBILE** (< 640px): Compact spacing optimized for small screens
- **RESPONSIVE_TABLET** (640px - 1024px): Balanced spacing for medium screens
- **RESPONSIVE_DESKTOP** (> 1024px): Generous spacing for large screens

**Available Properties:**
- Container padding/margins (horizontal and vertical)
- Grid gaps (compact, normal, relaxed)
- Component sizing (button height, icon sizes)
- Typography spacing (line heights)
- Grid columns (responsive column counts)

**Usage:**
```typescript
import { RESPONSIVE_MOBILE, RESPONSIVE_TABLET, RESPONSIVE_DESKTOP } from 'src/lib/design-tokens';

// Use in components with container query or media queries
const getGridGap = (screenSize: 'mobile' | 'tablet' | 'desktop') => {
  switch(screenSize) {
    case 'mobile': return RESPONSIVE_MOBILE.GRID_GAP_NORMAL;
    case 'tablet': return RESPONSIVE_TABLET.GRID_GAP_NORMAL;
    case 'desktop': return RESPONSIVE_DESKTOP.GRID_GAP_NORMAL;
  }
};

// For responsive grid layout:
const gridColumns = RESPONSIVE_DESKTOP.GRID_COLUMNS; // 4 columns on desktop
```

**Breakpoint Constants:**
```typescript
export const BREAKPOINTS = {
  SM: 640,    // Mobile to Tablet
  MD: 1024,   // Tablet to Desktop
};
```

**When to Use Responsive Tokens:**
- Dynamic grid layouts that need column counts based on screen size
- Component sizing that varies significantly across breakpoints
- Container padding/margins that scale with viewport
- Gap values between grid items

## CSS Custom Properties

All tokens are available as CSS custom properties under the `:root` selector. Import `src/styles/design-tokens.css` to access them globally.

**Available CSS Variables:**
```css
/* Colors */
--color-primary-600: #d63ba8;
--color-neutral-900: #212121;
--color-success: #10b981;
/* ... */

/* Typography */
--font-family-primary: "Degular Demo", ...;
--font-heading-1-size: 63px;
/* ... */

/* Spacing */
--space-4: 16px;
/* ... */

/* Effects */
--shadow-menu: 0 4px 84px rgba(...);
--radius-md: 8px;
/* ... */

/* Breakpoints */
--breakpoint-desktop: 1440px;
--grid-columns-desktop: 12;
/* ... */
```

## Best Practices

### ✅ DO

- Always use design tokens for colors, spacing, and typography
- Import tokens from `src/lib/design-tokens` for type safety
- Use Tailwind utilities with token values when possible
- Reference design tokens in component documentation

### ❌ DON'T

- Use hardcoded hex colors like `#d63ba8`
- Use arbitrary spacing like `padding: "19px"`
- Mix design systems (use consistent tokens across all components)
- Bypass tokens to override styles

## Extending Tokens

To add new tokens:

1. Update the corresponding CSS file in `src/styles/design-tokens/`
2. Add exports to the TypeScript module (colors.ts, etc.)
3. Update the Tailwind config if needed
4. Document the new tokens in this README

Example: Adding a new color

**1. Update colors.css:**
```css
:root {
  --color-secondary-600: #a020f0;
}
```

**2. Update colors.ts:**
```typescript
export const COLORS = {
  // ... existing colors
  SECONDARY_600: "#a020f0",
};
```

**3. Update tailwind.config.cjs:**
```javascript
secondary: {
  600: 'var(--color-secondary-600)',
},
```

## Troubleshooting

**Issue: CSS variables not working**
- Ensure `src/styles/design-tokens.css` is imported in `src/styles/globals.css`
- Check browser DevTools to verify `:root` has the variables

**Issue: TypeScript imports failing**
- Ensure paths are correct: `src/lib/design-tokens`
- Run `yarn build` or restart the dev server

**Issue: Tailwind utilities not working**
- Rebuild Tailwind CSS configuration
- Check `tailwind.config.cjs` has the correct token mappings
- Verify CSS custom properties are available at runtime

## Related Documentation

- [Design System Overview](../../../docs/design-tokens.md)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## Questions or Updates?

See the project's OpenSpec change documentation at `openspec/changes/design-tokens-definition/` for full specifications and context.
