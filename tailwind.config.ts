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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'accent': '#4D8EFF',
        'light-gray': '#F8F8F8',
        'primary': '#E1ECFF',
        'gray-text': '#575757'
      },
    },
  },
  plugins: [],
} satisfies Config;
