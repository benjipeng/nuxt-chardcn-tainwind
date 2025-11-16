const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['B612', 'sans-serif'],      // Aviation cockpit font for headings
        body: ['Work Sans', 'sans-serif'],    // Professional body font
        mono: ['B612 Mono', 'monospace'],     // Technical/data font
      },
      colors: {
        /* ========================================
           MAYDAY ARCHIVE - Aviation Color System
           Semantic color tokens for both themes
           ======================================== */

        // Background tokens
        bg: {
          primary: "rgb(var(--bg-primary) / <alpha-value>)",
          secondary: "rgb(var(--bg-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--bg-tertiary) / <alpha-value>)",
          overlay: "rgb(var(--bg-overlay) / <alpha-value>)",
          backdrop: "rgb(var(--bg-backdrop) / <alpha-value>)",
        },

        // Text tokens
        text: {
          primary: "rgb(var(--text-primary) / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--text-tertiary) / <alpha-value>)",
          disabled: "rgb(var(--text-disabled) / <alpha-value>)",
        },

        // Aviation accent colors (buttons, UI elements)
        "cockpit-green": "rgb(var(--accent-green) / <alpha-value>)",
        "aviation-amber": "rgb(var(--accent-amber) / <alpha-value>)",
        "alert-red": "rgb(var(--accent-red) / <alpha-value>)",
        "nav-magenta": "rgb(var(--accent-magenta) / <alpha-value>)",
        "radar-cyan": "rgb(var(--accent-cyan) / <alpha-value>)",

        // Aviation accent colors (text - higher contrast)
        "cockpit-green-text": "rgb(var(--accent-green-text) / <alpha-value>)",
        "aviation-amber-text": "rgb(var(--accent-amber-text) / <alpha-value>)",
        "alert-red-text": "rgb(var(--accent-red-text) / <alpha-value>)",

        // Border tokens
        "border-subtle": "rgb(var(--border-subtle) / <alpha-value>)",
        "border-default": "rgb(var(--border-default) / <alpha-value>)",
        "border-strong": "rgb(var(--border-strong) / <alpha-value>)",

        /* Shadcn UI Compatibility */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "glow-green": "0 0 20px rgba(16, 185, 129, 0.4)",
        "glow-amber": "0 0 20px rgba(251, 191, 36, 0.4)",
        "glow-red": "0 0 20px rgba(239, 68, 68, 0.3)",
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.3)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate, require('@tailwindcss/typography')],
};
