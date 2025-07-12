import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

interface CodeInputProps {
  code: string;
  setCode: (c: string) => void;
  fontFamily: string;
  fontSize: string;
}

const CodeInput = ({ code, setCode, fontFamily, fontSize }: CodeInputProps) => (
  <div className="h-full">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-semibold text-white drop-shadow-lg">Code Input</h3>
      <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border-white/20 shadow-lg">
        Live Preview
      </Badge>
    </div>
    <div className="relative h-full max-h-[60vh]">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 to-zinc-900/30  rounded-xl backdrop-blur-sm border border-white/10 shadow-2xl" />
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        className="relative h-full max-h-[60vh] min-h-full font-mono text-sm resize-none bg-transparent border-0 text-zinc-200 placeholder:text-zinc-500 focus:ring-0 p-6 overflow-auto"
        style={{ fontFamily: `var(--font-${fontFamily})`, fontSize: `${fontSize}px` }}
      />
      <div className="absolute top-4 right-4 text-xs text-zinc-400 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10">
        {code.length} characters
      </div>
    </div>
  </div>
);

export default CodeInput; 