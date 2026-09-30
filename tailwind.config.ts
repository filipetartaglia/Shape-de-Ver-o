import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand-black': '#0B0D0E',
        'brand-offwhite': '#F3F1EB',
        'brand-green-deep': '#183B35',
        'brand-green-accent': '#B7D44A',
        'brand-sand': '#D8C9A5',
      },
      fontFamily: {
        headline: ['var(--font-bebas-neue)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
