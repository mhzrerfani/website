import type { Config } from "tailwindcss";

const config: Config = {
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
        "theme-background": "var(--theme-background)",
        "theme-primary": "var(--theme-primary)",
        "theme-secondary": "var(--theme-secondary)",
        "theme-accent": "var(--theme-accent)",
      },
      keyframes: {
        grow: {
          "0%, 100%": { width: "100%" },
          "50%": { width: "50%" },
        },
        "draw-and-wave": {
          "0%": { strokeDashoffset: "3000", transform: "translateY(0px)" },
          "50%": { strokeDashoffset: "0", transform: "translateY(0px)" }, // Path fully drawn at 50%
          "75%": { transform: "translateY(-10px)" }, // Start waving after draw
          "100%": { transform: "translateY(0px)" }, // Complete wave
        },
      },
      animation: {
        grow: "grow 1s ease-in-out infinite",
        "draw-and-wave": "draw-and-wave 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
