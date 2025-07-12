import { create } from "zustand";
import type { ProgrammingLanguage } from "@/modules/sidebar/language-selector";
import type { ColorScheme, EditorTheme } from "@/modules/sidebar/theme-selector";
import type { WindowStyle } from "@/modules/sidebar/window-style-selector";
import type { FontFamily, FontSize } from "@/modules/sidebar/typography-selector";
import type { BackgroundColor } from "@/modules/sidebar/background-selector";

export interface CustomizationState {
  language: ProgrammingLanguage;
  colorScheme: ColorScheme;
  editorTheme: EditorTheme;
  windowStyle: WindowStyle;
  fontFamily: FontFamily;
  fontSize: FontSize;
  backgroundColor: BackgroundColor;
  setLanguage: (language: ProgrammingLanguage) => void;
  setColorScheme: (colorScheme: ColorScheme) => void;
  setEditorTheme: (editorTheme: EditorTheme) => void;
  setWindowStyle: (windowStyle: WindowStyle) => void;
  setFontFamily: (fontFamily: FontFamily) => void;
  setFontSize: (fontSize: FontSize) => void;
  setBackgroundColor: (backgroundColor: BackgroundColor) => void;
}

export const useCustomizationStore = create<CustomizationState>((set) => ({
  language: "javascript",
  colorScheme: "dark",
  editorTheme: "github-dark",
  windowStyle: "macos",
  fontFamily: "fira-code",
  fontSize: "16",
  backgroundColor: "dark-gray",
  setLanguage: (language) => set({ language }),
  setColorScheme: (colorScheme) => set({ colorScheme }),
  setEditorTheme: (editorTheme) => set({ editorTheme }),
  setWindowStyle: (windowStyle) => set({ windowStyle }),
  setFontFamily: (fontFamily) => set({ fontFamily }),
  setFontSize: (fontSize) => set({ fontSize }),
  setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
})); 