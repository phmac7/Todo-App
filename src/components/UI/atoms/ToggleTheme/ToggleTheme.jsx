import React, { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import Moon from "../Svg/Moon";
import Sun from "../Svg/Sun";
import styles from "./ToggleTheme.module.scss";

function ToggleTheme() {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <button className={styles.theme__button} onClick={switchTheme}>
      <div>{theme === "light" ? <Moon /> : <Sun />}</div>
    </button>
  );
}

export default ToggleTheme;
