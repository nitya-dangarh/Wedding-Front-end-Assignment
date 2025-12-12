import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#BECFEE',
        'gradient-mid': '#71C6E2',
        'gradient-light': '#D9F4FA',
        'card-bg': '#F4FDFF',
        'text-primary': '#15313D',
        'accent-blue': '#96E5FF',
        'border-gray': '#E6E6E6',
      },
      fontFamily: {
        'serif-display': ['DM Serif Display', 'serif'],
        'sans': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

