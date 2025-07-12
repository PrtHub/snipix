import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "lucide-react";

export const BACKGROUND_COLORS = [
  { value: "white", label: "White", color: "#ffffff" },
  { value: "light-gray", label: "Light Gray", color: "#f8f9fa" },
  { value: "dark-gray", label: "Dark Gray", color: "#2d3748" },
  { value: "black", label: "Black", color: "#000000" },
  { value: "blue-gradient", label: "Blue Gradient", color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  { value: "purple-gradient", label: "Purple Gradient", color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
  { value: "green-gradient", label: "Green Gradient", color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
  { value: "orange-gradient", label: "Orange Gradient", color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
  { value: "red-gradient", label: "Red Gradient", color: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)" },
  { value: "pink-gradient", label: "Pink Gradient", color: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" },
  { value: "cyan-gradient", label: "Cyan Gradient", color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
  { value: "yellow-gradient", label: "Yellow Gradient", color: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
  { value: "teal-gradient", label: "Teal Gradient", color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  { value: "indigo-gradient", label: "Indigo Gradient", color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  { value: "emerald-gradient", label: "Emerald Gradient", color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
  { value: "violet-gradient", label: "Violet Gradient", color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
  { value: "sunset-gradient", label: "Sunset Gradient", color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
  { value: "ocean-gradient", label: "Ocean Gradient", color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  { value: "forest-gradient", label: "Forest Gradient", color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
  { value: "fire-gradient", label: "Fire Gradient", color: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)" },
  { value: "aurora-gradient", label: "Aurora Gradient", color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
  { value: "cosmic-gradient", label: "Cosmic Gradient", color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  { value: "neon-gradient", label: "Neon Gradient", color: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" },
  { value: "pastel-gradient", label: "Pastel Gradient", color: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
] as const;

export type BackgroundColor = typeof BACKGROUND_COLORS[number]["value"];

interface BackgroundSelectorProps {
  selectedBackground: BackgroundColor;
  onBackgroundChange: (background: BackgroundColor) => void;
}

export function BackgroundSelector({ selectedBackground, onBackgroundChange }: BackgroundSelectorProps) {
  return (
    <Card className="relative bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg" />
      <CardHeader className="relative pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2 text-white drop-shadow-lg">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-sm" />
            <Layout className="h-4 w-4 relative z-10" />
          </div>
          Background
        </CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-4">
        {/* Preset Backgrounds */}
        <div className="space-y-2">
          <Label className="text-zinc-300 drop-shadow-sm">Preset Backgrounds</Label>
          <div className="grid grid-cols-7 gap-2 max-h-48 overflow-y-auto">
            {BACKGROUND_COLORS.map((bg) => (
              <div
                key={bg.value}
                className={`w-8 h-8 rounded border-2 cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg ${
                  selectedBackground === bg.value 
                    ? "border-white ring-2 ring-white/30 shadow-white/20" 
                    : "border-white/20 hover:border-white/40"
                }`}
                style={{
                  background: bg.color.startsWith('linear-gradient') 
                    ? bg.color 
                    : bg.color
                }}
                onClick={() => onBackgroundChange(bg.value)}
                title={bg.label}
              />
            ))}
          </div>
        </div>
        
        {/* Custom Color Picker */}
        <div className="space-y-2">
          <Label className="text-zinc-300 drop-shadow-sm">Custom Color</Label>
          <div className="flex gap-2">
            <input
              type="color"
              className="w-8 h-8 rounded border border-white/20 cursor-pointer bg-black/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              defaultValue="#ffffff"
            />
            <div className="flex-1 text-xs text-zinc-400 flex items-center drop-shadow-sm">
              Click to pick custom color
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 