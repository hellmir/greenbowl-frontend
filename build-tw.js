import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";
import StyleDictionary from "style-dictionary";

const sd = new StyleDictionary(
  makeSdTailwindConfig({
    type: "all",
    source: ["./tokens/buildTokens.json"],
    buildPath: "",
  })
);

await sd.hasInitialized;
await sd.buildAllPlatforms();
