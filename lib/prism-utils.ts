import Prism from "prismjs";
// (No static theme imports here; all theme CSS will be loaded dynamically)

// Import Prism languages (add more as needed)
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

export interface PrismHighlightResult {
  value: string;
  language: string;
}

export function highlightCodePrism(code: string, language: string): PrismHighlightResult {
  // Log for debugging
  if (typeof window !== "undefined") {
    console.log("Prism highlight language:", language);
  }
  // Fallback order: user language -> javascript -> markup -> plain text
  let lang = language;
  if (!Prism.languages[lang]) {
    if (Prism.languages["javascript"]) {
      lang = "javascript";
    } else if (Prism.languages["markup"]) {
      lang = "markup";
    } else {
      // No Prism language loaded, return plain text
      return { value: code, language: "plaintext" };
    }
  }
  try {
    return {
      value: Prism.highlight(code, Prism.languages[lang], lang),
      language: lang,
    };
  } catch (err) {
    console.log(err)
    return { value: code, language: "plaintext" };
  }
}

export const PRISM_LANGUAGES = [
  "javascript",
  "typescript",
  "python",
  "java",
  "c",
  "cpp",
  "markup",
  "css",
  "json",
  "bash",
  "go",
  "rust",
  "php",
  "ruby",
  "swift",
  "kotlin",
  "sql",
  "dart",
  "scala",
  "perl",
  "lua",
  "csharp",
];

export function getPrismLanguageName(lang: string): string {
  return lang.charAt(0).toUpperCase() + lang.slice(1).replace(/-/g, ' ');
}

export const PRISM_THEMES = [
  { value: "prism-cb", label: "CB" },
  { value: "prism-ghcolors", label: "GHColors" },
  { value: "prism-pojoaque", label: "Pojoaque" },
  { value: "prism-xonokai", label: "Xonokai" },
  { value: "prism-base16-ateliersulphurpool.light", label: "Ateliersulphurpool Light" },
  { value: "prism-hopscotch", label: "Hopscotch" },
  { value: "prism-atom-dark", label: "Atom Dark" },
  { value: "prism-duotone-dark", label: "Duotone Dark" },
  { value: "prism-duotone-sea", label: "Duotone Sea" },
  { value: "prism-duotone-space", label: "Duotone Space" },
  { value: "prism-duotone-earth", label: "Duotone Earth" },
  { value: "prism-duotone-forest", label: "Duotone Forest" },
  { value: "prism-duotone-light", label: "Duotone Light" },
  { value: "prism-vs", label: "VS" },
  { value: "prism-vsc-dark-plus", label: "VS Code Dark+" },
  { value: "prism-darcula", label: "Darcula" },
  { value: "prism-a11y-dark", label: "A11y Dark" },
  { value: "prism-dracula", label: "Dracula" },
  { value: "prism-synthwave84", label: "Synthwave '84" },
  { value: "prism-shades-of-purple", label: "Shades of Purple" },
  { value: "prism-material-dark", label: "Material Dark" },
  { value: "prism-material-light", label: "Material Light" },
  { value: "prism-material-oceanic", label: "Material Oceanic" },
  { value: "prism-nord", label: "Nord" },
  { value: "prism-coldark-cold", label: "Coldark Cold" },
  { value: "prism-coldark-dark", label: "Coldark Dark" },
  { value: "prism-coy-without-shadows", label: "Coy (No Shadows)" },
  { value: "prism-gruvbox-dark", label: "Gruvbox Dark" },
  { value: "prism-gruvbox-light", label: "Gruvbox Light" },
  { value: "prism-lucario", label: "Lucario" },
  { value: "prism-night-owl", label: "Night Owl" },
  { value: "prism-holi-theme", label: "Holi Theme" },
  { value: "prism-z-touch", label: "Z-Touch" },
  { value: "prism-solarized-dark-atom", label: "Solarized Dark Atom" },
  { value: "prism-one-dark", label: "One Dark" },
  { value: "prism-one-light", label: "One Light" },
  { value: "prism-laserwave", label: "Laserwave" },
];
// No dynamic theme loading needed; all themes are statically imported and available. 