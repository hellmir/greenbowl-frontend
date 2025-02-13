/* eslint-disable @typescript-eslint/no-require-imports */
const plugin = require("tailwindcss/plugin");
import typography from "./build/typography.js";
import colors from "./build/colors.js";
import spacing from "./build/spacing.js";

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
      spacing: {
        ...spacing,
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },
      fontFamily: {
        spoqa: ["var(--font-spoqa)"],
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(fill|stroke)-(foundation-primary|content-quinary|content-tertiary)$/,
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
