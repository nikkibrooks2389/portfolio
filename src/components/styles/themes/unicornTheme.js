
import { breakpoints } from './sharedStyles';

export const unicornTheme = {
    mode: "unicorn",
    colors: {
      // === Layout Backgrounds ===
      background: "#fff0fc", // Soft unicorny pink background
      surface: "#ffe8f9",
      surfaceAlt: "#fceaff",
      navBackground: "#fff0fc",
      border: "#ffccf9",
  
      // === Text Colors ===
      textPrimary: "#4b0082", // Deep purple
      textSecondary: "#8b5fbf", // Light purple
      textLight: "#a36fc4", // Muted lavender
  
      // === Signature Elements ===
      header1: "#ff66c4", // Pinkish tone
      header2: "#a084e8", // Light purple
      heroName: "#ff66c4",
      tagline: "#b388eb", // Light violet
  
      // === Accents ===
      accent: "#ffabe7",
      accentHover: "#ff90d3",
      accentSecondary: "#b388eb",
      accentSecondaryHover: "#c7a7f5",
      pop: "#ffd166", // Yellowish pop
      popHover: "#ffeb99",
      pop2: "#da70d6", // Orchid pink
  
      // === Links ===
      link: "#ff66c4",
      linkHover: "#b388eb",
  
      // === Status Feedback ===
      warning: "#f7c948",
      warningLight: "#fff3cd",
      warningDark: "#f0ad4e",
  
      error: "#f76c6c",
      errorBackground: "#fcdcdc",
  
      success: "#66d9e8",
      successBackground: "#dafafc",
  
      // === Neutrals ===
      neutral: "#d0bfff",
      neutralLight: "#e0ccff",
      neutralDark: "#a593c2",
  
      // === Forms ===
      inputBorder: "#9b79d2",  // Purple border
      inputBackground: "#f9e6ff",  // Light pastel background for input
      inputBackgroundFocus: "#e6ccff",  // Lighter pastel background when focused
      // === Code Block Styling ===
      codeBackground: "#fff0fc",
      codeText: "#4b0082",
      comment: "#8a2be2",
      string: "#ff1493",
      number: "#ff69b4",
      keyword: "#da70d6",
      function: "#ff6ec7",
      tag: "#d18ce0",
      attrName: "#8a2be2",
      attrValue: "#ff69b4",
      punctuation: "#c71585",
    },
    fonts: {
      primary: '"Source Code Pro", monospace',
      secondary: '"Source Sans Pro", sans-serif',
    },
    breakpoints,
  }