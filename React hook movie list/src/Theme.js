import React, { useEffect, createContext, useState } from "react";

// context Object which stores some data and will make it available throughout the project
const ThemeContext = createContext();



//  **************** useState *****************
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  function toggleTheme() {
    if (theme === "light-theme")
    {
      setTheme("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    }
    else {
      setTheme("light-theme");
      localStorage.setItem("theme", "light-theme");
    }
  };

  const getTheme = () => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      // Default theme is taken as dark-theme
      localStorage.setItem("theme", "dark-theme");
      setTheme("dark-theme");
    }
    else {
      setTheme(theme)
    }
  };

  useEffect(() => {
    getTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };