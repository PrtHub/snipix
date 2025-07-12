import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2 } from "lucide-react";
import hljs from 'highlight.js';

export const PROGRAMMING_LANGUAGES = hljs.listLanguages().map(lang => ({
  value: lang,
  label: lang.charAt(0).toUpperCase() + lang.slice(1).replace(/-/g, ' ')
})).sort((a, b) => a.label.localeCompare(b.label));

const POPULAR_LANGUAGES = [
  'javascript', 'typescript', 'python', 'java', 'cpp', 'csharp', 
  'php', 'go', 'rust', 'html', 'css', 'sql', 'swift', 'kotlin', 
  'ruby', 'scala', 'c', 'c++', 'c#'
];

export const POPULAR_LANGUAGE_OPTIONS = PROGRAMMING_LANGUAGES.filter(lang => POPULAR_LANGUAGES.includes(lang.value));

export type ProgrammingLanguage = typeof PROGRAMMING_LANGUAGES[number]["value"];

interface LanguageSelectorProps {
  selectedLanguage: ProgrammingLanguage;
  onLanguageChange: (language: ProgrammingLanguage) => void;
}

export function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  const selectedLabel = POPULAR_LANGUAGE_OPTIONS.find(l => l.value === selectedLanguage)?.label || "";
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
          <Label htmlFor="language" className="text-zinc-300 drop-shadow-sm">
            Programming Language ({POPULAR_LANGUAGE_OPTIONS.length} popular)
          </Label>
          <Select value={selectedLanguage} onValueChange={onLanguageChange}>
            <SelectTrigger className="bg-black/40 backdrop-blur-sm border-white/20 text-zinc-200 focus:border-white/30 focus:ring-white/20 transition-all duration-300 shadow-lg">
              <SelectValue placeholder="Select language">{selectedLabel}</SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-black/80 backdrop-blur-xl border-white/20 shadow-2xl max-h-60">
              {POPULAR_LANGUAGE_OPTIONS.map((language) => (
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