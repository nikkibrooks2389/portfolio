
import { fonts, breakpoints } from './sharedStyles';
export const lightTheme = {
    mode: "light",
    colors: {
        primaryBackground: '#F0F0F0', // Light gray
        secondaryBackground: '#D3D3D3', // Medium gray
        tertiaryBackground: '#B0B0B0', // Darker gray
        quaternaryBackground: '#A0A0A0', // Even darker gray

        primaryText: '#2B2B2B', // Dark gray
        secondaryText: '#595959', // Gray
        tertiaryText: '#7D7D7D', // Light gray
        quaternaryText: '#A5A5A5', // Even lighter gray

        accent: '#FF7733', // Bright orange
        accentHover: '#FF924E', // Lighter orange for hover
        accentDark: '#FF6319', // Darker orange shade

        secondaryAccent: '#44A3B2', // Light blue
        secondaryAccentHover: '#68B6C8', // Lighter blue shade
        secondaryAccentDark: '#297F8E', // Darker blue shade

        tertiaryAccent: '#FFC61E', // Yellow
        tertiaryAccentLight: '#FFD54F', // Lighter yellow
        tertiaryAccentDark: '#E5B500', // Darker yellow

        quaternaryAccent: '#32CD32', // LimeGreen
        quaternaryAccentLight: '#5CE65C', // Lighter LimeGreen
        quaternaryAccentDark: '#28A528', // Darker LimeGreen

        highlight: '#9B5151', // Maroon
        highlightLight: '#B76969', // Lighter Maroon
        highlightDark: '#852E2E', // Darker Maroon

        warning: '#FFD700', // Gold for warning messages or icons
        warningLight: '#FFE833', // Lighter gold
        warningDark: '#E5BE00', // Darker gold

        error: '#FF4500', // OrangeRed for error messages or icons
        errorLight: '#FF6A33', // Lighter OrangeRed
        errorDark: '#D93A00', // Darker OrangeRed

        success: '#32CD32', // LimeGreen for success messages or icons
        successLight: '#5CE65C', // Lighter LimeGreen
        successDark: '#28A528', // Darker LimeGreen

        neutral: '#C0C0C0', // Neutral gray, can be used for borders, dividers, etc.
        neutralLight: '#D4D4D4', // Lighter neutral gray
        neutralDark: '#ACACAC'  // Darker neutral gray
    },
    fonts,
    breakpoints,

};
