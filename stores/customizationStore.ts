import { create } from "zustand";
import type { ProgrammingLanguage } from "@/modules/sidebar/language-selector";
import type { EditorTheme } from "@/modules/sidebar/theme-selector";
import type { WindowStyle } from "@/modules/sidebar/window-style-selector";
import type { FontSize } from "@/modules/sidebar/typography-selector";
import type { BackgroundColor } from "@/modules/sidebar/background-selector";
import { SNIPIX_THEMES } from "@/constants/snipix-themes";

export interface CustomizationState {
  language: ProgrammingLanguage;
  editorTheme: EditorTheme;
  windowStyle: WindowStyle;
  fontSize: FontSize;
  backgroundColor: BackgroundColor;
  selectedSnipixTheme: string | null;
  bold: boolean;
  italic: boolean;
  lineNumbers: boolean;
  setLanguage: (language: ProgrammingLanguage) => void;
  setEditorTheme: (editorTheme: EditorTheme) => void;
  setWindowStyle: (windowStyle: WindowStyle) => void;
  setFontSize: (fontSize: FontSize) => void;
  setBackgroundColor: (backgroundColor: BackgroundColor) => void;
  setBold: (bold: boolean) => void;
  setItalic: (italic: boolean) => void;
  setLineNumbers: (lineNumbers: boolean) => void;
  setSnipixTheme: (themeName: string | null) => void;
}

export const useCustomizationStore = create<CustomizationState>((set) => ({
  language: "javascript",
  editorTheme: "custom-dark-gray",
  windowStyle: "macos",
  // fontFamily: "fira-code",
  fontSize: "16",
  backgroundColor: "fire-gradient",
  selectedSnipixTheme: null,
  bold: false,
  italic: false,
  lineNumbers: false,
  setLanguage: (language) => set({ language }),
  setEditorTheme: (editorTheme) => set({ editorTheme }),
  setWindowStyle: (windowStyle) => set({ windowStyle }),
  setFontSize: (fontSize) => set({ fontSize }),
  setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
  setBold: (bold) => set({ bold }),
  setItalic: (italic) => set({ italic }),
  setLineNumbers: (lineNumbers) => set({ lineNumbers }),
  setSnipixTheme: (themeName) => {
    if (!themeName) {
      set({ selectedSnipixTheme: null });
      return;
    }

    if (themeName.startsWith("Custom ")) {
      const backgroundValue = themeName.replace("Custom ", "").replace(/\s+/g, "-").toLowerCase();
      set({
        selectedSnipixTheme: themeName,
        editorTheme: `custom-${backgroundValue}`,
        backgroundColor: backgroundValue as BackgroundColor,
        fontSize: "16",
        windowStyle: "macos",
        bold: false,
        italic: false,
        lineNumbers: false,
      });
      console.log('[Snipix] setSnipixTheme called (custom):', themeName);
      return;
    }

    const theme = SNIPIX_THEMES.find((t) => t.name === themeName);
    if (theme) {
      set({
        selectedSnipixTheme: theme.name,
        editorTheme: theme.highlightTheme,
        backgroundColor: theme.background,
        fontSize: theme.fontSize,
        windowStyle: theme.windowStyle,
        bold: false,
        italic: false,
        lineNumbers: false,
      });
      console.log('[Snipix] setSnipixTheme called (preset):', themeName);
    }
  },
})); 