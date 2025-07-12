"use client";

import { useState, useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import MainContentHeader from "./MainContentHeader";
import CodeInput from "./CodeInput";
import CodePreview from "./CodePreview";
import { toPng } from "html-to-image";
import { useCustomizationStore } from "@/stores/customizationStore";
import { loadTheme } from "@/lib/highlight-utils";

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
    fontFamily,
    fontSize,
    backgroundColor,
    windowStyle,
  } = useCustomizationStore();

  useEffect(() => {
    hljs.highlightAll();
  }, [code, language, editorTheme]);

  // Use loadTheme utility to swap highlight.js theme
  useEffect(() => {
    loadTheme(editorTheme);
  }, [editorTheme]);

  let highlightedCode = code;
  try {
    highlightedCode = hljs.highlight(code, { language }).value;
  } catch {
    highlightedCode = hljs.highlightAuto(code).value;
  }

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

  // Compose style props for preview
  const previewStyle = {
    fontFamily: `var(--font-${fontFamily})`,
    fontSize: `${fontSize}px`,
    background: backgroundColor.includes("gradient") ? undefined : backgroundColor,
  };

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
          <CodeInput code={code} setCode={setCode} fontFamily={fontFamily} fontSize={fontSize} />
        ) : (
          <div ref={previewRef} className="h-full">
            <CodePreview
              code={code}
              highlightedCode={highlightedCode}
              language={language}
              fontFamily={fontFamily}
              fontSize={fontSize}
              backgroundColor={backgroundColor}
              windowStyle={windowStyle}
              style={previewStyle}
            />
          </div>
        )}
      </div>
    </div>
  );
} 