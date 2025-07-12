import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette } from "lucide-react";

export const COLOR_SCHEMES = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "auto", label: "Auto" },
] as const;

// Updated highlight.js themes (dark and light)
export const EDITOR_THEMES = [
  // Dark
  { value: "atom-one-dark", label: "Atom One Dark", description: "Modern, clean dark theme" },
  { value: "monokai", label: "Monokai", description: "Classic, vibrant dark theme" },
  { value: "dracula", label: "Dracula", description: "Popular, modern dark theme" },
  { value: "github-dark", label: "GitHub Dark", description: "GitHub's dark mode code blocks" },
  { value: "vs2015", label: "VS2015", description: "VS Code's default dark theme" },
  { value: "tomorrow-night", label: "Tomorrow Night", description: "Widely used dark theme" },
  { value: "solarized-dark", label: "Solarized Dark", description: "Solarized palette, dark variant" },
  { value: "gruvbox-dark", label: "Gruvbox Dark", description: "Retro-inspired, warm dark theme" },
  { value: "nord", label: "Nord", description: "Arctic-inspired, cool dark theme" },
  { value: "tokyo-night-dark", label: "Tokyo Night Dark", description: "Sleek, modern dark with purples/blues" },
  // Light
  { value: "default", label: "Default", description: "Standard, clean light theme" },
  { value: "github", label: "GitHub Light", description: "GitHub's light mode code blocks" },
  { value: "atom-one-light", label: "Atom One Light", description: "Atom's clean light theme" },
  { value: "solarized-light", label: "Solarized Light", description: "Solarized palette, light variant" },
  { value: "vs", label: "VS Light", description: "Visual Studio's classic light theme" },
  { value: "xcode", label: "Xcode", description: "Apple's Xcode IDE theme" },
  { value: "arduino-light", label: "Arduino Light", description: "Simple, bright light theme" },
  { value: "docco", label: "Docco", description: "Clean, high-contrast for docs" },
  { value: "grayscale", label: "Grayscale", description: "Minimalist, grayscale theme" },
  { value: "purebasic", label: "PureBasic", description: "Bright, readable light theme" },
] as const;

export type ColorScheme = typeof COLOR_SCHEMES[number]["value"];
export type EditorTheme = typeof EDITOR_THEMES[number]["value"];

interface ThemeSelectorProps {
  colorScheme: ColorScheme;
  editorTheme: EditorTheme;
  onColorSchemeChange: (scheme: ColorScheme) => void;
  onEditorThemeChange: (theme: EditorTheme) => void;
}

export function ThemeSelector({ 
  colorScheme, 
  editorTheme, 
  onColorSchemeChange, 
  onEditorThemeChange 
}: ThemeSelectorProps) {
  return (
    <Card className="relative bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg" />
      <CardHeader className="relative pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2 text-white drop-shadow-lg">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-sm" />
            <Palette className="h-4 w-4 relative z-10" />
          </div>
          Theme
        </CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-4">
        <div className="space-y-2">
          <Label className="text-zinc-300 drop-shadow-sm">Color Scheme</Label>
          <div className="flex gap-2">
            {COLOR_SCHEMES.map((scheme) => (
              <Button
                key={scheme.value}
                variant={colorScheme === scheme.value ? "default" : "outline"}
                size="sm"
                className={`flex-1 transition-all duration-300 ${
                  colorScheme === scheme.value 
                    ? "bg-gradient-to-r from-white/20 to-white/10 text-white shadow-lg shadow-white/10 border border-white/20 backdrop-blur-sm" 
                    : "bg-black/40 backdrop-blur-sm border-white/20 text-zinc-300 hover:bg-white/10 hover:border-white/30 hover:text-white"
                }`}
                onClick={() => onColorSchemeChange(scheme.value)}
              >
                {scheme.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="text-zinc-300 drop-shadow-sm">Editor Theme</Label>
          <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
            {EDITOR_THEMES.map((theme) => (
              <Button
                key={theme.value}
                variant={editorTheme === theme.value ? "default" : "outline"}
                size="sm"
                className={`transition-all duration-300 flex flex-col items-start h-auto p-3 ${
                  editorTheme === theme.value 
                    ? "bg-gradient-to-r from-white/20 to-white/10 text-white shadow-lg shadow-white/10 border border-white/20 backdrop-blur-sm" 
                    : "bg-black/40 backdrop-blur-sm border-white/20 text-zinc-300 hover:bg-white/10 hover:border-white/30 hover:text-white"
                }`}
                onClick={() => onEditorThemeChange(theme.value)}
              >
                <span className="font-medium">{theme.label}</span>
                <span className="text-xs text-zinc-400 mt-1">
                  {theme.description}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 