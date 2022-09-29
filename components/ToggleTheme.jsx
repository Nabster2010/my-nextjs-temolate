import { useTheme } from "next-themes";
import React from "react";
import { useState } from "react";
import Switch from "./Switch";

const ToggleTheme = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const curTheme = theme === "system" ? systemTheme : theme;
  const [darkMode, setDarkMode] = useState(curTheme === "dark" ? false : true);
  const toggleTheme = (e) => {
    setDarkMode(!darkMode);
    setTheme(darkMode === true ? "dark" : "light");
  };

  return <Switch isActive={!darkMode} toggle={toggleTheme} />;
};

export default ToggleTheme;
