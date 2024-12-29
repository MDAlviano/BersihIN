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
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#2ECC71",
        color2: "#31493C",
        color3: "#001A23",
        color4: "#7A82AB",
        color5: "#E8F1F2",
        color6: "#A8D5BA",
        color7: "#F5F5F5",
      },
    },
  },
  plugins: [],
} satisfies Config;
