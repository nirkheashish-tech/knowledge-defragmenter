import type { Config } from 'tailwindcss';

export default {
  content: ['./src/renderer/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        chrome: '#d6d3ce',
        ink: '#1f2937',
        panel: '#f3f4f6'
      },
      boxShadow: {
        raised: 'inset 1px 1px #fff, inset -1px -1px #8a8a8a, 0 1px 2px rgb(0 0 0 / 0.12)',
        sunken: 'inset 1px 1px #8a8a8a, inset -1px -1px #fff'
      }
    }
  },
  plugins: []
} satisfies Config;
