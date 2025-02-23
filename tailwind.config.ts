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
        background: "#FF9D68",
        foreground: "var(--foreground)",
        'accent': '#FF9156',
        'accent-light': '#FFE7D9',
        'light-gray': '#F8F8F8',
        'primary': '#E1ECFF',
        'gray-text': '#575757'
      },
    },
  },
  plugins: [],
} satisfies Config;
