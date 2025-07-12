import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImageIcon } from "lucide-react";

interface CodePreviewProps {
  code: string;
  highlightedCode: string;
  language: string;
  fontFamily: string;
  fontSize: string;
  backgroundColor: string;
  windowStyle: string;
  style?: React.CSSProperties;
}

const CodePreview = ({
  code,
  highlightedCode,
  language,
  fontFamily,
  fontSize,
  backgroundColor,
  windowStyle,
  style,
}: CodePreviewProps) => (
  <div className="h-full">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-semibold text-white drop-shadow-lg">Live Preview</h3>
      <Badge variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20 shadow-lg">
        {language.charAt(0).toUpperCase() + language.slice(1)}
      </Badge>
    </div>
    <div
      className={`relative h-full min-h-[200px] max-h-[60vh] rounded-xl border border-white/10 bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-sm shadow-2xl overflow-hidden ${windowStyle}`}
      style={{ ...style, background: backgroundColor }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
      {/* Code Preview with Syntax Highlighting */}
      {code.trim() ? (
        <ScrollArea className="h-full max-h-[500px]">
          <div className="p-6">
            <pre
              className="font-mono text-sm leading-relaxed"
              style={{ fontFamily: `var(--font-${fontFamily})`, fontSize: `${fontSize}px` }}
            >
              <code
                className={`language-${language}`}
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            </pre>
          </div>
        </ScrollArea>
      ) : (
        <div className="h-full flex items-center justify-center text-center text-zinc-400">
          <div>
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl" />
              <ImageIcon className="h-16 w-16 mx-auto opacity-60 relative z-10" />
            </div>
            <p className="text-sm font-medium text-white drop-shadow-lg">No code to preview</p>
            <p className="text-xs mt-2 text-zinc-500">Start typing in the code input to see live preview</p>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default CodePreview; 