import { breakpoints } from './sharedStyles';

export const darkTheme = {
    mode: "dark",
    colors: {
        // primaryBackground: "radial-gradient(circle at center, #223f6b, #000000)",
        primaryBackground: "#11212a",
        //  "radial-gradient(circle at center, #1b355b, #000000)",

        secondaryBackground: '#595959', // Gray
        tertiaryBackground: '#7D7D7D', // Light gray
        quaternaryBackground: '#A5A5A5', // Even lighter gray

        primaryText: '#F0F0F0', // Light gray
        secondaryText: '#D3D3D3', // Medium gray
        tertiaryText: '#B0B0B0', // Darker gray
        quaternaryText: '#A0A0A0', // Even darker gray

        accent: '#44A3B2',
        accentHover: '#FF924E',
        accentDark: '#FF6319',

        secondaryAccent: '#44A3B2',
        secondaryAccentHover: '#68B6C8',
        secondaryAccentDark: '#297F8E',

        tertiaryAccent: '#FFC61E',
        tertiaryAccentLight: '#FFD54F',
        tertiaryAccentDark: '#E5B500',


        warning: '#FFD700',
        warningLight: '#FFE833',
        warningDark: '#E5BE00',

        error: '#FF4500',
        errorLight: '#FF6A33',
        errorDark: '#D93A00',

        success: '#32CD32',
        successLight: '#5CE65C',
        successDark: '#28A528',

        neutral: '#595959', // Gray for dark theme, used for borders, dividers, etc.
        neutralLight: '#7D7D7D', // Lighter gray
        neutralDark: '#2B2B2B',  // Darker gray

        inputBorder: "#182e50",
        inputBackgroundFocus: '#0a1320'
    },
    fonts: {

        primary: '"Lato", sans-serif', // Use Lato as the primary font
        // secondary: '"Merriweather", serif', // Use Merriweather as the seconda
        secondary: '"Source Serif Pro", serif', // Use Source Serif Pro as the secondary font
    },
    breakpoints,
};