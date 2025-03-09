import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#161f48",
        foreground: "var(--foreground)",
        'accent': '#e65a28',
        'accent-light': '#F8DED5',
        'light-gray': '#F8F8F8',
        'primary': '#E1ECFF',
        'gray-text': '#575757'
      },
    },
  },
  plugins: [],
} satisfies Config;
