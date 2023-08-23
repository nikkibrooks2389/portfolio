
import { breakpoints } from './sharedStyles';

export const lightTheme = {
    mode: "light",
    colors: {
        primaryBackground: '#f2f2f2', // Light Gray
        secondaryBackground: '#E0E0E0', // Slightly Darker Gray
        tertiaryBackground: '#D3D3D3', // Lighter Gray
        quaternaryBackground: '#B2B2B2', // Dark Gray

        primaryText: '#404040', // Dark Gray
        secondaryText: '#666666', // Gray
        tertiaryText: '#999999', // Light Gray
        quaternaryText: '#CCCCCC', // Lighter Gray

        accent: '#FFA726', // Orange
        accentLight: '#FFCB62', // Light Orange
        accentDark: '#FF8C00', // Dark Orange
        accentHover: '#FFB733', // Hover color

        secondaryAccent: '#44A3B2',
        secondaryAccentHover: '#68B6C8',
        secondaryAccentDark: '#297F8E',

        tertiaryAccent: '#FF6B6B', // Light Coral Pink
        tertiaryAccentLight: '#FF9E9E', // Lighter Coral Pink
        tertiaryAccentDark: '#D75454', // Dark Coral Pink

        warning: '#FF8C00', // Dark Orange
        warningLight: '#FFB733', // Light Orange
        warningDark: '#FF6600', // Slightly Darker Orange

        error: '#E53935', // Red (similar to Material Red)
        errorLight: '#FF6666', // Light Red
        errorDark: '#AB000D', // Dark Red

        success: '#00A957', // Green
        successLight: '#33CC7A', // Light Green
        successDark: '#00763C', // Dark Green

        neutral: '#C0C0C0', // Neutral gray, can be used for borders, dividers, etc.
        neutralLight: '#D4D4D4', // Lighter neutral gray
        neutralDark: '#ACACAC',  // Darker neutral gray

        inputBorder: '#E0E0E0',
        inputBackgroundFocus: '#FAFAFA',
        // Add more colors as needed
    },
    fonts: {
        // primary: '"Playfair Display", serif', // Use Playfair Display as the primary font
        // secondary: '"Roboto", sans-serif', // 

        primary: '"Lato", sans-serif', // Use Lato as the primary font
        // secondary: '"Merriweather", serif', // Use Merriweather as the seconda
        secondary: '"Source Serif Pro", serif', // Use Source Serif Pro as the secondary font


    },
    breakpoints,

};