import Prism from "prismjs";
import { generateCustomTheme, generateCustomCSS, type CustomTheme } from "./custom-themes";
import type { BackgroundColor } from "@/modules/sidebar/background-selector";


import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-go";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-php";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-scala";
import "prismjs/components/prism-perl";
import "prismjs/components/prism-lua";
import "prismjs/components/prism-csharp";

export interface CustomHighlightResult {
  value: string;
  language: string;
  theme: CustomTheme;
  css: string;
}

export function highlightCodeCustom(code: string, language: string, backgroundColor: BackgroundColor): CustomHighlightResult {
  const theme = generateCustomTheme(backgroundColor);
  
  const css = generateCustomCSS(theme);
  
  if (typeof window !== "undefined") {
    console.log("Custom highlight language:", language, "background:", backgroundColor);
  }
  
  let lang = language;
  if (!Prism.languages[lang]) {
    if (Prism.languages["javascript"]) {
      lang = "javascript";
    } else if (Prism.languages["markup"]) {
      lang = "markup";
    } else {
      // No Prism language loaded, return plain text
      return { 
        value: code, 
        language: "plaintext",
        theme,
        css
      };
    }
  }
  
  try {
    return {
      value: Prism.highlight(code, Prism.languages[lang], lang),
      language: lang,
      theme,
      css
    };
  } catch (err) {
    console.log(err);
    return { 
      value: code, 
      language: "plaintext",
      theme,
      css
    };
  }
}

export const CUSTOM_THEME_NAMES = [
  "Custom Dark Gray",
  "Custom Black",
  "Custom Blue Gradient",
  "Custom Purple Gradient",
  "Custom Green Gradient",
  "Custom Orange Gradient",
  "Custom Red Gradient",
  "Custom Pink Gradient",
  "Custom Cyan Gradient",
  "Custom Yellow Gradient",
  "Custom Teal Gradient",
  "Custom Indigo Gradient",
  "Custom Emerald Gradient",
  "Custom Violet Gradient",
  "Custom Sunset Gradient",
  "Custom Ocean Gradient",
  "Custom Forest Gradient",
  "Custom Fire Gradient",
  "Custom Aurora Gradient",
  "Custom Cosmic Gradient",
  "Custom Neon Gradient",
  "Custom Pastel Gradient",
  "Custom Midnight Gradient",
  "Custom Nordic Gradient",
  "Custom Synthwave Gradient",
  "Custom Material Gradient",
  "Custom Gruvbox Gradient",
  "Custom Laserwave Gradient",
  "Custom Coldark Gradient",
];

export function getCustomThemeName(backgroundColor: BackgroundColor): string {
  return `Custom ${backgroundColor.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
}

export function injectCustomThemeCSS(css: string): void {
  if (typeof window === "undefined") return;
  
  const existingStyle = document.getElementById("custom-theme-styles");
  if (existingStyle) {
    existingStyle.remove();
  }
  
  const style = document.createElement("style");
  style.id = "custom-theme-styles";
  style.textContent = css;
  document.head.appendChild(style);
} 