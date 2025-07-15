import { Button } from "@/components/ui/button";
import { Code2, Eye } from "lucide-react";

interface CodePreviewToggleProps {
  mode: "code" | "preview";
  onModeChange: (mode: "code" | "preview") => void;
}

export function CodePreviewToggle({ mode, onModeChange }: CodePreviewToggleProps) {
  return (
    <div className="flex items-center gap-1 p-1 bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg">
      <Button
        variant={mode === "code" ? "default" : "ghost"}
        size="sm"
        onClick={() => onModeChange("code")}
        className={`flex items-center gap-2 cursor-pointer transition-all duration-300 ${
          mode === "code" 
            ? "bg-gradient-to-r from-white/20 to-white/10 text-white shadow-lg shadow-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/10" 
            : "text-zinc-400 hover:text-zinc-300 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm border border-transparent"
        }`}
      >
        <Code2 className="h-4 w-4" />
        Code
      </Button>
      <Button
        variant={mode === "preview" ? "default" : "ghost"}
        size="sm"
        onClick={() => onModeChange("preview")}
        className={`flex items-center gap-2 transition-all duration-300 cursor-pointer ${
          mode === "preview" 
            ? "bg-gradient-to-r from-white/20 to-white/10 text-white shadow-lg shadow-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/10" 
            : "text-zinc-400 hover:text-zinc-300 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm border border-transparent"
        }`}
      >
        <Eye className="h-4 w-4" />
        Preview
      </Button>
    </div>
  );
} 