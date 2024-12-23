import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "noto-sans": ['var(--font-noto-sans)'],
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
} satisfies Config;
