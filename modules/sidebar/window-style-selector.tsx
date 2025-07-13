import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor } from "lucide-react";

export const WINDOW_STYLES = [
  { value: "macos", label: "macOS", description: "Clean macOS window style" },
  { value: "windows", label: "Windows", description: "Classic Windows appearance" },
  { value: "linux", label: "Linux", description: "Minimal Linux terminal" },
  { value: "minimal", label: "Minimal", description: "No window decorations" },
  { value: "rounded", label: "Rounded", description: "Modern rounded corners" },
  { value: "sharp", label: "Sharp", description: "Sharp geometric design" },
] as const;

export type WindowStyle = typeof WINDOW_STYLES[number]["value"];

interface WindowStyleSelectorProps {
  selectedStyle: WindowStyle;
  onStyleChange: (style: WindowStyle) => void;
}

export function WindowStyleSelector({ selectedStyle, onStyleChange }: WindowStyleSelectorProps) {
  return (
    <Card className="relative bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg" />
      <CardHeader className="relative pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2 text-white drop-shadow-lg">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-sm" />
            <Monitor className="h-4 w-4 relative z-10" />
          </div>
          Window Style
        </CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-3">
        <div className="space-y-2">
          <Label className="text-zinc-300 drop-shadow-sm mb-3">Window Appearance</Label>
          <div className="grid grid-cols-2 gap-2">
            {WINDOW_STYLES.map((style) => (
              <Button
                key={style.value}
                variant={selectedStyle === style.value ? "default" : "outline"}
                size="sm"
                onClick={() => onStyleChange(style.value)}
                className={`flex flex-col items-start h-auto p-3 transition-all duration-300 cursor-pointer ${
                  selectedStyle === style.value 
                    ? "bg-gradient-to-r from-white/20 to-white/10 text-white shadow-lg shadow-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/10" 
                    : "bg-black/40 backdrop-blur-sm border-white/20 text-zinc-300 hover:bg-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                <span className="font-medium">{style.label}</span>
                <span className="text-xs text-zinc-400 mt-1">
                  {style.description}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 