import { createContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../components/styles/Theme.styled';


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Get the initial theme name from local storage or fall back to 'light'
    const initialThemeName = localStorage.getItem('theme') || 'light';

    // Translate the theme name into the actual theme object
    const initialTheme = initialThemeName === 'dark' ? darkTheme : lightTheme;

    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = () => {
        if (theme === lightTheme) {
            setTheme(darkTheme);
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme(lightTheme);
            localStorage.setItem('theme', 'light');
        }
    };


    // Synchronize the state with local storage
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') setTheme(darkTheme);
        else setTheme(lightTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};