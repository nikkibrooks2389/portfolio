
import { fonts, breakpoints } from './sharedStyles';

export const lightTheme = {
    mode: "light",
    colors: {
        primaryBackground: 'linear-gradient(135deg, #F3E7E9, #EAEFF3, #F4F1EA, #F1E1E2, #E8F3E8, #F0E6ED)',
        secondaryBackground: '#D3D3D3', // Medium gray
        tertiaryBackground: '#B0B0B0', // Darker gray
        quaternaryBackground: '#A0A0A0', // Even darker gray

        primaryText: '#2B2B2B', // Dark gray
        secondaryText: '#595959', // Gray
        tertiaryText: '#7D7D7D', // Light gray
        quaternaryText: '#A5A5A5', // Even lighter gray

        accent: '#FF99B3', // Soft Pink
        accentHover: '#FFDAB9', // Light Peach
        accentDark: '#FF6A88', // Light Pink

        secondaryAccent: '#87CEEB', // Sky Blue
        secondaryAccentHover: '#C8E6FF', // Light Blue
        secondaryAccentDark: '#5CACEE', // Dark Blue

        tertiaryAccent: '#FFD700', // Gold
        tertiaryAccentLight: '#FFF68F', // Light Yellow
        tertiaryAccentDark: '#FFA500', // Darker Yellow

        quaternaryAccent: '#98FB98', // Mint Green
        quaternaryAccentLight: '#C1FFC1', // Light Green
        quaternaryAccentDark: '#32CD32', // Dark Green

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
        neutralDark: '#ACACAC',  // Darker neutral gray

        inputBackgroundFocus: '#F5F5F5'

    },
    fonts,
    breakpoints,

};