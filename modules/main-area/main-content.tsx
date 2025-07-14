"use client";

import { useState, useRef, useEffect } from "react";
import MainContentHeader from "./MainContentHeader";
import CodeInput from "./CodeInput";
import CodePreview from "./CodePreview";
import { toPng } from "html-to-image";
import { useCustomizationStore } from "@/stores/customizationStore";
import { highlightCodeCustom, injectCustomThemeCSS } from "@/lib/custom-prism-utils";

export function MainContent() {
  const [mode, setMode] = useState<"code" | "preview">("code");
  const [code, setCode] = useState(`function helloWorld() {
  console.log("Hello, World!");
  return "Welcome to Snipix!";
}

// Your code snippet will be rendered here
helloWorld();`);

  const previewRef = useRef<HTMLDivElement>(null);

  // Get all customization settings from Zustand
  const {
    language,
    editorTheme,
    fontSize,
    backgroundColor,
    windowStyle,
    bold,
    italic,
    lineNumbers,
  } = useCustomizationStore();

  // Custom theme highlighting
  const { value: highlightedCode } = highlightCodeCustom(code, language, backgroundColor);

  // Inject custom theme CSS
  useEffect(() => {
    if (!editorTheme) return;
    
    // Always use custom themes now
    const customResult = highlightCodeCustom(code, language, backgroundColor);
    injectCustomThemeCSS(customResult.css);
  }, [editorTheme, backgroundColor, code, language]);

  const handleExport = async () => {
    if (previewRef.current && code.trim()) {
      try {
        const dataUrl = await toPng(previewRef.current, { cacheBust: true });
        const link = document.createElement("a");
        link.download = "snipix-code.png";
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.log(err);
      }
    }
  };

  // Get the custom theme to get the actual background color
  const customResult = highlightCodeCustom(code, language, backgroundColor);
  const editorBg = customResult.theme.background;
  
  // // Compose style props for preview
  // const previewStyle = {
  //   fontFamily: `var(--font-${fontFamily})`,
  //   fontSize: `${fontSize}px`,
  //   background: editorBg,
  // };

  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">
      {/* Background Glass Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-transparent to-zinc-800/20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <MainContentHeader
        mode={mode}
        setMode={setMode}
        onExport={mode === "preview" && code.trim() ? handleExport : undefined}
      />
      <div className="relative flex-1 p-6">
        {mode === "code" ? (
          <CodeInput code={code} setCode={setCode} fontSize={fontSize} />
        ) : (
          <div ref={previewRef} className="h-full">
            <CodePreview
              highlightedCode={highlightedCode}
              language={language}
              fontSize={fontSize}
              backgroundColor={editorBg}
              windowStyle={windowStyle}
              editorTheme={editorTheme}
              bold={bold}
              italic={italic}
              lineNumbers={lineNumbers}
            />
          </div>
        )}
      </div>
    </div>
  );
} 