import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Type } from "lucide-react";

export const FONT_FAMILIES = [
  { value: "fira-code", label: "Fira Code", className: "font-[var(--font-fira-code)]" },
  { value: "jetbrains-mono", label: "JetBrains Mono", className: "font-[var(--font-jetbrains-mono)]" },
  { value: "source-code-pro", label: "Source Code Pro", className: "font-[var(--font-source-code-pro)]" },
  { value: "roboto-mono", label: "Roboto Mono", className: "font-[var(--font-roboto-mono)]" },
] as const;

export const FONT_SIZES = [
  { value: "12", label: "12px" },
  { value: "14", label: "14px" },
  { value: "16", label: "16px" },
  { value: "18", label: "18px" },
  { value: "20", label: "20px" },
  { value: "24", label: "24px" },
] as const;

export type FontFamily = typeof FONT_FAMILIES[number]["value"];
export type FontSize = typeof FONT_SIZES[number]["value"];

interface TypographySelectorProps {
  fontFamily: FontFamily;
  fontSize: FontSize;
  onFontFamilyChange: (family: FontFamily) => void;
  onFontSizeChange: (size: FontSize) => void;
}

export function TypographySelector({ 
  fontFamily, 
  fontSize, 
  onFontFamilyChange, 
  onFontSizeChange 
}: TypographySelectorProps) {
  return (
    <Card className="relative bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg" />
      <CardHeader className="relative pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2 text-white drop-shadow-lg">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-sm" />
            <Type className="h-4 w-4 relative z-10" />
          </div>
          Typography
        </CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-4">
        <div className="space-y-2">
          <Label className="text-zinc-300 drop-shadow-sm mb-3">Font Family</Label>
          <div className="grid grid-cols-2 gap-2">
            {FONT_FAMILIES.map((font) => (
              <Button
                key={font.value}
                variant={fontFamily === font.value ? "default" : "outline"}
                size="sm"
                className={`transition-all duration-300 ${font.className} ${
                  fontFamily === font.value 
                    ? "bg-gradient-to-r from-white/20 to-white/10 text-white shadow-lg shadow-white/10 border border-white/20 backdrop-blur-sm" 
                    : "bg-black/40 backdrop-blur-sm border-white/20 text-zinc-300 hover:bg-white/10 hover:border-white/30 hover:text-white"
                }`}
                onClick={() => onFontFamilyChange(font.value)}
              >
                {font.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="text-zinc-300 drop-shadow-sm mb-3">Font Size</Label>
          <div className="flex gap-2 flex-wrap">
            {FONT_SIZES.map((size) => (
              <Button
                key={size.value}
                variant={fontSize === size.value ? "default" : "outline"}
                size="sm"
                className={`transition-all duration-300 ${
                  fontSize === size.value 
                    ? "bg-gradient-to-r from-white/20 to-white/10 text-white shadow-lg shadow-white/10 border border-white/20 backdrop-blur-sm" 
                    : "bg-black/40 backdrop-blur-sm border-white/20 text-zinc-300 hover:bg-white/10 hover:border-white/30 hover:text-white"
                }`}
                onClick={() => onFontSizeChange(size.value)}
              >
                {size.label}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 