import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodePreviewToggle } from "./code-preview-toggle";
import { Download, ImageIcon, Sparkles } from "lucide-react";

interface MainContentHeaderProps {
  mode: "code" | "preview";
  setMode: (m: "code" | "preview") => void;
  onExport?: () => void;
}

const MainContentHeader = ({
  mode,
  setMode,
  onExport,
}: MainContentHeaderProps) => (
  <div className="relative flex h-16 items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-xl px-6 shadow-lg mb-6">
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-lg blur-sm" />
          <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-lg p-2 border border-white/10">
            <ImageIcon className="h-6 w-6 text-white" />
            <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1" />
          </div>
        </div>
        <h1 className="text-xl font-bold text-white drop-shadow-lg">Snipix</h1>
      </div>
      <div className="h-4 w-px bg-gradient-to-b from-white/20 to-transparent" />
      <Badge
        variant="secondary"
        className="bg-white/10 backdrop-blur-sm text-white border-white/20 shadow-lg"
      >
        Code Snippet Generator
      </Badge>
    </div>
    <div className="flex items-center gap-4">
      <CodePreviewToggle mode={mode} onModeChange={setMode} />
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          onClick={onExport}
          disabled={!onExport}
        >
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  </div>
);

export default MainContentHeader;
