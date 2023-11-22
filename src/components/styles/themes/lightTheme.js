
import { breakpoints } from './sharedStyles';

export const lightTheme = {
    mode: "light",
    colors: {
        primaryBackground: '#EBEBEB', // Light Gray
        secondaryBackground: '#D9D9D9', // Slightly Darker Gray
        tertiaryBackground: '#C4C4C4', // Medium Gray
        quaternaryBackground: '#AFAFAF', // Darker Gray

        primaryText: '#484848', // Dark Gray
        secondaryText: '#6e6e6e', // Gray
        tertiaryText: '#898989', // Light Gray
        quaternaryText: '#CCCCCC', // Lighter Gray


        accent: '#E8AC41', // Orange
        accentLight: '#FFCB62', // Light Orange
        accentDark: '#FF8C00', // Dark Orange
        accentHover: '#FFB733', // Hover color

        secondaryAccent: '#44A3B2', // Blue
        secondaryAccentHover: '#68B6C8', // Light Blue


        warning: '#FF8C00', // Dark Orange
        warningLight: '#FFB733', // Light Orange
        warningDark: '#FF6600', // Slightly Darker Orange

        error: '#E53935',
        errorBackground: '#DEEAE9',

        success: '#00A957', // Green
        successBackground: '#DEEAE9',

        neutral: '#C0C0C0', // Neutral gray, can be used for borders, dividers, etc.
        neutralLight: '#D4D4D4', // Lighter neutral gray
        neutralDark: '#ACACAC',  // Darker neutral gray

        inputBorder: '#C8C8C8',
        inputBackgroundFocus: '#F3F3F3',
    },
    fonts: {
        primary: '"Roboto", sans-serif', /* Replace with your primary font */
        secondary: '"Nunito", sans-serif', /* Replace with your secondary font */
    },
    breakpoints,

};