/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      sm: 'var(--breakpoint-mobile)',
      md: 'var(--breakpoint-tablet)',
      lg: 'var(--breakpoint-desktop)',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        primary: 'var(--font-family-primary)',
        secondary: 'var(--font-family-secondary)',
      },
      fontSize: {
        // Display styles
        'display-lg': ['140px', { lineHeight: '140px', letterSpacing: '-2px', fontWeight: '600' }],
        'display-md': ['110px', { lineHeight: '110px', letterSpacing: '-1.5px', fontWeight: '600' }],
        'display-sm': ['98px', { lineHeight: '98px', letterSpacing: '-1.5px', fontWeight: '600' }],
        // Heading styles
        'heading-2xl': ['63px', { lineHeight: '72px', letterSpacing: '-1px', fontWeight: '600' }],
        'heading-xl': ['54px', { lineHeight: '64px', letterSpacing: '-0.5px', fontWeight: '600' }],
        'heading-lg': ['44px', { lineHeight: '52px', letterSpacing: '0px', fontWeight: '600' }],
        'heading-md': ['42px', { lineHeight: '50px', letterSpacing: '0px', fontWeight: '600' }],
        'heading-sm': ['34px', { lineHeight: '40px', letterSpacing: '0px', fontWeight: '600' }],
        'heading-xs': ['28px', { lineHeight: '34px', letterSpacing: '0px', fontWeight: '600' }],
        'heading-2xs': ['20px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '600' }],
        // Body styles
        'body-lg': ['20px', { lineHeight: '28px', letterSpacing: '0px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '400' }],
        'body-xs': ['12px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '400' }],
        // Button styles
        'button-lg': ['16px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '600' }],
        'button-md': ['14px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '600' }],
        'button-sm': ['12px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '600' }],
      },
      spacing: {
        0: 'var(--space-0)',
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        7: 'var(--space-7)',
        8: 'var(--space-8)',
        9: 'var(--space-9)',
        10: 'var(--space-10)',
      },
      colors: {
        // Design token colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          DEFAULT: 'var(--color-primary-600)',
          foreground: 'var(--color-text-inverse)',
        },
        neutral: {
          0: 'var(--color-neutral-0)',
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
          950: 'var(--color-neutral-950)',
          1000: 'var(--color-neutral-1000)',
        },
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      boxShadow: {
        menu: 'var(--shadow-menu)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
        button: 'var(--radius-button)',
        card: 'var(--radius-card)',
        pill: 'var(--radius-pill)',
        input: 'var(--radius-input)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
