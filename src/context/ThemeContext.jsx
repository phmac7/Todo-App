import React, { useState } from "react";

export const ThemeContext = React.createContext({
  theme: "dark",
  setTheme: () => {},
  switchTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
