import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext({
    theme: "dark",
    setTheme: () => { },
    switchTheme: () => { },
});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

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
