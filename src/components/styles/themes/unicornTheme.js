
import { breakpoints } from './sharedStyles';

export const unicornTheme = {
    mode: "unicorn",
    colors: {
        primaryBackground: 'linear-gradient(135deg, #FFB5B8, #DCE2EB, #E4DFD7, #E2D0D8, #D9E7D9, #DFD1DA)',
        secondaryBackground: '#FFC2D6', // Soft Pink
        tertiaryBackground: '#FFEAF0', // Very Light Pink
        quaternaryBackground: '#FFDCE9', // Even Lighter Pink

        primaryText: '#2B2B2B', // Dark gray
        secondaryText: '#7046A1', // Unicorn Purple
        tertiaryText: '#5CA5CD', // Sky Blue
        quaternaryText: '#FF6A88', // Light Pink

        accent: '#FF99B3', // Soft Pink
        accentLight: '#FFC2D6', // Lighter Pink
        accentLighter: '#FFDCE9', // Even Lighter Pink
        accentLightest: '#FFEAF0', // Very Light Pink
        accentDark: '#FF6A88', // Light Pink
        accentHover: '#FFEAF0',

        secondaryAccent: '#87CEEB', // Sky Blue
        secondaryAccentLight: '#B0E2FF', // Light Sky Blue
        secondaryAccentDark: '#5CA5CD', // Darker Sky Blue
        secondaryAccentHover: '#ADDBEE',

        tertiaryAccent: '#9370DB', // Unicorn Purple
        tertiaryAccentLight: '#B18BE9', // Light Unicorn Purple
        tertiaryAccentDark: '#7046A1', // Dark Unicorn Purple

        warning: '#FFC107', // Amber for warning messages or icons (slightly softer than gold)
        warningLight: '#FFCA28', // Lighter Amber
        warningDark: '#FFA000', // Darker Amber

        error: '#FF4081', // Hot Pink for error messages or icons (softer than red-orange)
        errorBackground: `linear-gradient(135deg, #F3E7E9, #EAEFF3, #F4F1EA, #F1E1E2, #E8F3E8, #F0E6ED);`,

        success: '#0CDFB8', // Mint green
        successBackground: '#E1F8F4', // Light mint green

        neutral: '#E2D0D8', // Neutral Pink, can be used for borders, dividers, etc.
        neutralLight: '#E8F3E8', // Lighter Neutral Green
        neutralDark: '#D9E7D9',  // Darker Neutral Green

        inputBorder: '#FCFCFB', // Border Beige
        inputBackgroundFocus: `linear-gradient(135deg, #F3E7E9, #EAEFF3, #F4F1EA, #F1E1E2, #E8F3E8, #F0E6ED);`
    },
    fonts: {
        primary: "'Lobster', cursive",
        secondary: "'Poppins', sans-serif",
    },
    breakpoints,

};