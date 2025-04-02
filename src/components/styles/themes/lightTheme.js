import { breakpoints } from "./sharedStyles";

export const lightTheme = {
    mode: "light",
    colors: {
      // Layout
      background: "#ffffff",
      surface: "#ffffff",
      surfaceAlt: "#f5f5f5",
      navBackground: "#ffffff",
      border: "#e3e3e3",
  
      // Text
      textPrimary: "#1e1e1e",
      textSecondary: "#5f6368",
      textLight: "#6a737d",
  
      // Branding / Identity
      heroName: "#267f99",
      tagline: "#0000ff",
      header1: "#af00db",
      header2: "#4ec9b0",
  
      // UI Accents
      accent: "#4ec9b0",
      accentHover: "#3bb09a",
      accentSecondary: "#c792ea",
      accentSecondaryHover: "#b083e3",
      pop: "#e8ac41",
      popHover: "#ffb733",
      pop2: "#af00db",
  
      // Links
      link: "#267f99",
      linkHover: "#4ec9b0",
  
      // Feedback
      warning: "#f2994a",
      warningLight: "#fbd39c",
      warningDark: "#e67e22",
      error: "#e74c3c",
      errorBackground: "#fdecea",
      success: "#27ae60",
      successBackground: "#e6f4ea",
  
      // Neutrals
      neutral: "#c0c0c0",
      neutralLight: "#d4d4d4",
      neutralDark: "#999999",
  
      // Form Inputs
      inputBorder: "#e0e0e0",
      inputBackgroundFocus: "#f3f3f3",
  
      // Code Styling
      codeBackground: "#ffffff",
      codeText: "#333333",
      comment: "#008000",
      string: "#a31515",
      number: "#098658",
      keyword: "#0000ff",
      function: "#795e26",
      tag: "#0000ff",
      attrName: "#001080",
      attrValue: "#a31515",
      punctuation: "#393a34"
    },
    fonts: {
      primary: '"Source Code Pro", monospace',
      secondary: '"Source Sans Pro", sans-serif'
    },
    breakpoints,
  };