import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          peach: '#E8C4B8',
          'peach-dark': '#D4A59A',
          brown: '#4A3C3C',
          'brown-light': '#6B5B5B',
          teal: '#5FB3B3',
          'teal-dark': '#4A9999',
          cream: '#FAF7F5',
          gold: '#C9A882',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
