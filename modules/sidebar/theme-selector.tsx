import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette } from "lucide-react";
import { PRISM_THEMES } from "@/lib/prism-utils";
import { SNIPIX_THEMES, type SnipixTheme } from "@/constants/snipix-themes";
import { getCustomThemeName } from "@/lib/custom-prism-utils";
import type {
  FontSize,
} from "@/modules/sidebar/typography-selector";
import type { WindowStyle } from "@/modules/sidebar/window-style-selector";
import { BACKGROUND_COLORS } from "@/constants/background-colors";

export type EditorTheme = (typeof PRISM_THEMES)[number]["value"];

interface ThemeSelectorProps {
  editorTheme: EditorTheme;
  selectedSnipixTheme: string | null;
  onEditorThemeChange: (theme: EditorTheme) => void;
  onSnipixThemeChange: (themeName: string | null) => void;
}

export function ThemeSelector({
  selectedSnipixTheme,
  onSnipixThemeChange,
}: ThemeSelectorProps) {
  const groupedThemes = SNIPIX_THEMES.reduce((acc, theme) => {
    if (!acc[theme.category]) {
      acc[theme.category] = [];
    }
    acc[theme.category].push(theme);
    return acc;
  }, {} as Record<string, SnipixTheme[]>);

  const customThemes = BACKGROUND_COLORS.map((bg) => ({
    name: getCustomThemeName(bg.value),
    description: `Custom theme matching ${bg.label.toLowerCase()}`,
    highlightTheme: `custom-${bg.value}` as EditorTheme,
    background: bg.value,
    fontFamily: "fira-code",
    fontSize: "16" as FontSize,
    windowStyle: "macos" as WindowStyle,
    previewColors: {
      primary: bg.color,
      secondary: bg.color,
      accent: bg.color,
    },
    category: "custom" as SnipixTheme["category"],
  }));

  groupedThemes.custom = customThemes;

  const renderThemePreview = (theme: SnipixTheme) => {
    return (
      <div
        key={theme.name}
        className={`w-8 h-8 rounded border-2 cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg ${
          selectedSnipixTheme === theme.name
            ? "border-white ring-2 ring-white/30 shadow-white/20"
            : "border-white/20 hover:border-white/40"
        }`}
        style={{
          background: theme.previewColors.primary.startsWith("linear-gradient")
            ? theme.previewColors.primary
            : theme.previewColors.primary,
        }}
        onClick={() => {
          console.log("Theme cube clicked:", theme.name);
          onSnipixThemeChange(theme.name);
        }}
        title={theme.name}
      />
    );
  };

  return (
    <Card className="relative bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg" />
      <CardHeader className="relative pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2 text-white drop-shadow-lg">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-sm" />
            <Palette className="h-4 w-4 relative z-10" />
          </div>
          Themes
        </CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-4">
        <div className="space-y-4">
          {groupedThemes.custom && (
            <div className="space-y-3">
              <Label className="text-zinc-300 drop-shadow-sm mb-3">
                Custom Themes
              </Label>
              <div className="grid grid-cols-7 gap-2 max-h-48 overflow-y-auto">
                {groupedThemes.custom.map(renderThemePreview)}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
