import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans Arabic", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-cyan": "#00c7ff",
        "brand-yellow": "#fec32b",
        "brand-purple": "#ab84f7",
        "brand-white": "#ffffff",
        "brand-dark": "#2a393f",
      },
    },
  },
  plugins: [],
} satisfies Config;
