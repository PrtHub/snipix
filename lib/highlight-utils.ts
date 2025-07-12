import hljs from 'highlight.js';

// Dark Themes
import 'highlight.js/styles/atom-one-dark.css';
import 'highlight.js/styles/monokai.css';
// import 'highlight.js/styles/dracula.css';
import 'highlight.js/styles/github-dark.css';
import 'highlight.js/styles/vs2015.css';
// import 'highlight.js/styles/tomorrow-night.css';
// import 'highlight.js/styles/solarized-dark.css';
// import 'highlight.js/styles/gruvbox-dark.css';
import 'highlight.js/styles/nord.css';
import 'highlight.js/styles/tokyo-night-dark.css';

// Light Themes
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/github.css';
import 'highlight.js/styles/atom-one-light.css';
// import 'highlight.js/styles/solarized-light.css';
import 'highlight.js/styles/vs.css';
import 'highlight.js/styles/xcode.css';
import 'highlight.js/styles/arduino-light.css';
import 'highlight.js/styles/docco.css';
import 'highlight.js/styles/grayscale.css';
import 'highlight.js/styles/purebasic.css';

export interface HighlightResult {
  value: string;
  language: string;
  relevance: number;
}

export function highlightCode(code: string, language?: string): HighlightResult {
  if (language) {
    try {
      const result = hljs.highlight(code, { language });
      return {
        value: result.value,
        language: result.language || 'plaintext',
        relevance: result.relevance
      };
    } catch {
      // Fallback to auto-detection if language is not supported
      const autoResult = hljs.highlightAuto(code);
      return {
        value: autoResult.value,
        language: autoResult.language || 'plaintext',
        relevance: autoResult.relevance
      };
    }
  }
  
  // Auto-detect language
  const autoResult = hljs.highlightAuto(code);
  return {
    value: autoResult.value,
    language: autoResult.language || 'plaintext',
    relevance: autoResult.relevance
  };
}

export function getSupportedLanguages(): string[] {
  return Object.keys(hljs.listLanguages());
}

export function isLanguageSupported(language: string): boolean {
  return hljs.listLanguages().includes(language);
}

export function getLanguageName(language: string): string {
  return language.charAt(0).toUpperCase() + language.slice(1).replace(/-/g, ' ');
}

// Theme loading function
export function loadTheme(themeName: string): void {
  // Remove existing theme
  const existingTheme = document.querySelector('link[data-hljs-theme]');
  if (existingTheme) {
    existingTheme.remove();
  }

  // Add new theme
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `/highlight-themes/${themeName}.css`;
  link.setAttribute('data-hljs-theme', themeName);
  document.head.appendChild(link);
}

// Available themes
export const AVAILABLE_THEMES = [
  // Dark
  'atom-one-dark',
  'monokai',
  'dracula',
  'github-dark',
  'vs2015',
  'tomorrow-night',
  'solarized-dark',
  'gruvbox-dark',
  'nord',
  'tokyo-night-dark',
  // Light
  'default',
  'github',
  'atom-one-light',
  'solarized-light',
  'vs',
  'xcode',
  'arduino-light',
  'docco',
  'grayscale',
  'purebasic',
] as const;

export type HighlightTheme = typeof AVAILABLE_THEMES[number]; 