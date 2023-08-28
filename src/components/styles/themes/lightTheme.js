
import { breakpoints } from './sharedStyles';

export const lightTheme = {
    mode: "light",
    colors: {
        primaryBackground: '#d3dddc', // Light Green
        secondaryBackground: '#a8c3a8', // Lighter Green
        tertiaryBackground: '#8fb18f', // Slightly Darker Green
        quaternaryBackground: '#6c8e6c', // Dark Green

        primaryText: '#484848', // Dark Gray
        secondaryText: '#6e6e6e', // Gray
        tertiaryText: '#898989', // Light Gray
        quaternaryText: '#CCCCCC', // Lighter Gray

        accent: '#44A3B2', // Orange
        accentLight: '#FFCB62', // Light Orange
        accentDark: '#FF8C00', // Dark Orange
        accentHover: '#FFB733', // Hover color

        secondaryAccent: '#44A3B2', // Blue
        secondaryAccentHover: '#68B6C8', // Light Blue


        warning: '#FF8C00', // Dark Orange
        warningLight: '#FFB733', // Light Orange
        warningDark: '#FF6600', // Slightly Darker Orange

        error: '#E53935', // Red (similar to Material Red)
        errorBackground: '#DEEAE9',

        success: '#00A957', // Green
        successBackground: '#DEEAE9',

        neutral: '#C0C0C0', // Neutral gray, can be used for borders, dividers, etc.
        neutralLight: '#D4D4D4', // Lighter neutral gray
        neutralDark: '#ACACAC',  // Darker neutral gray

        inputBorder: '#E6ECEB',
        inputBackgroundFocus: '#DEEAE9',
        // Add more colors as needed
    },
    fonts: {
        // primary: '"Playfair Display", serif', // Use Playfair Display as the primary font
        secondary: '"Roboto", sans-serif', // 
        primary: "'Russo One', sans-serif",
        // primary: '"Lato", sans-serif', // Use Lato as the primary font
        // secondary: '"Merriweather", serif', // Use Merriweather as the seconda
        // secondary: '"Source Serif Pro", serif', // Use Source Serif Pro as the secondary font


    },
    breakpoints,

};