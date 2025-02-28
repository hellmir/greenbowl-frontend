/* eslint-disable @typescript-eslint/no-require-imports */
const plugin = require("tailwindcss/plugin");
import typography from "./build/typography.js";
import colors from "./build/colors.js";

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        spoqa: ["var(--font-spoqa)"],
      },
      screens: {
        md: "599px",
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(fill|stroke)-(foundation-primary|content-quinary|content-tertiary|foundation-secondary|content-quarternary)$/,
    },
  ],
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ...typography,
      };

      addUtilities(newUtilities, ["responsive", "hover", "apply"]);
    }),
  ],
};
