import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design System/Component Styling Guide',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

/**
 * Component Styling Guide
 *
 * Learn how to use design tokens to style components consistently.
 */
export const StylingPatterns: StoryObj = {
  render: () => (
    <div className="space-y-12">
      {/* Button Variants */}
      <div>
        <h3 className="mb-6 text-heading-sm">Button Patterns</h3>
        <div className="space-y-6">
          {/* Primary Button */}
          <div>
            <p className="mb-3 text-body-sm text-neutral-600">Primary Button</p>
            <button className="rounded-button bg-primary-600 px-6 py-3 text-button-lg font-semibold text-white transition-colors hover:bg-primary-700 active:bg-primary-800">
              Primary Action
            </button>
            <pre className="mt-3 overflow-auto rounded-md bg-neutral-100 p-3 font-mono text-body-xs">
              className=
              {
                '"bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white px-6 py-3 rounded-button font-semibold"'
              }
            </pre>
          </div>

          {/* Secondary Button */}
          <div>
            <p className="mb-3 text-body-sm text-neutral-600">
              Secondary Button
            </p>
            <button className="rounded-button border border-neutral-300 bg-neutral-0 px-6 py-3 text-button-lg font-semibold text-neutral-900 transition-colors hover:bg-neutral-50">
              Secondary Action
            </button>
            <pre className="mt-3 overflow-auto rounded-md bg-neutral-100 p-3 font-mono text-body-xs">
              className=
              {`"border border-neutral-300 bg-neutral-0 hover:bg-neutral-50 text-neutral-900 px-6 py-3 rounded-button"`}
            </pre>
          </div>

          {/* Destructive Button */}
          <div>
            <p className="mb-3 text-body-sm text-neutral-600">
              Destructive Button
            </p>
            <button className="rounded-button bg-error px-6 py-3 text-button-lg font-semibold text-white transition-colors hover:bg-red-600">
              Delete
            </button>
            <pre className="mt-3 overflow-auto rounded-md bg-neutral-100 p-3 font-mono text-body-xs">
              className=
              {
                '"bg-error hover:bg-red-600 text-white px-6 py-3 rounded-button font-semibold"'
              }
            </pre>
          </div>

          {/* Disabled State */}
          <div>
            <p className="mb-3 text-body-sm text-neutral-600">
              Disabled Button
            </p>
            <button
              disabled
              className="cursor-not-allowed rounded-button bg-neutral-300 px-6 py-3 text-button-lg font-semibold text-neutral-500"
            >
              Disabled
            </button>
            <pre className="mt-3 overflow-auto rounded-md bg-neutral-100 p-3 font-mono text-body-xs">
              className=
              {'"bg-neutral-300 text-neutral-500 cursor-not-allowed disabled"'}
            </pre>
          </div>
        </div>
      </div>

      {/* Card Patterns */}
      <div>
        <h3 className="mb-6 text-heading-sm">Card Patterns</h3>

        {/* Basic Card */}
        <div className="mb-6">
          <p className="mb-3 text-body-sm text-neutral-600">Basic Card</p>
          <div className="rounded-card border border-neutral-200 bg-neutral-0 p-6 shadow-md">
            <h4 className="mb-2 text-heading-sm text-neutral-900">
              Card Title
            </h4>
            <p className="text-body-md text-neutral-700">
              Card content with consistent spacing and semantic colors.
            </p>
          </div>
        </div>

        {/* Product Card */}
        <div>
          <p className="mb-3 text-body-sm text-neutral-600">Product Card</p>
          <div className="overflow-hidden rounded-card border border-neutral-200 bg-neutral-0 shadow-md transition-shadow hover:shadow-lg">
            <div className="h-48 bg-neutral-200" />
            <div className="p-4">
              <h4 className="mb-2 text-heading-xs text-neutral-900">
                Product Name
              </h4>
              <p className="mb-4 text-body-sm text-neutral-600">
                Product description with details
              </p>
              <div className="flex gap-3">
                <span className="text-heading-xs font-semibold text-primary-600">
                  $99.99
                </span>
                <button className="ml-auto rounded-xs bg-primary-600 px-4 py-2 text-body-sm font-semibold text-white hover:bg-primary-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Patterns */}
      <div>
        <h3 className="mb-6 text-heading-sm">Form Patterns</h3>
        <div className="max-w-md space-y-6">
          {/* Text Input */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-body-md font-semibold text-neutral-900"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-input border border-neutral-300 bg-neutral-0 px-4 py-2 text-neutral-900 placeholder:text-neutral-500 focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
            />
          </div>

          {/* Textarea */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-body-md font-semibold text-neutral-900"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows={4}
              className="w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-2 text-neutral-900 placeholder:text-neutral-500 focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600"
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-3">
            <input type="checkbox" className="size-4 rounded-sm" />
            <span className="text-body-md text-neutral-700">
              I agree to the terms and conditions
            </span>
          </label>

          {/* Submit Button */}
          <button className="w-full rounded-button bg-primary-600 px-6 py-3 text-button-lg font-semibold text-white transition-colors hover:bg-primary-700">
            Submit
          </button>
        </div>
      </div>

      {/* Layout Patterns */}
      <div>
        <h3 className="mb-6 text-heading-sm">Layout Patterns</h3>

        {/* Hero Section */}
        <div className="mb-8 rounded-card bg-primary-600 p-12 text-center text-white">
          <h2 className="mb-4 text-display-sm">Welcome to EasyMart</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-lg">
            Discover our collection of premium products with fast shipping and
            excellent customer service.
          </p>
          <button className="rounded-button bg-white px-8 py-3 text-button-lg font-semibold text-primary-600 transition-colors hover:bg-neutral-100">
            Shop Now
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {['Fast Shipping', 'Best Price', 'Great Support'].map((feature) => (
            <div
              key={feature}
              className="rounded-card border border-neutral-200 bg-neutral-0 p-6 text-center"
            >
              <div className="mx-auto mb-4 size-12 rounded-full bg-primary-100" />
              <h4 className="mb-2 text-heading-xs">{feature}</h4>
              <p className="text-body-sm text-neutral-600">
                Description of this feature and its benefits.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div className="rounded-card border border-neutral-200 bg-neutral-50 p-6">
        <h3 className="mb-4 text-heading-sm">Styling Best Practices</h3>
        <ul className="space-y-3 text-body-md">
          <li className="flex gap-3">
            <span className="font-bold text-success">✓</span>
            <span>
              <strong>Use Tailwind utilities:</strong> Prefer
              <code className="mx-1 bg-neutral-100 px-2 font-mono">
                className
              </code>
              over inline styles
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-success">✓</span>
            <span>
              <strong>Reference design tokens:</strong> Always use defined
              colors, spacing, and typography
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-success">✓</span>
            <span>
              <strong>Maintain consistency:</strong> Reuse patterns for buttons,
              cards, and forms
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-error">✗</span>
            <span>
              Never hardcode colors like #d63ba8 or arbitrary spacing like 19px
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-error">✗</span>
            <span>Avoid mixing Tailwind with inline styles inconsistently</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-error">✗</span>
            <span>Don&apos;t create custom sizes not in the design system</span>
          </li>
        </ul>
      </div>
    </div>
  ),
};
