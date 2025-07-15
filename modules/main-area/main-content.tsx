"use client";

import { useState, useRef, useEffect } from "react";
import MainContentHeader from "./MainContentHeader";
import CodeInput from "./CodeInput";
import CodePreview from "./CodePreview";
import { ExportDialog } from "./ExportDialog";
import { useCustomizationStore } from "@/stores/customizationStore";
import {
  highlightCodeCustom,
  injectCustomThemeCSS,
} from "@/lib/custom-prism-utils";
import { toPng } from "html-to-image";

export function MainContent() {
  const [mode, setMode] = useState<"code" | "preview">("code");
  const [code, setCode] = useState(`function helloWorld() {
  console.log("Hello, World!");
  return "Welcome to Snipix!";
}

// Your code snippet will be rendered here
helloWorld();`);

  const previewRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [showExportDialog, setShowExportDialog] = useState(false);

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

  const { value: highlightedCode } = highlightCodeCustom(
    code,
    language,
    backgroundColor
  );

  useEffect(() => {
    if (!editorTheme) return;
    const customResult = highlightCodeCustom(code, language, backgroundColor);
    injectCustomThemeCSS(customResult.css);
  }, [editorTheme, backgroundColor, code, language]);

  const customResult = highlightCodeCustom(code, language, backgroundColor);
  const editorBg = customResult.theme.background;

  const handleExportClick = () => {
    setShowExportDialog(true);
  };

  const onExport = async (filename: string) => {
    if (!previewRef.current) return;

    try {
      setIsExporting(true);
      await new Promise((resolve) => setTimeout(resolve, 100));
      const dataUrl = await toPng(previewRef.current, {
        cacheBust: true,
        skipFonts: true,
        height: previewRef.current.scrollHeight,
        width: previewRef.current.scrollWidth,
      });
      setIsExporting(false);
      setShowExportDialog(false);
      const link = document.createElement("a");
      link.download = `${filename}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      setIsExporting(false);
      console.error(err);
      alert("Failed to export image. Please try again.");
    }
  };

  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-transparent to-zinc-800/20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="sticky top-0 z-50">
        <MainContentHeader mode={mode} setMode={setMode} onExport={handleExportClick} />
      </div>
      <div className="relative flex-1">
        {mode === "code" ? (
          <CodeInput code={code} setCode={setCode} fontSize={fontSize} />
        ) : (
          <>
            <div
              ref={previewRef}
              className={`h-full`}
            >
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
                isExporting={isExporting}
              />
            </div>
          </>
        )}
      </div>
      
      <ExportDialog
        isOpen={showExportDialog}
        onClose={() => setShowExportDialog(false)}
        onExport={onExport}
        isExporting={isExporting}
      />
    </div>
  );
}
