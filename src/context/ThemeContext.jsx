import React, { useCallback, useEffect, useState } from "react";

export const ThemeContext = React.createContext({
    theme: "dark",
    setTheme: () => { },
    switchTheme: () => { },
});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    const switchTheme = useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark");
    }, [theme])

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
