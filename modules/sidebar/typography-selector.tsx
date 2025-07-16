import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Type } from "lucide-react";

export const FONT_SIZES = [
  { value: "12", label: "12px" },
  { value: "14", label: "14px" },
  { value: "16", label: "16px" },
  { value: "18", label: "18px" },
  { value: "20", label: "20px" },
  { value: "24", label: "24px" },
] as const;

export type FontSize = typeof FONT_SIZES[number]["value"];

interface TypographySelectorProps {
  fontSize: FontSize;
  onFontSizeChange: (size: FontSize) => void;
  bold?: boolean;
  italic?: boolean;
  onBoldChange?: (bold: boolean) => void;
  onItalicChange?: (italic: boolean) => void;
  lineNumbers?: boolean;
  onLineNumbersChange?: (show: boolean) => void;
}

export function TypographySelector({ 
  fontSize, 
  onFontSizeChange,
  bold = false,
  italic = false,
  onBoldChange,
  onItalicChange,
  // lineNumbers = false,
  // onLineNumbersChange,
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
          <Label className="text-zinc-300 drop-shadow-sm mb-3">Font Size</Label>
          <div className="flex gap-2 flex-wrap">
            {FONT_SIZES.map((size) => (
              <Button
                key={size.value}
                variant={fontSize === size.value ? "default" : "outline"}
                size="sm"
                className={`transition-all duration-300 cursor-pointer ${
                  fontSize === size.value 
                    ? "bg-gradient-to-r from-white/20 to-white/10 text-white shadow-lg shadow-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/10" 
                    : "bg-black/40 backdrop-blur-sm border-white/20 text-zinc-300 hover:bg-white/10 hover:border-white/30 hover:text-white"
                }`}
                onClick={() => onFontSizeChange(size.value)}
              >
                {size.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex gap-2 items-center mt-3">
          <Label className="text-zinc-300 drop-shadow-sm">Style</Label>
          <Button
            type="button"
            variant={bold ? "default" : "outline"}
            size="sm"
            className={`font-bold cursor-pointer ${bold ? "bg-gradient-to-r from-white/20 to-white/10 text-white hover:bg-white/10" : "bg-black/40 text-zinc-300 "}`}
            onClick={() => onBoldChange && onBoldChange(!bold)}
            aria-pressed={bold}
          >
            B
          </Button>
          <Button
            type="button"
            variant={italic ? "default" : "outline"}
            size="sm"
            className={`italic cursor-pointer ${italic ? "bg-gradient-to-r from-white/20 to-white/10 text-white hover:bg-white/10" : "bg-black/40 text-zinc-300"}`}
            onClick={() => onItalicChange && onItalicChange(!italic)}
            aria-pressed={italic}
          >
            I
          </Button>
        </div>
        {/* <div className="flex gap-2 items-center mt-3">
          <Label className="text-zinc-300 drop-shadow-sm">Line Numbers</Label>
          <Button
            type="button"
            variant={lineNumbers ? "default" : "outline"}
            size="sm"
            className={`cursor-pointer w-10 ${lineNumbers ? "bg-gradient-to-r from-white/20 to-white/10 text-white hover:bg-white/10" : "bg-black/40 text-zinc-300"}`}
            onClick={() => onLineNumbersChange && onLineNumbersChange(!lineNumbers)}
            aria-pressed={lineNumbers}
          >
            {lineNumbers ? "On" : "Off"}
          </Button>
        </div> */}
      </CardContent>
    </Card>
  );
} 