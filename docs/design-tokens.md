# Design Tokens - Developer Guide

This guide explains how to use design tokens in the EasyMart application and provides patterns for common styling scenarios.

## Table of Contents

1. [Quick Start](#quick-start)  
2. [Token Categories](#token-categories)
3. [Usage Patterns](#usage-patterns)
4. [Best Practices](#best-practices)
5. [Styling Conventions](#styling-conventions)
6. [Examples](#examples)

## Quick Start

Design tokens are available through three interfaces:

### 1. Tailwind CSS Utilities (Recommended)

```jsx
<button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
  Click me
</button>
```

### 2. CSS Variables

```jsx
<div style={{ color: 'var(--color-neutral-900)', fontSize: 'var(--font-body-md-size)' }}>
  Content
</div>
```

### 3. TypeScript Constants

```typescript
import { COLORS, SPACING, TEXT_STYLES } from 'src/lib/design-tokens';

const buttonStyle = {
  backgroundColor: COLORS.PRIMARY_600,
  padding: `${SPACING[4]} ${SPACING[5]}`,
  ::after {
    color: COLORS.TEXT_INVERSE,
  }
};
```

## Token Categories

### Colors

All colors are available as Tailwind utilities and CSS variables.

**Tailwind Usage:**
```jsx
<div className="text-primary-600 bg-neutral-100">Primary text on light background</div>
<span className="text-success">Success message</span>
```

**CSS Variables:**
```css
.component {
  color: var(--color-primary-600);
  background-color: var(--color-neutral-100);
}
```

**Available Colors:**
- Primary: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- Neutral: 0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000
- Status: success, error, warning, info

### Typography

Typography tokens control font size, weight, line-height, and letter-spacing together.

**Tailwind Usage:**
```jsx
<h1 className="text-display-lg">Page Title</h1>
<h2 className="text-heading-lg">Section Title</h2>
<p className="text-body-md">Body content</p>
```

**Available Sizes:**
- Display: display-lg (140px), display-md (110px), display-sm (98px)
- Heading: heading-2xl (63px) to heading-2xs (20px)  
- Body: body-lg (20px), body-md (16px), body-sm (14px), body-xs (12px)
- Button: button-lg (16px), button-md (14px), button-sm (12px)

### Spacing

Spacing tokens represent an 8px base unit scale from 0px to 40px.

**Tailwind Usage:**
```jsx
<div className="p-4 mb-6 gap-2">
  Padding 16px, margin-bottom 24px, gap 8px
</div>
```

**CSS Variables:**
```css
.component {
  padding: var(--space-4);
  margin-bottom: var(--space-6);
  gap: var(--space-2);
}
```

**Available Scales:**
- Numeric: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (0px to 40px)
- Semantic: xs (4px), sm (8px), md (16px), lg (24px), xl (32px), 2xl (40px)

### Border Radius

Control corner roundness for buttons, cards, inputs, and more.

**Tailwind Usage:**
```jsx
<button className="rounded-button">Button</button>
<div className="rounded-card">Card</div>
<div className="rounded-pill">Pill / Badge</div>
```

**Available Radius:**
- xs (4px) - Buttons, inputs
- sm (6px) - Input fields, tags
- md (8px) - Cards, containers [DEFAULT]
- lg (12px) - Larger cards, modals
- xl (16px) - Extra large components
- full (rounded pill) - Badges, fully rounded

### Shadows

Add depth and visual hierarchy with shadow tokens.

**Tailwind Usage:**
```jsx
<div className="shadow-md">Card with medium shadow</div>
<div className="shadow-menu">Dropdown menu</div>
```

**Available Shadows:**
- sm - Subtle elevation
- md - Standard elevation
- lg - Prominent elevation
- xl - High emphasis elevation
- menu - Specific dropdown shadow

### Breakpoints

Design responsive layouts using breakpoint tokens.

**Available Breakpoints:**
- `sm` (375px) - Mobile
- `md` (768px) - Tablet
- `lg` (1440px) - Desktop

**Tailwind Usage:**
```jsx
<div className="text-body-sm md:text-body-md lg:text-body-lg">
  Responsive text sizing
</div>
```

## Usage Patterns

### Buttons

```jsx
// Primary button
<button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-button font-semibold">
  Primary Action
</button>

// Secondary button
<button className="border border-neutral-300 text-neutral-900 hover:bg-neutral-50 px-4 py-2 rounded-button">
  Secondary Action
</button>

// Disabled state
<button className="bg-neutral-300 text-neutral-500 cursor-not-allowed px-4 py-2 rounded-button">
  Disabled
</button>
```

### Cards

```jsx
<div className="bg-neutral-0 shadow-md rounded-card p-6 border border-neutral-200">
  <h3 className="text-heading-sm text-neutral-900 mb-4">Card Title</h3>
  <p className="text-body-md text-neutral-700">Card content with semantic colors</p>
</div>
```

### Form Inputs  

```jsx
<input
  type="text"
  className="w-full px-4 py-2 border border-neutral-300 rounded-input bg-neutral-0 text-neutral-900 placeholder-neutral-500"
  placeholder="Enter text"
/>
```

### Status Messages

```jsx
// Success
<div className="bg-green-50 border-l-4 border-success text-success p-4">Success message</div>

// Error
<div className="bg-red-50 border-l-4 border-error text-error p-4">Error message</div>

// Warning  
<div className="bg-yellow-50 border-l-4 border-warning text-warning p-4">Warning message</div>
```

### Navigation/Headers

```jsx
<header className="bg-neutral-900 text-white px-8 py-4 shadow-md">
  <nav className="flex gap-6 items-center">
    <h1 className="text-heading-2xs text-white">Logo</h1>
    <a href="#" className="text-body-md hover:text-primary-300">Link</a>
  </nav>
</header>
```

## Best Practices

### ✅ DO

1. **Use Tailwind utilities by default**
   ```jsx
   // GOOD
   <div className="bg-primary-600 text-white p-4 rounded-md">
   ```

2. **Reference tokens for custom styles**
   ```typescript
   // GOOD
   const customStyle = css`
     background-color: ${COLORS.PRIMARY_600};
     padding: ${SPACING[4]};
   `;
   ```

3. **Build component variants using semantic tokens**
   ```jsx
   // GOOD - Primary uses primary colors
   // Secondary uses neutral colors adapted
   // Destructive uses error colors
   ```

4. **Keep color usage semantic**
   ```jsx
   // GOOD - Clear intent
   <span className="text-success">Status: Complete</span>
   <span className="text-error">Error: Failed</span>
   ```

5. **Use spacing scale consistently**
   ```jsx
   // GOOD - Consistent 8px scale
   <div className="p-4 gap-3 mb-6"></div>
   ```

### ❌ DON'T

1. **Avoid hardcoded values**
   ```typescript
   // BAD - Hardcoded color
   backgroundColor: '#d63ba8',
   
   // GOOD - Use token
   backgroundColor: COLORS.PRIMARY_600,
   ```

2. **Don't mix token systems**
   ```jsx
   // BAD - Mixing Tailwind and inline styles inconsistently
   <div className="bg-primary-600" style={{ padding: '19px' }}>
   
   // GOOD - Consistent usage
   <div className="bg-primary-600 p-4">
   ```

3. **Avoid arbitrary values**
   ```jsx
   // BAD - Arbitrary spacing
   <div className="p-[19px]">
   
   // GOOD - Use token scale
   <div className="p-4 md:p-5">
   ```

4. **Don't create new colors or sizes**
   ```jsx
   // BAD - New color not in system
   style={{ color: '#a020f0' }}
   
   // GOOD - Use existing token
   className="text-primary-600"
   ```

## Styling Conventions

### Component Styling Order

When building components, apply styles in this order:

1. Layout (`flex`, `grid`, `absolute`)
2. Sizing (`w-`, `h-`)
3. Spacing (`p-`, `m-`, `gap-`)
4. Colors (`bg-`, `text-`, `border-`)
5. Border & Radius (`border-`, `rounded-`)
6. Effects (`shadow-`)
7. Responsive (`md:`, `lg:`)
8. States (`hover:`, `focus:`, `active:`)

Example:
```jsx
<div className="flex flex-col gap-4 w-full p-6 bg-neutral-0 border border-neutral-200 rounded-card shadow-md md:w-1/2">
  {content}
</div>
```

### Responsive Design

- **Mobile First**: Utilities apply at `sm` (375px) by default
- **Tablet**: Use `md:` prefix for 768px+ changes
- **Desktop**: Use `lg:` prefix for 1400px+ changes

```jsx
<div className="text-body-sm md:text-body-md lg:text-body-lg">
  Responsive typography
</div>
```

## Examples

### Complete Component Example

```jsx
export function Card({ title, children }) {
  return (
    <div className="bg-neutral-0 shadow-md rounded-card p-6 border border-neutral-200">
      {title && (
        <h3 className="text-heading-sm text-neutral-900 mb-4">
          {title}
        </h3>
      )}
      <div className="text-body-md text-neutral-700">
        {children}
      </div>
    </div>
  );
}
```

### Button Component with Variants

```jsx
export function Button({ variant = 'primary', children, ...props }) {
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
    danger: 'bg-error text-white hover:bg-red-600',
  };

  return (
    <button
      className={`px-4 py-2 rounded-button font-semibold transition-colors ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

## Getting Help

- Found a token value mismatch? See [Design Tokens README](src/lib/design-tokens/README.md)
- Need to add a new token? Follow [Extending Tokens](src/lib/design-tokens/README.md#extending-tokens)
- Design token questions? Check [Related Documentation](src/lib/design-tokens/README.md#related-documentation)

