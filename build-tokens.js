import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

register(StyleDictionary);

["colors", "typography", "spacing"].forEach((category) => {
  StyleDictionary.registerFormat({
    name: `json/${category}`,
    format: ({ dictionary }) => {
      const filteredObject = dictionary.allTokens.reduce((acc, prop) => {
        if (prop.path[0] === category) {
          const isTypography = category === "typography";
          const newName = prop.name.replace(`${category}-`, "");

          if (prop.value.fontFamily) {
            prop.value.fontFamily = "var(--spoqa-han-sans-neo)";
          }

          acc[`${isTypography ? "." : ""}${newName}`] = prop.value;
        }
        return acc;
      }, {});

      if (Object.keys(filteredObject).length === 0) {
        console.warn(`⚠️ No tokens found for ${category}`);
      }

      return `const ${category} = ${JSON.stringify(filteredObject, null, 2)} \n\n export default ${category}`;
    },
  });
});

const sdConfig = {
  source: ["./tokens/tokens.json"],

  platforms: {
    css: {
      buildPath: "./build/",
      transforms: ["name/kebab"],
      files: [
        {
          destination: "colors.js",
          format: "json/colors",
        },
        {
          destination: "typography.js",
          format: "json/typography",
        },
        {
          destination: "spacing.js",
          format: "json/spacing",
        },
      ],
    },
  },
  log: {
    verbosity: "verbose",
  },
};

const styleDictionary = new StyleDictionary(sdConfig);
styleDictionary.buildAllPlatforms();
