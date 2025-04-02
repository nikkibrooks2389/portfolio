import { breakpoints } from './sharedStyles';

export const darkTheme = {
    mode: "dark",
    colors: {
      // Layout
      background: "#0d1117",
      surface: "#161b22",
      surfaceAlt: '#2a2a2a',
      navBackground: "#161b22",
      border: "#30363d",
  
      // Text
      textPrimary: "#c9d1d9",
      textSecondary: "#8b949e",
      textLight: "#6e7681",
  
      // Branding / Identity
      heroName: "#ffa657",         // Orange name
      tagline: "#d2a8ff",          // JSX tag highlight
      header1: "#58a6ff",          // Dark blue
      header2: "#9CDCFE",          // Light blue
  
      // UI Accents
      accent: "#ffa657",
      accentHover: "#ffb77c",
      accentSecondary: "#d2a8ff",
      pop: "#f2cc60",
      pop2: "#D7BA7D",
      border:"#30363d",
      inputBorder: "#30363d",  // Dark gray border
    inputBackground: "#161b22",  // Dark background for input
    inputBackgroundFocus: "#1f2a37",  // Lighter dark background when focused
  
      // Links
      link: "#9CDCFE",
      linkHover: "#79c0ff"
    },
    fonts: {
      primary: '"Source Code Pro", monospace',
      secondary: '"Source Sans Pro", sans-serif'
    },
    breakpoints,
  };