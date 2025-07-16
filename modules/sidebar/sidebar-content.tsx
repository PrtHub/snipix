"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings } from "lucide-react";
import { LanguageSelector } from "./language-selector";
import { ThemeSelector } from "./theme-selector";
import { WindowStyleSelector } from "./window-style-selector";
import { TypographySelector } from "./typography-selector";
import { useCustomizationStore } from "@/stores/customizationStore";

export function SidebarContent() {
  const {
    language,
    setLanguage,
    editorTheme,
    setEditorTheme,
    windowStyle,
    setWindowStyle,
    fontSize,
    setFontSize,
    selectedSnipixTheme,
    setSnipixTheme,
    bold,
    italic,
    lineNumbers,
    setBold,
    setItalic,
    setLineNumbers,
  } = useCustomizationStore();

  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-zinc-900 via-black to-zinc-900 relative overflow-hidden">
      {/* Background Glass Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-transparent to-zinc-800/20" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      {/* Sidebar Header */}
      <div className="relative flex h-16 items-center gap-3 border-b border-white/10 bg-black/40 backdrop-blur-xl px-6 flex-shrink-0 shadow-lg">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-lg blur-sm" />
          <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-lg p-2 border border-white/10">
            <Settings className="h-5 w-5 text-white" />
          </div>
        </div>
        <h2 className="text-lg font-semibold text-white drop-shadow-lg">Customization</h2>
      </div>
      {/* Sidebar Content */}
      <ScrollArea className="flex-1 h-0">
        <div className="p-6 space-y-6 min-h-full">
          <LanguageSelector
            selectedLanguage={language}
            onLanguageChange={setLanguage}
          />
          <ThemeSelector
            editorTheme={editorTheme}
            selectedSnipixTheme={selectedSnipixTheme}
            onEditorThemeChange={setEditorTheme}
            onSnipixThemeChange={setSnipixTheme}
          />
          <WindowStyleSelector
            selectedStyle={windowStyle}
            onStyleChange={setWindowStyle}
          />
          <TypographySelector
            fontSize={fontSize}
            onFontSizeChange={setFontSize}
            bold={bold}
            italic={italic}
            onBoldChange={setBold}
            onItalicChange={setItalic}
            lineNumbers={lineNumbers}
            onLineNumbersChange={setLineNumbers}
          />
        </div>
      </ScrollArea>
    </div>
  );
} 