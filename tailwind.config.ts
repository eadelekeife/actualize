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
        offWhite: "var(--off-text)"
      },
      fontFamily: {
        jelani: 'Jelani',
        jost: "Jost"
      },
      gridTemplateColumns: {
        "1/3": "1fr 3fr"
      }
    },
  },
  plugins: [],
} satisfies Config;
