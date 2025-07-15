"use client"

import { Badge } from "@/components/ui/badge";
import Editor from "react-simple-code-editor";
import "prismjs/themes/prism-okaidia.css";
import { useCustomizationStore } from "@/stores/customizationStore";
import { highlightCodeCustom } from "@/lib/custom-prism-utils";

interface CodeInputProps {
  code: string;
  setCode: (c: string) => void;
  fontSize: string;
}

const CodeInput = ({ code, setCode, fontSize }: CodeInputProps) => {
  const { backgroundColor, language } = useCustomizationStore();

  return (
    <div className="h-full px-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white drop-shadow-lg">
          Code Input
        </h3>
        <Badge
          variant="secondary"
          className="bg-white/10 backdrop-blur-sm text-white border-white/20 shadow-lg"
        >
          Live Preview
        </Badge>
      </div>
      <div className="relative h-full max-h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 rounded-xl backdrop-blur-sm border border-white/10 shadow-2xl" />
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) => {
            const { value: html } = highlightCodeCustom(
              code,
              language,
              backgroundColor
            );
            return <span dangerouslySetInnerHTML={{ __html: html }} />;
          }}
          padding={24}
          style={{
            fontFamily: "monospace",
            fontSize: `${fontSize}px`,
            color: "#fff",
            background: "transparent",
            minHeight: "60vh",
            maxHeight: "60vh",
            outline: "none",
            position: "relative",
            zIndex: 1,
          }}
          textareaClassName="text-zinc-200 placeholder:text-zinc-500"
          placeholder="Paste your code here..."
        />
        <div className="absolute top-4 right-4 text-xs text-zinc-400 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10 z-10">
          {code.length} characters
        </div>
      </div>
    </div>
  );
};

export default CodeInput;
