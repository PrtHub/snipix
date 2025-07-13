import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2 } from "lucide-react";
import { PRISM_LANGUAGES, getPrismLanguageName } from "@/lib/prism-utils";

export const PROGRAMMING_LANGUAGES = PRISM_LANGUAGES.map(lang => ({
  value: lang,
  label: getPrismLanguageName(lang)
}));

export type ProgrammingLanguage = typeof PROGRAMMING_LANGUAGES[number]["value"];

interface LanguageSelectorProps {
  selectedLanguage: ProgrammingLanguage;
  onLanguageChange: (language: ProgrammingLanguage) => void;
}

export function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  const selectedLabel = PROGRAMMING_LANGUAGES.find(l => l.value === selectedLanguage)?.label || "";
  return (
    <Card className="relative bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg" />
      <CardHeader className="relative pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2 text-white drop-shadow-lg">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-sm" />
            <Code2 className="h-4 w-4 relative z-10" />
          </div>
          Language
        </CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-3">
        <div className="space-y-2">
          <Label htmlFor="language" className="text-zinc-300 drop-shadow-sm mb-3">
            Programming Language ({PROGRAMMING_LANGUAGES.length} popular)
          </Label>
          <Select value={selectedLanguage} onValueChange={onLanguageChange}>
            <SelectTrigger className="bg-black/40 backdrop-blur-sm border-white/20 text-zinc-200 focus:border-white/30 focus:ring-white/20 transition-all duration-300 shadow-lg">
              <SelectValue placeholder="Select language">{selectedLabel}</SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-black/80 backdrop-blur-xl border-white/20 shadow-2xl max-h-60">
              {PROGRAMMING_LANGUAGES.map((language) => (
                <SelectItem 
                  key={language.value} 
                  value={language.value} 
                  className="text-zinc-200 hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
} 