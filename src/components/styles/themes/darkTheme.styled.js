import { fonts, breakpoints } from './sharedStyles';

export const darkTheme = {
    mode: "dark",
    colors: {
        primaryBackground: '#2B2B2B', // Dark gray
        secondaryBackground: '#595959', // Gray
        tertiaryBackground: '#7D7D7D', // Light gray
        quaternaryBackground: '#A5A5A5', // Even lighter gray

        primaryText: '#F0F0F0', // Light gray
        secondaryText: '#D3D3D3', // Medium gray
        tertiaryText: '#B0B0B0', // Darker gray
        quaternaryText: '#A0A0A0', // Even darker gray

        accent: '#FF7733',
        accentHover: '#FF924E',
        accentDark: '#FF6319',

        secondaryAccent: '#44A3B2',
        secondaryAccentHover: '#68B6C8',
        secondaryAccentDark: '#297F8E',

        tertiaryAccent: '#FFC61E',
        tertiaryAccentLight: '#FFD54F',
        tertiaryAccentDark: '#E5B500',

        quaternaryAccent: '#32CD32',
        quaternaryAccentLight: '#5CE65C',
        quaternaryAccentDark: '#28A528',

        highlight: '#9B5151',
        highlightLight: '#B76969',
        highlightDark: '#852E2E',

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
        neutralDark: '#2B2B2B'  // Darker gray
    },
    fonts,
    breakpoints,
};