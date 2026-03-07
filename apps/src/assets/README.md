# Assets - Reusable Application Resources

Central location for all reusable assets used across the application, including icon components, mock data, and shared utilities.

## Directory Structure

```
assets/
├── icons/                    # Icon components and icon-related utilities
│   ├── meal-icons.tsx        # Meal preference icons (8 SVG components)
│   └── index.ts              # Icon barrel export
├── mocks/                    # Shared mock data for testing
│   └── onboarding-mocks.ts   # Shared onboarding test data structures
├── index.ts                  # Central assets barrel export
└── README.md                 # This file
```

## Usage

### Import Icons

```typescript
import { MealIcon, type MealIconProps } from '@/assets/icons';

// Or use the central export
import { MealIcon } from '@/assets';

// Usage in component
<MealIcon name="pizza" size={44} color="#d63ba8" />
```

**Supported Meal Icons:**
- mushroom
- fish
- ham
- meat
- spaghetti
- shrimp
- pizza
- chicken

### Import Mock Data

```typescript
import { defaultOnboardingState, completedOnboardingState } from '@/assets/mocks';

// Or use namespace import
import { mocks } from '@/assets';
const { defaultOnboardingState } = mocks;
```

**Available Mock Data:**
- `defaultOnboardingState` - Empty initial state
- `completedOnboardingState` - All questions answered
- `partialOnboardingState` - Mid-flow state example

## Principles

### Shared vs. Feature-Specific

- **Shared Assets** (in `src/assets/`):
  - Reusable across multiple features
  - Icon components used in multiple places
  - Common test data structures
  - Utilities needed application-wide

- **Feature-Specific Mocks** (in feature's `__mocks__/`):
  - Utilities specific to that feature
  - Mock API responses
  - Feature configuration data
  - Example: `src/features/onboarding/__mocks__/`

### Asset Organization Guidelines

1. **Icons**: Keep organized by category (meal icons, UI icons, etc.)
2. **Mocks**: Group by feature they relate to (onboarding mocks, user mocks, etc.)
3. **File Naming**: Use descriptive names (e.g., `meal-icons.tsx`, `onboarding-mocks.ts`)
4. **Exports**: Always use barrel exports (`index.ts`) for clean imports
5. **Documentation**: Add JSDoc comments explaining icon names, mock data structure, and usage

## Adding New Assets

### Adding a New Icon Category

1. Create new file in `icons/` directory (e.g., `icons/status-icons.tsx`)
2. Define icon component with consistent props (name, size, color)
3. Export from `icons/index.ts`
4. Add example usage in this README

### Adding New Mock Data

1. Create new file in `mocks/` directory or add to existing (e.g., `mocks/user-mocks.ts`)
2. Export shared data structures (not feature-specific logic)
3. Export from central `mocks/` barrel or main assets `index.ts`
4. Keep feature-specific utilities in feature `__mocks__/`

## Best Practices

- ✅ Keep assets modular and focused on one concern
- ✅ Use TypeScript types for all mock data
- ✅ Document prop interfaces with JSDoc comments
- ✅ Export types alongside implementations
- ✅ Use barrel exports for clean import paths
- ✅ Test both icon rendering and mock data structures
- ❌ Don't add application-specific logic to assets
- ❌ Don't mix shared and feature-specific utilities
- ❌ Don't hardcode domain-specific data in assets

## Related Documentation

- [Design Tokens](../../docs/design-tokens.md) - For styling icons consistently
- [Component Guide](../../docs/components-and-styling.md) - For using icons in components
- [Testing Guide](../../docs/testing.md) - Best practices for using mock data in tests
