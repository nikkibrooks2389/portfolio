// src/context/AppThemeContext.js

import { createContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme, unicornTheme } from '../styles/themes';

export const AppThemeContext = createContext();

const themeMap = {
    light: lightTheme,
    dark: darkTheme,
    unicorn: unicornTheme,
};

// Function to determine the next theme based on the current one
const getNextTheme = (currentTheme) => {
    if (currentTheme === lightTheme) return 'dark';
    if (currentTheme === darkTheme) return 'unicorn';
    return 'light';
};

// Get the stored theme from localStorage, default to 'light' if none exists
const getStoredThemeName = () => {
    try {
        return localStorage.getItem('theme') || 'light';
    } catch (error) {
        console.error("Can't access localStorage:", error);
        return 'light';
    }
};

// Theme Provider that supplies the theme and toggle function
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
    }, []); // This only runs once on the initial load

    return (
        <AppThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </AppThemeContext.Provider>
    );
};