import type { Config } from "tailwindcss";
import TailwindScrollBar from "tailwind-scrollbar";
import plugin from "tailwindcss/plugin";

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
      },
      fontFamily:{
        'roboto': ["var(--font-roboto)"],
      },
      fontVariationSettings: {
        'fill-1': '"FILL" 1',
        'fill-0': '"FILL" 0'
      }
    },
  },
  plugins: [TailwindScrollBar],
  variants: {
    extend:{
      scrollbar: ["rounded"]
    }
  }
} satisfies Config;
