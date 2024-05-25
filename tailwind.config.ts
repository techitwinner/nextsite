import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const { addDynamicIconSelectors } = require('@iconify/tailwind');

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      color: {

      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#FF6666",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#6666FF",
              foreground: "#FFFFFF",
            },
            focus: "#FF6666",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FF6666",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#6666FF",
              foreground: "#000000",
            },
            focus: "#FF6666",
          },
        },
      },
    }),
    addDynamicIconSelectors(),
  ]
};

export default config;
