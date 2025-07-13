import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CodePreviewProps {
  highlightedCode: string;
  language: string;
  fontFamily: string;
  fontSize: string;
  backgroundColor: string;
  editorTheme: string;
}

function getOverlayColor(themeBg: string) {
  if (themeBg.startsWith('#')) {
    const hex = themeBg.replace('#', '');
    const r = parseInt(hex.substring(0,2), 16);
    const g = parseInt(hex.substring(2,4), 16);
    const b = parseInt(hex.substring(4,6), 16);
    const luminance = (0.299*r + 0.587*g + 0.114*b) / 255;
    return luminance > 0.6
      ? 'rgba(30,32,38,0.98)'
      : 'rgba(30,32,38,0.92)';
  }
  return 'rgba(30,32,38,0.7)';
}

const CodePreview = ({
  highlightedCode,
  language,
  fontFamily,
  fontSize,
  backgroundColor,
  editorTheme,
}: CodePreviewProps) => (
  <div className="h-full">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-semibold text-white drop-shadow-lg">
        Live Preview
      </h3>
      <Badge
        variant="outline"
        className="bg-white/10 backdrop-blur-sm text-white border-white/20 shadow-lg"
      >
        {language.charAt(0).toUpperCase() + language.slice(1)}
      </Badge>
    </div>
    <div
      className={`relative flex flex-col items-center justify-center h-full min-h-[200px] max-h-[80vh] rounded-2xl shadow-2xl overflow-visible p-6`}
      style={{ background: backgroundColor }}
    >
      <div className="relative w-full max-w-3xl mx-auto rounded-xl shadow-xl border border-black/10 overflow-hidden" style={{ margin: '2rem auto' }}>
        <div className="flex items-center justify-between h-10 px-4 bg-black/20 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-white/70">
            <span className="px-2 py-1 bg-white/10 rounded text-white/90 font-medium">Untitled-1</span>
          </div>
        </div>
        
        <div 
          className="absolute inset-0 pointer-events-none z-0" 
          style={{ background: getOverlayColor(backgroundColor) }}
        />
        
        <ScrollArea className="h-full max-h-[500px] relative z-20">
          <div className="p-6">
            <pre
              className={`custom-theme prism font-mono text-sm leading-relaxed whitespace-pre-wrap break-words language-${language} ${editorTheme} relative z-10`}
              style={{
                fontFamily: `var(--font-${fontFamily})`,
                fontSize: `${fontSize}px`,
                background: 'none',
              }}
            >
              <code
                className={`language-${language}`}
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            </pre>
          </div>
        </ScrollArea>
      </div>
    </div>
  </div>
);

export default CodePreview;
