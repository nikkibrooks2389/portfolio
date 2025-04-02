import { createContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme, unicornTheme } from '../styles/themes';

export const AppThemeContext = createContext();

const themeMap = {
    light: lightTheme,
    dark: darkTheme,
    unicorn: unicornTheme,
};

const getNextTheme = (currentTheme) => {
    if (currentTheme === lightTheme) return 'dark';
    if (currentTheme === darkTheme) return 'unicorn';
    return 'light';
};

const getStoredThemeName = () => {
    try {
        return localStorage.getItem('theme') || 'light';
    } catch (error) {
        console.error("Can't access localStorage:", error);
        return 'light';
    }
};

export const AppThemeProvider = ({ children }) => {
    const storedThemeName = getStoredThemeName();
    const [theme, setTheme] = useState(themeMap[storedThemeName]);

    const toggleTheme = () => {
        const nextThemeName = getNextTheme(theme);
        setTheme(themeMap[nextThemeName]);
        try {
            localStorage.setItem('theme', nextThemeName);
        } catch (error) {
            console.error("Can't update localStorage:", error);
        }
    };

    useEffect(() => {
        const storedThemeName = getStoredThemeName();
        setTheme(themeMap[storedThemeName]);
    }, []);

    return (
        <AppThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </AppThemeContext.Provider>
    );
};