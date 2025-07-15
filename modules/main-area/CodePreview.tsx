import { ScrollArea } from "@/components/ui/scroll-area";

interface CodePreviewProps {
  highlightedCode: string;
  language: string;
  fontSize: string;
  backgroundColor: string;
  editorTheme: string;
  windowStyle: string;
  bold?: boolean;
  italic?: boolean;
  lineNumbers?: boolean;
  isExporting?: boolean;
}

function getOverlayColor(themeBg: string) {
  if (themeBg.startsWith("#")) {
    const hex = themeBg.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? "rgba(30,32,38,0.98)" : "rgba(30,32,38,0.92)";
  }
  return "rgba(30,32,38,0.9)";
}

function WindowBar({ windowStyle, language }: { windowStyle: string, language: string }) {
  const displayLang = language.charAt(0).toUpperCase() + language.slice(1);
  switch (windowStyle) {
    case "macos":
      return (
        <div className="flex items-center justify-between h-10 px-4 bg-black/30 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
          <div className="flex items-center text-sm ml-auto">
            <span className="px-2 py-1 bg-white/10 rounded text-white font-medium">
              {displayLang}
            </span>
          </div>
        </div>
      );
    case "windows":
      return (
        <div className="flex items-center justify-between h-10 px-4 bg-zinc-800/80 border-b border-white/10">
          <div className="flex items-center text-sm text-white font-semibold ml-auto">
            <span className="px-2 py-1 bg-white/10 rounded">{displayLang}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 flex items-center justify-center rounded bg-zinc-400 text-xs text-zinc-900 font-bold">
              &#8211;
            </span>
            <span className="w-3 h-3 flex items-center justify-center rounded bg-zinc-400 text-xs text-zinc-900 font-bold">
              &#9723;
            </span>
            <span className="w-3 h-3 flex items-center justify-center rounded bg-red-500 text-xs text-white font-bold">
              &#10005;
            </span>
          </div>
        </div>
      );
    case "linux":
      return (
        <div className="flex items-center justify-between h-10 px-4 bg-zinc-900/80 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
          </div>
          <div className="flex items-center text-sm text-white font-semibold ml-auto">
            <span className="px-2 py-1 bg-white/10 rounded">{displayLang}</span>
          </div>
        </div>
      );
    case "minimal":
      return null;
    default:
      // For rounded/sharp, fall back to macos bar for now
      return (
        <div className="flex items-center justify-between h-10 px-4 bg-black/30 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
          <div className="flex items-center text-sm ml-auto">
            <span className="px-2 py-1 bg-white/10 rounded text-white font-medium">
              {displayLang}
            </span>
          </div>
        </div>
      );
  }
}

const CodePreview = ({
  highlightedCode,
  language,
  fontSize,
  backgroundColor,
  editorTheme,
  windowStyle,
  bold = false,
  italic = false,
  lineNumbers = false,
  isExporting = false,
}: CodePreviewProps) => {
  let borderRadius = "1rem";
  if (windowStyle === "rounded") borderRadius = "1.5rem";
  if (windowStyle === "sharp") borderRadius = "0";

  const codeLines = highlightedCode.split(/\n/);
  const showLineNumbers = !!lineNumbers;

  return (
    <div className="h-full p-6">
      <div
       className={`relative flex flex-col items-center justify-center h-full ${isExporting ? 'min-h-[80vh]' : 'h-full min-h-[80vh]'} shadow-2xl overflow-hidden p-6 rounded-2xl`}
        style={{ background: backgroundColor }}
      >
        <div
          className="relative w-full max-w-3xl mx-auto shadow-xl border border-black/10 overflow-hidden"
          style={{ margin: "2rem auto", borderRadius }}
        >
          <WindowBar windowStyle={windowStyle} language={language} />
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: getOverlayColor(backgroundColor),
              borderRadius,
            }}
          />
          <ScrollArea className={`h-full ${isExporting ? '' : 'max-h-[500px]'} relative z-20`}>
            <div className="p-6">
              <pre
                className={`custom-theme prism font-mono text-sm leading-relaxed whitespace-pre-wrap break-words language-${language} ${editorTheme} relative z-10`}
                style={{
                  fontFamily: "monospace",
                  fontWeight: bold ? "bold" : undefined,
                  fontStyle: italic ? "italic" : undefined,
                  fontSize: `${fontSize}px`,
                  background: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                }}
              >
                {showLineNumbers ? (
                  <code
                    className={`language-${language} flex`}
                    style={{ width: "100%" }}
                  >
                    <span
                      style={{
                        userSelect: "none",
                        color: "#888",
                        textAlign: "right",
                        minWidth: "2.5em",
                        marginRight: "1em",
                        display: "inline-block",
                      }}
                    >
                      {codeLines.map((_, i) => (
                        <span
                          key={i}
                          style={{ display: "block", lineHeight: 1.7 }}
                        >
                          {i + 1}
                        </span>
                      ))}
                    </span>
                    <span style={{ width: "100%" }}>
                      {codeLines.map((line, i) => (
                        <span
                          key={i}
                          dangerouslySetInnerHTML={{ __html: line || "\u200B" }}
                          style={{ display: "block", lineHeight: 1.7 }}
                        />
                      ))}
                    </span>
                  </code>
                ) : (
                  <code
                    className={`language-${language}`}
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                  />
                )}
              </pre>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default CodePreview;
