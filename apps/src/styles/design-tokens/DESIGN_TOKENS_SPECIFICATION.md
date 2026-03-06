# Design Tokens Specification - EasyMart E-Commerce

## Overview
Comprehensive design tokens extracted from the EasyMart Figma styleguide, organized for implementation in the Bulletproof React application.

---

## Colors

### Primary Colors (10 shades)
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary-50` | `#fef5fd` | Lightest backgrounds |
| `--color-primary-100` | `#fde8f9` | Light interactive states |
| `--color-primary-200` | `#fad1f2` | Secondary interactions |
| `--color-primary-300` | `#f7b3e6` | Hover states |
| `--color-primary-400` | `#f18ad5` | Active states |
| `--color-primary-500` | `#e662c1` | Primary interact |
| `--color-primary-600` | `#d63ba8` | Primary brand (default) |
| `--color-primary-700` | `#b12a7f` | Dark hover |
| `--color-primary-800` | `#8c1f5f` | Darkest interactive |
| `--color-primary-900` | `#6c2358` | Text on light backgrounds |

### Neutral Colors (13 shades)
| Token | Value | Usage |
|-------|-------|-------|
| `--color-neutral-0` | `#ffffff` | Surfaces, backgrounds |
| `--color-neutral-50` | `#fafafa` | Secondary backgrounds |
| `--color-neutral-100` | `#f5f5f5` | Tertiary backgrounds |
| `--color-neutral-200` | `#eeeeee` | Disabled states |
| `--color-neutral-300` | `#e0e0e0` | Borders, dividers |
| `--color-neutral-400` | `#bdbdbd` | Secondary text |
| `--color-neutral-500` | `#9e9e9e` | Placeholder text |
| `--color-neutral-600` | `#757575` | Secondary text |
| `--color-neutral-700` | `#616161` | Primary text |
| `--color-neutral-800` | `#424242` | Dark text |
| `--color-neutral-900` | `#212121` | Darkest text |
| `--color-neutral-950` | `#0a0a0a` | Near black |
| `--color-neutral-1000` | `#000000` | Black |

### Semantic Status Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#10b981` | Success states, confirmations |
| `--color-error` | `#ef4444` | Error states, destructive actions |
| `--color-warning` | `#f59e0b` | Warning states, caution |
| `--color-info` | `#3b82f6` | Information, context |

---

## Typography

### Font Families
- **Primary**: `Degular Demo` (headings, display text)
- **Secondary**: `Inter` (body text, UI copy)

### Display Styles
| Token | Font Size | Weight | Line Height | Use Case |
|-------|-----------|--------|-------------|----------|
| `--font-display-1` | 140px | Semi Bold (600) | 140px | Hero headlines |
| `--font-display-2` | 110px | Semi Bold (600) | 110px | Page titles |
| `--font-display-3` | 98px | Semi Bold (600) | 98px | Section headers |

### Heading Styles
| Token | Font Size | Weight | Line Height | Use Case |
|-------|-----------|--------|-------------|----------|
| `--font-heading-1` | 63px | Semi Bold (600) | 72px | Major sections |
| `--font-heading-2` | 44px | Semi Bold (600) | 52px | Section titles |
| `--font-heading-3` | 54px | Semi Bold (600) | 64px | Subsections |
| `--font-heading-4` | 42px | Semi Bold (600) | 50px | Component headers |
| `--font-heading-5` | 34px | Semi Bold (600) | 40px | Smaller headers |
| `--font-heading-6` | 28px | Semi Bold (600) | 34px | Minor headers |
| `--font-heading-7` | 20px | Semi Bold (600) | 24px | Labels, meta |

### Body Styles
| Token | Font Size | Weight | Line Height | Use Case |
|-------|-----------|--------|-------------|----------|
| `--font-body-lg` | 20px | Regular (400) | 28px | Large copy |
| `--font-body-md` | 16px | Regular (400) | 24px | Primary body text |
| `--font-body-sm` | 14px | Regular (400) | 20px | Secondary body text |
| `--font-body-xs` | 12px | Regular (400) | 16px | Captions, small text |

---

## Spacing Scale

All spacing uses an 8px base unit system:

| Token | Value | Use Case |
|-------|-------|----------|
| `--space-0` | 0px | Removing space |
| `--space-1` | 4px | Micro spacing |
| `--space-2` | 8px | Tight spacing |
| `--space-3` | 12px | Compact spacing |
| `--space-4` | 16px | Standard spacing |
| `--space-5` | 20px | Comfortable spacing |
| `--space-6` | 24px | Generous spacing |
| `--space-7` | 28px | Large spacing |
| `--space-8` | 32px | Extra large spacing |
| `--space-9` | 36px | XL+ spacing |
| `--space-10` | 40px | Maximum spacing |

---

## Border Radius

| Token | Value | Use Case |
|-------|-------|----------|
| `--radius-xs` | 4px | Buttons, small components |
| `--radius-sm` | 6px | Input fields, small cards |
| `--radius-md` | 8px | Cards, containers |
| `--radius-lg` | 12px | Large cards, modals |
| `--radius-full` | 10000px | Fully rounded (pills, badges) |

---

## Shadows

| Token | Definition | Use Case |
|-------|------------|----------|
| `--shadow-menu` | `0 4px 84px rgba(27, 14, 24, 0.14)` | Dropdown menus, elevated components |

---

## Breakpoints & Grid System

### Responsive Breakpoints
| Breakpoint | Width | Columns | Column Width | Gutter |
|------------|-------|---------|--------------|--------|
| Mobile | 375px | 12 | 23.5px | 16px |
| Tablet | 768px | 12 | 53.5px | 24px |
| Desktop | 1440px | 12 | 82px | 32px |

---

## Token Implementation Structure

### Directory Organization
```
src/
├── lib/
│   └── design-tokens/
│       ├── colors.ts          # Color constants and types
│       ├── typography.ts      # Font and text styles
│       ├── spacing.ts         # Spacing scale constants
│       ├── effects.ts         # Shadows and border-radius
│       ├── breakpoints.ts     # Responsive breakpoints
│       └── index.ts           # Barrel export
└── styles/
    ├── design-tokens/
    │   ├── colors.css
    │   ├── typography.css
    │   ├── spacing.css
    │   ├── effects.css
    │   └── breakpoints.css
    └── design-tokens.css      # Main import file
```

### TypeScript Token Format
```typescript
// src/lib/design-tokens/colors.ts
export const COLORS = {
  PRIMARY_600: '#d63ba8',
  NEUTRAL_900: '#212121',
  SUCCESS: '#10b981',
  // ...
} as const;

export type ColorToken = typeof COLORS[keyof typeof COLORS];
```

### CSS Custom Properties Format
```css
/* src/styles/design-tokens/colors.css */
:root {
  --color-primary-600: #d63ba8;
  --color-neutral-900: #212121;
  --color-success: #10b981;
  /* ... */
}
```

### Tailwind Configuration Integration
```javascript
// tailwind.config.mjs
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          600: 'var(--color-primary-600)',
          // ...
        },
        // ...
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        // ...
      },
    },
  },
};
```

---

## Usage Patterns

### Using Design Tokens in Components

#### With Tailwind CSS
```jsx
<button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
  Click me
</button>
```

#### With CSS Variables
```jsx
<div style={{ color: 'var(--color-neutral-900)', padding: 'var(--space-4)' }}>
  Content
</div>
```

#### With TypeScript Constants
```typescript
import { COLORS, SPACING } from 'src/lib/design-tokens';

const buttonStyle = {
  backgroundColor: COLORS.PRIMARY_600,
  padding: `${SPACING.BASE}px`,
};
```

---

## Next Steps

1. **Implement Token Modules**: Create TypeScript and CSS token files
2. **Configure Tailwind**: Integrate tokens into Tailwind CSS configuration
3. **Update Components**: Refactor existing components to use tokens
4. **Document in Storybook**: Create visual token documentation
5. **Establish Patterns**: Document usage guidelines for team

Ready to start implementation? Run `/opsx:apply` to begin!
