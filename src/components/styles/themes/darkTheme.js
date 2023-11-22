import { breakpoints } from './sharedStyles';

export const darkTheme = {
    mode: "dark",
    colors: {
        primaryBackground: "#11212a", // Very Dark Blue
        secondaryBackground: '#2B2B2B', // Dark Gray
        tertiaryBackground: '#595959', // Medium Gray
        quaternaryBackground: '#7D7D7D', // Light Gray

        primaryText: '#F0F0F0', // Bright Gray
        secondaryText: '#D3D3D3', // Light Gray
        tertiaryText: '#B0B0B0', // Medium Gray
        quaternaryText: '#A0A0A0', // Dark Gray

        accent: '#44B39C', // Turquoise Green
        accentHover: '#239A82', // Darker Turquoise Green
        accentDark: '#106f5c', // Darkest Turquoise Green

        secondaryAccent: '#2C937E', // Forest Green
        secondaryAccentHover: '#1E6B5B', // Dark Forest Green

        tertiaryAccent: '#FFC61E', // Golden Yellow
        tertiaryAccentLight: '#FFD54F', // Light Golden Yellow
        tertiaryAccentDark: '#E5B500', // Dark Golden Yellow

        warning: '#FFD700', // Bright Gold for warnings
        warningLight: '#FFE833', // Lighter Gold
        warningDark: '#E5BE00', // Darker Gold

        error: '#FF4500', // Bright Red-Orange for errors
        errorBackground: '#0E1920', // Dark Blueish Gray

        success: '#38A454', // Green
        successBackground: '#0E1920', // Dark Blueish Gray

        neutral: '#595959', // Neutral Gray
        neutralLight: '#7D7D7D', // Lighter Gray
        neutralDark: '#2B2B2B',  // Darker Gray

        inputBorder: "#393939", // Border Gray
        inputBackgroundFocus: '#0E1920' // Dark Blueish Gray
    },
    fonts: {
        primary: '"Roboto", sans-serif', /* Replace with your primary font */
        secondary: '"Nunito", sans-serif', /* Replace with your secondary font */
    },
    breakpoints,
};