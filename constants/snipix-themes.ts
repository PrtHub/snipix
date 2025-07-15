import type { FontSize } from "@/modules/sidebar/typography-selector";
import type { BackgroundColor } from "@/modules/sidebar/background-selector";
import type { WindowStyle } from "@/modules/sidebar/window-style-selector";

export interface SnipixTheme {
  name: string;
  description: string;
  highlightTheme: string;
  background: BackgroundColor;
  fontSize: FontSize;
  windowStyle: WindowStyle;
  previewColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  category: "popular" | "dark" | "light" | "colorful" | "minimal";
}

export const SNIPIX_THEMES: SnipixTheme[] = [
  {
    name: "Midnight Ocean",
    description: "Deep blue tones with oceanic vibes",
    highlightTheme: "custom-midnight-gradient",
    background: "midnight-gradient",
    fontSize: "16",
    windowStyle: "macos",
    previewColors: {
      primary: "#0f1419",
      secondary: "#1e2328",
      accent: "#39d353",
    },
    category: "dark",
  },
  {
    name: "Shades of Purple",
    description: "Purple-focused theme",
    highlightTheme: "custom-purple-gradient",
    background: "purple-gradient",
    fontSize: "16",
    windowStyle: "rounded",
    previewColors: {
      primary: "#2d1b69",
      secondary: "#1b103d",
      accent: "#a599e9",
    },
    category: "colorful",
  },
]; 