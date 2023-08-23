
import { breakpoints } from './sharedStyles';

export const unicornTheme = {
    mode: "unicorn",
    colors: {
        primaryBackground: 'linear-gradient(135deg, #FFB5B8, #DCE2EB, #E4DFD7, #E2D0D8, #D9E7D9, #DFD1DA)',
        secondaryBackground: '#D3D3D3', // Medium gray
        tertiaryBackground: '#B0B0B0', // Darker gray
        quaternaryBackground: '#A0A0A0', // Even darker gray

        primaryText: '#2B2B2B', // Dark gray
        secondaryText: '#595959', // Gray
        tertiaryText: '#7D7D7D', // Light gray
        quaternaryText: '#A5A5A5', // Even lighter gray

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

        inputBorder: '#EDEAE5',
        inputBackgroundFocus: `linear-gradient(135deg, #F3E7E9, #EAEFF3, #F4F1EA, #F1E1E2, #E8F3E8, #F0E6ED);
`
    },
    fonts: {


        primary: "'Lobster', cursive",
        // secondary: "'Open Sans', sans-serif",
        secondary: "'Poppins', sans-serif",
    },
    breakpoints,

};