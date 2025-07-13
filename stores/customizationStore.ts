import { create } from "zustand";
import type { ProgrammingLanguage } from "@/modules/sidebar/language-selector";
import type { EditorTheme } from "@/modules/sidebar/theme-selector";
import type { WindowStyle } from "@/modules/sidebar/window-style-selector";
import type { FontFamily, FontSize } from "@/modules/sidebar/typography-selector";
import type { BackgroundColor } from "@/modules/sidebar/background-selector";
import { SNIPIX_THEMES } from "@/constants/snipix-themes";

export interface CustomizationState {
  language: ProgrammingLanguage;
  editorTheme: EditorTheme;
  windowStyle: WindowStyle;
  fontFamily: FontFamily;
  fontSize: FontSize;
  backgroundColor: BackgroundColor;
  selectedSnipixTheme: string | null;
  setLanguage: (language: ProgrammingLanguage) => void;
  setEditorTheme: (editorTheme: EditorTheme) => void;
  setWindowStyle: (windowStyle: WindowStyle) => void;
  setFontFamily: (fontFamily: FontFamily) => void;
  setFontSize: (fontSize: FontSize) => void;
  setBackgroundColor: (backgroundColor: BackgroundColor) => void;
  setSnipixTheme: (themeName: string | null) => void;
}

export const useCustomizationStore = create<CustomizationState>((set) => ({
  language: "javascript",
  editorTheme: "custom-dark-gray",
  windowStyle: "macos",
  fontFamily: "fira-code",
  fontSize: "16",
  backgroundColor: "fire-gradient",
  selectedSnipixTheme: null,
  setLanguage: (language) => set({ language }),
  setEditorTheme: (editorTheme) => set({ editorTheme }),
  setWindowStyle: (windowStyle) => set({ windowStyle }),
  setFontFamily: (fontFamily) => set({ fontFamily }),
  setFontSize: (fontSize) => set({ fontSize }),
  setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
  setSnipixTheme: (themeName) => {
    if (!themeName) {
      set({ selectedSnipixTheme: null });
      return;
    }

    // Handle custom themes
    if (themeName.startsWith("Custom ")) {
      // Extract the background color value from the name
      const backgroundValue = themeName.replace("Custom ", "").replace(/\s+/g, "-").toLowerCase();
      set({
        selectedSnipixTheme: themeName,
        editorTheme: `custom-${backgroundValue}`,
        backgroundColor: backgroundValue as BackgroundColor,
        fontFamily: "fira-code",
        fontSize: "16",
        windowStyle: "macos",
      });
      console.log('[Snipix] setSnipixTheme called (custom):', themeName);
      return;
    }

    // Handle preset themes
    const theme = SNIPIX_THEMES.find((t) => t.name === themeName);
    if (theme) {
      set({
        selectedSnipixTheme: theme.name,
        editorTheme: theme.highlightTheme,
        backgroundColor: theme.background,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize,
        windowStyle: theme.windowStyle,
      });
      console.log('[Snipix] setSnipixTheme called (preset):', themeName);
    }
  },
})); 