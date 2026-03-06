import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design System/Effects',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

/**
 * Shadows
 *
 * Shadow tokens provide depth and visual hierarchy across the application.
 */
export const ShadowShowcase: StoryObj = {
  render: () => (
    <div className="space-y-12">
      {/* Shadow Scale */}
      <div>
        <h3 className="mb-6 text-heading-sm">Shadow Scale</h3>
        <div className="grid grid-cols-5 gap-6">
          <div>
            <p className="mb-4 text-body-xs text-neutral-600">Small</p>
            <div className="h-24 rounded-md border border-neutral-100 bg-neutral-0 shadow-sm" />
            <p className="mt-2 break-words font-mono text-body-xs text-neutral-600">
              shadow-sm
            </p>
          </div>
          <div>
            <p className="mb-4 text-body-xs text-neutral-600">Medium</p>
            <div className="h-24 rounded-md border border-neutral-100 bg-neutral-0 shadow-md" />
            <p className="mt-2 break-words font-mono text-body-xs text-neutral-600">
              shadow-md
            </p>
          </div>
          <div>
            <p className="mb-4 text-body-xs text-neutral-600">Large</p>
            <div className="h-24 rounded-md border border-neutral-100 bg-neutral-0 shadow-lg" />
            <p className="mt-2 break-words font-mono text-body-xs text-neutral-600">
              shadow-lg
            </p>
          </div>
          <div>
            <p className="mb-4 text-body-xs text-neutral-600">Extra Large</p>
            <div className="h-24 rounded-md border border-neutral-100 bg-neutral-0 shadow-xl" />
            <p className="mt-2 break-words font-mono text-body-xs text-neutral-600">
              shadow-xl
            </p>
          </div>
          <div>
            <p className="mb-4 text-body-xs text-neutral-600">Menu</p>
            <div className="h-24 rounded-md border border-neutral-100 bg-neutral-0 shadow-menu" />
            <p className="mt-2 break-words font-mono text-body-xs text-neutral-600">
              shadow-menu
            </p>
          </div>
        </div>
      </div>

      {/* Shadow Use Cases */}
      <div>
        <h3 className="mb-6 text-heading-sm">Shadow Use Cases</h3>
        <div className="grid grid-cols-2 gap-8">
          {/* Elevated Card */}
          <div>
            <p className="mb-4 text-body-sm text-neutral-600">
              Elevated Card (shadow-md)
            </p>
            <div className="rounded-card border border-neutral-100 bg-neutral-0 p-6 shadow-md">
              <h4 className="mb-3 text-heading-sm">Product Card</h4>
              <p className="text-body-md text-neutral-700">
                Standard card elevation for content containers.
              </p>
            </div>
          </div>

          {/* Dropdown Menu */}
          <div>
            <p className="mb-4 text-body-sm text-neutral-600">
              Dropdown Menu (shadow-menu)
            </p>
            <div className="relative inline-block">
              <button className="rounded-button bg-primary-600 px-4 py-2 text-body-md text-white">
                Menu
              </button>
              <div className="absolute top-full mt-2 w-48 rounded-md border border-neutral-200 bg-neutral-0 shadow-menu">
                <a href="#" className="block px-4 py-3 hover:bg-neutral-50">
                  Option 1
                </a>
                <a href="#" className="block px-4 py-3 hover:bg-neutral-50">
                  Option 2
                </a>
                <a href="#" className="block px-4 py-3 hover:bg-neutral-50">
                  Option 3
                </a>
              </div>
            </div>
          </div>

          {/* Modal */}
          <div>
            <p className="mb-4 text-body-sm text-neutral-600">
              Modal Window (shadow-lg)
            </p>
            <div className="max-w-md rounded-card border border-neutral-200 bg-neutral-0 p-6 shadow-lg">
              <h3 className="mb-4 text-heading-md">Dialog Title</h3>
              <p className="mb-6 text-body-md text-neutral-700">
                Modal content with prominent shadow for emphasis.
              </p>
              <div className="flex gap-3">
                <button className="flex-1 rounded-button bg-primary-600 px-4 py-2 text-white">
                  Confirm
                </button>
                <button className="flex-1 rounded-button bg-neutral-100 px-4 py-2 text-neutral-900">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Floating Action */}
          <div>
            <p className="mb-4 text-body-sm text-neutral-600">
              Floating Element (shadow-xl)
            </p>
            <div className="flex items-end gap-6">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary-600 shadow-xl">
                <span className="text-heading-2xs font-bold text-white">+</span>
              </div>
              <p className="text-body-sm text-neutral-600">
                Extra shadow for floating/prominent elements
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shadows Definitions */}
      <div className="rounded-card bg-neutral-50 p-6">
        <h4 className="mb-4 text-heading-sm">Shadow Values</h4>
        <pre className="overflow-auto rounded-md bg-neutral-100 p-4 font-mono text-body-xs">
          {`sm: 0 1px 2px rgba(0, 0, 0, 0.05)
md: 0 4px 6px rgba(0, 0, 0, 0.1)
lg: 0 10px 15px rgba(0, 0, 0, 0.1)
xl: 0 20px 25px rgba(0, 0, 0, 0.1)
menu: 0 4px 84px rgba(27, 14, 24, 0.14)`}
        </pre>
      </div>
    </div>
  ),
};

/**
 * Border Radius
 *
 * Border radius tokens control corner roundness for buttons, cards, inputs, and more.
 */
export const BorderRadiusShowcase: StoryObj = {
  render: () => (
    <div className="space-y-12">
      {/* Border Radius Scale */}
      <div>
        <h3 className="mb-6 text-heading-sm">Border Radius Scale</h3>
        <div className="grid grid-cols-6 gap-6">
          {[
            { name: 'xs (4px)', class: 'rounded-xs' },
            { name: 'sm (6px)', class: 'rounded-sm' },
            { name: 'md (8px)', class: 'rounded-md' },
            { name: 'lg (12px)', class: 'rounded-lg' },
            { name: 'xl (16px)', class: 'rounded-xl' },
            { name: 'full', class: 'rounded-full' },
          ].map(({ name, class: className }) => (
            <div key={name} className="text-center">
              <div
                className={`${className} mx-auto size-24 border-2 border-primary-900 bg-primary-600`}
              />
              <p className="mt-3 text-body-xs text-neutral-600">{name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Border Radius Use Cases */}
      <div>
        <h3 className="mb-6 text-heading-sm">Border Radius Use Cases</h3>
        <div className="space-y-6">
          {/* Buttons */}
          <div>
            <p className="mb-4 text-body-sm text-neutral-600">
              Buttons (rounded-xs)
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-xs bg-primary-600 px-6 py-2 text-white">
                Button XS
              </button>
              <button className="rounded-sm bg-primary-600 px-6 py-2 text-white">
                Button SM
              </button>
              <button className="rounded-md bg-primary-600 px-6 py-2 text-white">
                Button MD
              </button>
            </div>
          </div>

          {/* Cards */}
          <div>
            <p className="mb-4 text-body-sm text-neutral-600">
              Cards (rounded-md)
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-card border border-neutral-200 bg-neutral-0 p-4"
                >
                  <h4 className="mb-2 text-heading-sm">Card {i}</h4>
                  <p className="text-body-sm text-neutral-600">
                    Standard card with medium border radius
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Input Fields */}
          <div>
            <p className="mb-4 text-body-sm text-neutral-600">
              Input Fields (rounded-sm)
            </p>
            <input
              type="text"
              placeholder="Enter text"
              className="w-full rounded-sm border border-neutral-300 bg-neutral-0 px-4 py-2 text-body-md"
            />
          </div>

          {/* Pills / Badges */}
          <div>
            <p className="mb-4 text-body-sm text-neutral-600">
              Pills / Badges (rounded-full)
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-primary-100 px-4 py-2 text-body-sm text-primary-900">
                Pill Badge
              </span>
              <span className="rounded-full bg-success px-4 py-2 text-body-sm text-white">
                Success
              </span>
              <span className="rounded-full bg-warning px-4 py-2 text-body-sm text-white">
                Warning
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Component Example */}
      <div>
        <h3 className="mb-6 text-heading-sm">Complete Example: Contact Card</h3>
        <div className="max-w-sm">
          <div className="overflow-hidden rounded-card border border-neutral-200 bg-neutral-0 shadow-md">
            {/* Header */}
            <div className="h-32 bg-gradient-to-r from-primary-600 to-primary-700" />

            {/* Content */}
            <div className="px-6 pb-6 pt-4">
              {/* Avatar */}
              <div className="-mt-16 mb-4 flex justify-center">
                <div className="flex size-24 items-center justify-center rounded-full border-4 border-neutral-0 bg-primary-600 shadow-lg">
                  <span className="text-heading-lg text-white">AC</span>
                </div>
              </div>

              <h3 className="mb-1 text-center text-heading-sm">Alex Chen</h3>
              <p className="mb-4 text-center text-body-sm text-neutral-600">
                Product Designer
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 rounded-xs bg-primary-600 px-4 py-2 text-body-sm font-semibold text-white">
                  Connect
                </button>
                <button className="flex-1 rounded-xs border border-neutral-300 px-4 py-2 text-body-sm font-semibold text-neutral-900">
                  Message
                </button>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-body-xs text-neutral-700">
                  Design
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-body-xs text-neutral-700">
                  UI/UX
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * Effects Constants
 *
 * Access shadow and border-radius values programmatically.
 */
export const EffectsConstants: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <p className="text-body-md">Use effects constants for dynamic styling:</p>
      <pre className="overflow-auto rounded-md bg-neutral-100 p-4 font-mono text-body-xs">
        {`import { SHADOWS, BORDER_RADIUS } from '@/lib/design-tokens';

// Apply shadows
const cardStyle = {
  boxShadow: SHADOWS.MD,
  borderRadius: BORDER_RADIUS.CARD,
};

// Use semantic aliases
const buttonRadius = BORDER_RADIUS.BUTTON; // "4px"
const pillRadius = BORDER_RADIUS.PILL; // "10000px"

// Available values
console.log(SHADOWS.MENU); 
// Output: 0 4px 84px rgba(27, 14, 24, 0.14)`}
      </pre>
    </div>
  ),
};
