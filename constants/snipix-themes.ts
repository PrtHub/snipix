import type { FontFamily, FontSize } from "@/modules/sidebar/typography-selector";
import type { BackgroundColor } from "@/modules/sidebar/background-selector";
import type { WindowStyle } from "@/modules/sidebar/window-style-selector";

export interface SnipixTheme {
  name: string;
  description: string;
  highlightTheme: string;
  background: BackgroundColor;
  fontFamily: FontFamily;
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
    fontFamily: "jetbrains-mono",
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
    name: "Night Owl",
    description: "Dark theme optimized for night coding",
    highlightTheme: "custom-dark-gray",
    background: "dark-gray",
    fontFamily: "jetbrains-mono",
    fontSize: "16",
    windowStyle: "rounded",
    previewColors: {
      primary: "#011627",
      secondary: "#1d3b53",
      accent: "#7e57c2",
    },
    category: "dark",
  },
  {
    name: "One Dark",
    description: "Atom's popular dark theme",
    highlightTheme: "custom-dark-gray",
    background: "dark-gray",
    fontFamily: "fira-code",
    fontSize: "16",
    windowStyle: "macos",
    previewColors: {
      primary: "#282c34",
      secondary: "#21252b",
      accent: "#61afef",
    },
    category: "popular",
  },
  {
    name: "Shades of Purple",
    description: "Purple-focused theme",
    highlightTheme: "custom-purple-gradient",
    background: "purple-gradient",
    fontFamily: "fira-code",
    fontSize: "16",
    windowStyle: "rounded",
    previewColors: {
      primary: "#2d1b69",
      secondary: "#1b103d",
      accent: "#a599e9",
    },
    category: "colorful",
  },
  {
    name: "VS Code Dark+",
    description: "Default VS Code dark theme",
    highlightTheme: "custom-dark-gray",
    background: "dark-gray",
    fontFamily: "jetbrains-mono",
    fontSize: "16",
    windowStyle: "windows",
    previewColors: {
      primary: "#1e1e1e",
      secondary: "#252526",
      accent: "#007acc",
    },
    category: "popular",
  },
]; 