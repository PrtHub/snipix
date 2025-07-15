import type { BackgroundColor } from "@/modules/sidebar/background-selector";

export interface CustomTheme {
  name: string;
  background: string;
  foreground: string;
  selection: string;
  comment: string;
  string: string;
  keyword: string;
  function: string;
  variable: string;
  number: string;
  operator: string;
  punctuation: string;
  class: string;
  property: string;
  builtin: string;
  regex: string;
  tag: string;
  attribute: string;
}

export function generateCustomTheme(backgroundColor: BackgroundColor): CustomTheme {
  const baseThemes = {
    "purple-gradient": {
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      foreground: "#ffffff",
      selection: "rgba(255, 255, 255, 0.1)",
      comment: "#e6c7ff",
      string: "#b8f5b8",
      keyword: "#ffb3d9",
      function: "#b3d9ff",
      variable: "#ffffff",
      number: "#ffffb3",
      operator: "#ffb3d9",
      punctuation: "#ffffff",
      class: "#b3d9ff",
      property: "#ffffb3",
      builtin: "#ffcc80",
      regex: "#b8f5b8",
      tag: "#c8e6c9",
      attribute: "#b3d9ff",
    },

    // Updated: Sunset gradient
    "sunset-gradient": {
      background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      foreground: "#fffbe7",
      selection: "#ffe082",
      comment: "#ffb300",
      string: "#ffd180",
      keyword: "#ff5252",
      function: "#ffb300",
      variable: "#fffbe7",
      number: "#ff8a65",
      operator: "#ff5252",
      punctuation: "#fffbe7",
      class: "#ffb300",
      property: "#ffd180",
      builtin: "#ffb300",
      regex: "#ffd180",
      tag: "#ffb300",
      attribute: "#ffb300",
    },
    // Updated: Ocean gradient
    "ocean-gradient": {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      foreground: "#e3f2fd",
      selection: "#b3e5fc",
      comment: "#90caf9",
      string: "#80cbc4",
      keyword: "#00bcd4",
      function: "#ffd600",
      variable: "#e3f2fd",
      number: "#ffab91",
      operator: "#00bcd4",
      punctuation: "#e3f2fd",
      class: "#ffd600",
      property: "#ffab91",
      builtin: "#b2ebf2",
      regex: "#80cbc4",
      tag: "#69f0ae",
      attribute: "#ffd600",
    },
    // Updated: Fire gradient
    "fire-gradient": {
      background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
      foreground: "#fff3e0",
      selection: "#ff7043",
      comment: "#ffab91",
      string: "#ffd54f",
      keyword: "#ff1744",
      function: "#ff7043",
      variable: "#fff3e0",
      number: "#f06292",
      operator: "#ff1744",
      punctuation: "#fff3e0",
      class: "#ff7043",
      property: "#ffd54f",
      builtin: "#ff8a65",
      regex: "#ffd54f",
      tag: "#ff7043",
      attribute: "#ff7043",
    },
    // Updated: Aurora gradient
    "aurora-gradient": {
      background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      foreground: "#e0f2f1",
      selection: "#b2ebf2",
      comment: "#b39ddb",
      string: "#f8bbd0",
      keyword: "#7e57c2",
      function: "#00bcd4",
      variable: "#e0f2f1",
      number: "#ffd54f",
      operator: "#7e57c2",
      punctuation: "#e0f2f1",
      class: "#00bcd4",
      property: "#ffd54f",
      builtin: "#ba68c8",
      regex: "#f8bbd0",
      tag: "#00bcd4",
      attribute: "#00bcd4",
    },
    // Updated: Cosmic gradient
    "cosmic-gradient": {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      foreground: "#f3e8ff",
      selection: "#b39ddb",
      comment: "#9575cd",
      string: "#b2ebf2",
      keyword: "#ff8a65",
      function: "#64b5f6",
      variable: "#f3e8ff",
      number: "#ffd54f",
      operator: "#ff8a65",
      punctuation: "#f3e8ff",
      class: "#64b5f6",
      property: "#ffd54f",
      builtin: "#ba68c8",
      regex: "#b2ebf2",
      tag: "#ffd54f",
      attribute: "#64b5f6",
    },

    // Custom theme gradients
    "midnight-gradient": {
      background: "linear-gradient(135deg, #0f1419 0%, #1e2328 100%)",
      foreground: "#ffffff",
      selection: "rgba(255, 255, 255, 0.1)",
      comment: "#4a5568",
      string: "#39d353",
      keyword: "#ff6b6b",
      function: "#4ecdc4",
      variable: "#ffffff",
      number: "#ffd93d",
      operator: "#ff6b6b",
      punctuation: "#ffffff",
      class: "#4ecdc4",
      property: "#ffd93d",
      builtin: "#ffa726",
      regex: "#39d353",
      tag: "#81c784",
      attribute: "#4ecdc4",
    },
    // Gruvbox gradient
    "gruvbox-gradient": {
      background: "linear-gradient(135deg, #282828 0%, #3c3836 100%)",
      foreground: "#ebdbb2",
      selection: "#504945",
      comment: "#928374",
      string: "#b8bb26",
      keyword: "#fb4934",
      function: "#fabd2f",
      variable: "#ebdbb2",
      number: "#d3869b",
      operator: "#fe8019",
      punctuation: "#ebdbb2",
      class: "#8ec07c",
      property: "#fabd2f",
      builtin: "#83a598",
      regex: "#b8bb26",
      tag: "#d79921",
      attribute: "#8ec07c",
    },
    // Synthwave gradient
    "synthwave-gradient": {
      background: "linear-gradient(135deg, #2d1b69 0%, #f92aad 100%)",
      foreground: "#f8f8f2",
      selection: "#282a36",
      comment: "#ff8fe6",
      string: "#f1fa8c",
      keyword: "#ff5c57",
      function: "#9aedfe",
      variable: "#f8f8f2",
      number: "#bd93f9",
      operator: "#ff5c57",
      punctuation: "#f8f8f2",
      class: "#9aedfe",
      property: "#f1fa8c",
      builtin: "#ffb86c",
      regex: "#f1fa8c",
      tag: "#ff79c6",
      attribute: "#9aedfe",
    },
    // Material gradient
    "material-gradient": {
      background: "linear-gradient(135deg, #263238 0%, #37474f 100%)",
      foreground: "#eceff1",
      selection: "#455a64",
      comment: "#90a4ae",
      string: "#a5d6a7",
      keyword: "#ff8a65",
      function: "#4fc3f7",
      variable: "#eceff1",
      number: "#ffd54f",
      operator: "#ff8a65",
      punctuation: "#eceff1",
      class: "#4fc3f7",
      property: "#ffd54f",
      builtin: "#ba68c8",
      regex: "#a5d6a7",
      tag: "#81d4fa",
      attribute: "#4fc3f7",
    },
    // Coldark gradient
    "coldark-gradient": {
      background: "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)",
      foreground: "#d8dee9",
      selection: "#23272e",
      comment: "#5c6370",
      string: "#98c379",
      keyword: "#c678dd",
      function: "#61afef",
      variable: "#d8dee9",
      number: "#e5c07b",
      operator: "#56b6c2",
      punctuation: "#d8dee9",
      class: "#61afef",
      property: "#e5c07b",
      builtin: "#be5046",
      regex: "#98c379",
      tag: "#e06c75",
      attribute: "#61afef",
    },
    // Oceanic gradient
    "oceanic-gradient": {
      background: "linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)",
      foreground: "#e0f7fa",
      selection: "#4dd0e1",
      comment: "#80cbc4",
      string: "#a7ffeb",
      keyword: "#00bcd4",
      function: "#ffd600",
      variable: "#e0f7fa",
      number: "#ffab91",
      operator: "#00bcd4",
      punctuation: "#e0f7fa",
      class: "#ffd600",
      property: "#ffab91",
      builtin: "#b2ebf2",
      regex: "#a7ffeb",
      tag: "#69f0ae",
      attribute: "#ffd600",
    },
    // Forest gradient
    "forest-gradient": {
      background: "linear-gradient(135deg, #5a3f37 0%, #2c7744 100%)",
      foreground: "#e8f5e9",
      selection: "#388e3c",
      comment: "#a5d6a7",
      string: "#c5e1a5",
      keyword: "#81c784",
      function: "#388e3c",
      variable: "#e8f5e9",
      number: "#ffb300",
      operator: "#388e3c",
      punctuation: "#e8f5e9",
      class: "#388e3c",
      property: "#ffb300",
      builtin: "#43a047",
      regex: "#c5e1a5",
      tag: "#aed581",
      attribute: "#388e3c",
    },
    // Neon gradient
    "neon-gradient": {
      background: "linear-gradient(135deg, #fc00ff 0%, #00dbde 100%)",
      foreground: "#e0e0e0",
      selection: "#212121",
      comment: "#00fff7",
      string: "#39ff14",
      keyword: "#ff0266",
      function: "#00bcd4",
      variable: "#e0e0e0",
      number: "#fff700",
      operator: "#ff0266",
      punctuation: "#e0e0e0",
      class: "#00bcd4",
      property: "#fff700",
      builtin: "#ffea00",
      regex: "#39ff14",
      tag: "#00fff7",
      attribute: "#00bcd4",
    },
    // Lava gradient
    "lava-gradient": {
      background: "linear-gradient(135deg, #ff512f 0%, #dd2476 100%)",
      foreground: "#fff3e0",
      selection: "#ff7043",
      comment: "#ffab91",
      string: "#ffd54f",
      keyword: "#ff1744",
      function: "#ff7043",
      variable: "#fff3e0",
      number: "#f06292",
      operator: "#ff1744",
      punctuation: "#fff3e0",
      class: "#ff7043",
      property: "#ffd54f",
      builtin: "#ff8a65",
      regex: "#ffd54f",
      tag: "#ff7043",
      attribute: "#ff7043",
    },
    // Steel gradient
    "steel-gradient": {
      background: "linear-gradient(135deg, #485563 0%, #29323c 100%)",
      foreground: "#cfd8dc",
      selection: "#607d8b",
      comment: "#90a4ae",
      string: "#b0bec5",
      keyword: "#ffab40",
      function: "#29b6f6",
      variable: "#cfd8dc",
      number: "#ffd740",
      operator: "#ffab40",
      punctuation: "#cfd8dc",
      class: "#29b6f6",
      property: "#ffd740",
      builtin: "#b0bec5",
      regex: "#b0bec5",
      tag: "#29b6f6",
      attribute: "#29b6f6",
    },
    // Space gradient
    "space-gradient": {
      background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      foreground: "#e0e0e0",
      selection: "#616161",
      comment: "#bdbdbd",
      string: "#b2ebf2",
      keyword: "#ff8a65",
      function: "#64b5f6",
      variable: "#e0e0e0",
      number: "#ffd54f",
      operator: "#ff8a65",
      punctuation: "#e0e0e0",
      class: "#64b5f6",
      property: "#ffd54f",
      builtin: "#ba68c8",
      regex: "#b2ebf2",
      tag: "#ffd54f",
      attribute: "#64b5f6",
    },
    // Blush gradient
    "blush-gradient": {
      background: "linear-gradient(135deg, #b24592 0%, #f15f79 100%)",
      foreground: "#fff0f6",
      selection: "#f8bbd0",
      comment: "#f06292",
      string: "#fce4ec",
      keyword: "#d81b60",
      function: "#ba68c8",
      variable: "#fff0f6",
      number: "#f8bbd0",
      operator: "#d81b60",
      punctuation: "#fff0f6",
      class: "#ba68c8",
      property: "#f8bbd0",
      builtin: "#f06292",
      regex: "#fce4ec",
      tag: "#f06292",
      attribute: "#ba68c8",
    },
    // Dusk gradient
    "dusk-gradient": {
      background: "linear-gradient(135deg, #2c3e50 0%, #fd746c 100%)",
      foreground: "#f5f5f5",
      selection: "#b0bec5",
      comment: "#90a4ae",
      string: "#ffd180",
      keyword: "#ff5252",
      function: "#40c4ff",
      variable: "#f5f5f5",
      number: "#ffd180",
      operator: "#ff5252",
      punctuation: "#f5f5f5",
      class: "#40c4ff",
      property: "#ffd180",
      builtin: "#ffab40",
      regex: "#ffd180",
      tag: "#40c4ff",
      attribute: "#40c4ff",
    },
    // Deep Sea gradient
    "deep-sea-gradient": {
      background: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)",
      foreground: "#b2c9d6",
      selection: "#18344a",
      comment: "#4e6e8e",
      string: "#7ed6df",
      keyword: "#38ada9",
      function: "#48dbfb",
      variable: "#b2c9d6",
      number: "#f6e58d",
      operator: "#38ada9",
      punctuation: "#b2c9d6",
      class: "#48dbfb",
      property: "#f6e58d",
      builtin: "#00cec9",
      regex: "#7ed6df",
      tag: "#00b894",
      attribute: "#48dbfb",
    },
    // Midnight Rainbow gradient
    "midnight-rainbow-gradient": {
      background: "linear-gradient(135deg, #232526 0%, #ff512f 50%, #dd2476 100%)",
      foreground: "#f8f8ff",
      selection: "#3a2a3a",
      comment: "#ffb3b3",
      string: "#ffe082",
      keyword: "#ff512f",
      function: "#dd2476",
      variable: "#f8f8ff",
      number: "#ffd93d",
      operator: "#ff512f",
      punctuation: "#f8f8ff",
      class: "#dd2476",
      property: "#ffd93d",
      builtin: "#ffb3b3",
      regex: "#ffe082",
      tag: "#ff512f",
      attribute: "#dd2476",
    },
    // Aurora Burst gradient (distinct)
    "aurora-burst-gradient": {
      background: "linear-gradient(135deg, #232946 0%, #5e60ce 60%, #43aa8b 100%)",
      foreground: "#e0eaff",
      selection: "#5e60ce",
      comment: "#a3bffa",
      string: "#43aa8b",
      keyword: "#5e60ce",
      function: "#43aa8b",
      variable: "#e0eaff",
      number: "#ffe082",
      operator: "#5e60ce",
      punctuation: "#e0eaff",
      class: "#43aa8b",
      property: "#ffe082",
      builtin: "#a3bffa",
      regex: "#43aa8b",
      tag: "#5e60ce",
      attribute: "#43aa8b",
    },
    // Cyberpunk gradient
    "cyberpunk-gradient": {
      background: "linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)",
      foreground: "#f8f8ff",
      selection: "#2a2a3a",
      comment: "#ff61a6",
      string: "#ffe082",
      keyword: "#fc466b",
      function: "#3f5efb",
      variable: "#f8f8ff",
      number: "#ffd93d",
      operator: "#fc466b",
      punctuation: "#f8f8ff",
      class: "#3f5efb",
      property: "#ffd93d",
      builtin: "#ff61a6",
      regex: "#ffe082",
      tag: "#fc466b",
      attribute: "#3f5efb",
    },
    // Twilight Forest gradient
    "twilight-forest-gradient": {
      background: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
      foreground: "#e0ffe0",
      selection: "#1a3a2a",
      comment: "#71b280",
      string: "#b2ffb2",
      keyword: "#134e5e",
      function: "#71b280",
      variable: "#e0ffe0",
      number: "#ffd93d",
      operator: "#134e5e",
      punctuation: "#e0ffe0",
      class: "#71b280",
      property: "#ffd93d",
      builtin: "#71b280",
      regex: "#b2ffb2",
      tag: "#134e5e",
      attribute: "#71b280",
    },
    // Velvet Night gradient
    "velvet-night-gradient": {
      background: "linear-gradient(135deg, #1e130c 0%, #9a8478 100%)",
      foreground: "#f5e9e2",
      selection: "#3a2323",
      comment: "#bfa6a0",
      string: "#ffd6a5",
      keyword: "#9a8478",
      function: "#ffb385",
      variable: "#f5e9e2",
      number: "#ffd93d",
      operator: "#9a8478",
      punctuation: "#f5e9e2",
      class: "#ffb385",
      property: "#ffd93d",
      builtin: "#bfa6a0",
      regex: "#ffd6a5",
      tag: "#9a8478",
      attribute: "#ffb385",
    },
    // Electric Indigo gradient
    "electric-indigo-gradient": {
      background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      foreground: "#e3e8ff",
      selection: "#2a2a4a",
      comment: "#a3a8ff",
      string: "#b2e0ff",
      keyword: "#6a11cb",
      function: "#2575fc",
      variable: "#e3e8ff",
      number: "#ffd93d",
      operator: "#6a11cb",
      punctuation: "#e3e8ff",
      class: "#2575fc",
      property: "#ffd93d",
      builtin: "#a3a8ff",
      regex: "#b2e0ff",
      tag: "#6a11cb",
      attribute: "#2575fc",
    },
    // Coral Flare gradient
    "coral-flare-gradient": {
      background: "linear-gradient(135deg, #ff5858 0%, #f09819 100%)",
      foreground: "#fff3e6",
      selection: "#ffb199",
      comment: "#ffb199",
      string: "#ffe082",
      keyword: "#ff5858",
      function: "#f09819",
      variable: "#fff3e6",
      number: "#ffd93d",
      operator: "#ff5858",
      punctuation: "#fff3e6",
      class: "#f09819",
      property: "#ffd93d",
      builtin: "#ffb199",
      regex: "#ffe082",
      tag: "#ff5858",
      attribute: "#f09819",
    },
    // Teal Dream gradient (subtle)
    "teal-dream-gradient": {
      background: "linear-gradient(135deg, #184e77 0%, #1e6091 60%, #52b69a 100%)",
      foreground: "#e3f6f5",
      selection: "#274472",
      comment: "#7ca7b6",
      string: "#b5ead7",
      keyword: "#5da399",
      function: "#274472",
      variable: "#e3f6f5",
      number: "#b5ead7",
      operator: "#5da399",
      punctuation: "#e3f6f5",
      class: "#274472",
      property: "#b5ead7",
      builtin: "#7ca7b6",
      regex: "#b5ead7",
      tag: "#5da399",
      attribute: "#274472",
    },
    // Raindrop gradient
    "raindrop-gradient": {
      background: "linear-gradient(135deg, #a1c4fd 0%, #2d6cdf 100%)",
      foreground: "#eaf6fb",
      selection: "#2d6cdf",
      comment: "#7fa7d6",
      string: "#b3e5fc",
      keyword: "#2d6cdf",
      function: "#5dade2",
      variable: "#eaf6fb",
      number: "#b3e5fc",
      operator: "#2d6cdf",
      punctuation: "#eaf6fb",
      class: "#5dade2",
      property: "#b3e5fc",
      builtin: "#7fa7d6",
      regex: "#b3e5fc",
      tag: "#2d6cdf",
      attribute: "#5dade2",
    },
  };

  const baseTheme = baseThemes[backgroundColor as keyof typeof baseThemes];
  if (!baseTheme) {
    // Fallback to dark theme
    return {
      name: `Custom ${backgroundColor}`,
      ...baseThemes["fire-gradient"],
    };
  }

  return {
    name: `Custom ${backgroundColor}`,
    ...baseTheme,
  };
}

export function generateCustomCSS(theme: CustomTheme): string {
  return `
    .custom-theme {
      color: ${theme.foreground} !important;
    }
    
    .custom-theme pre {
      background: ${theme.background} !important;
      color: ${theme.foreground} !important;
    }
    
    .custom-theme .token.comment,
    .custom-theme .token.prolog,
    .custom-theme .token.doctype,
    .custom-theme .token.cdata {
      color: ${theme.comment} !important;
    }
    
    .custom-theme .token.punctuation {
      color: ${theme.punctuation} !important;
    }
    
    .custom-theme .token.property,
    .custom-theme .token.tag,
    .custom-theme .token.boolean,
    .custom-theme .token.number,
    .custom-theme .token.constant,
    .custom-theme .token.symbol,
    .custom-theme .token.deleted {
      color: ${theme.number} !important;
    }
    
    .custom-theme .token.selector,
    .custom-theme .token.attr-name,
    .custom-theme .token.string,
    .custom-theme .token.char,
    .custom-theme .token.builtin,
    .custom-theme .token.inserted {
      color: ${theme.string} !important;
    }
    
    .custom-theme .token.operator,
    .custom-theme .token.entity,
    .custom-theme .token.url,
    .custom-theme .language-css .custom-theme .token.string,
    .custom-theme .style .custom-theme .token.string {
      color: ${theme.operator} !important;
    }
    
    .custom-theme .token.atrule,
    .custom-theme .token.attr-value,
    .custom-theme .token.keyword {
      color: ${theme.keyword} !important;
    }
    
    .custom-theme .token.function,
    .custom-theme .token.class-name {
      color: ${theme.function} !important;
    }
    
    .custom-theme .token.regex,
    .custom-theme .token.important,
    .custom-theme .token.variable {
      color: ${theme.variable} !important;
    }
    
    .custom-theme .token.important,
    .custom-theme .token.bold {
      font-weight: bold;
    }
    
    .custom-theme .token.italic {
      font-style: italic;
    }
    
    .custom-theme .token.entity {
      cursor: help;
    }
    
    .custom-theme ::selection {
      background: ${theme.selection} !important;
    }
  `;
}

// Utility to darken a hex color by a percentage
function darken(hex: string, percent: number): string {
  // Remove # if present
  hex = hex.replace('#', '');
  // Parse r, g, b
  let r = parseInt(hex.substring(0,2), 16);
  let g = parseInt(hex.substring(2,4), 16);
  let b = parseInt(hex.substring(4,6), 16);
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

export function getEditorBackground(mainBg: string): string {
  if (mainBg.startsWith('linear-gradient')) {
    // Overlay a semi-transparent black for depth
    return `linear-gradient(135deg, rgba(0,0,0,0.18), rgba(0,0,0,0.22)), ${mainBg}`;
  }
  if (mainBg.startsWith('#')) {
    return darken(mainBg, 0.10);
  }
  // fallback
  return mainBg;
} 