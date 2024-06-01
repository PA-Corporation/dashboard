import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "color-white": "#ffffff",
        "color-black": "#1f1f1f",
        "color-primary": "#31363f",
        "color-hover": "#3f3f46",
        "color-danger": "#f31260",
      },
      height: {
        "40": "40rem",
        "41": "41rem",
        "42": "42rem",
        "43": "43rem",
        "44": "44rem",
        "45": "45rem",
        "46": "46rem",
        "47": "47rem",
        "48": "48rem",
        "49": "49rem",
        "50": "50rem",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
      },
    }),
  ],
};
export default config;
