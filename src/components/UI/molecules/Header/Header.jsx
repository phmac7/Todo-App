import React from "react";
import Title from "../../atoms/Title/Title";
import ToggleTheme from "../../atoms/ToggleTheme/ToggleTheme";
import styles from "./Header.module.scss"


function Header() {
    return (
        <div className={styles.header}>
            <div className={styles['header__title-container']}>
                <Title />
            </div>
            <div className={styles['header__toggle-container']}>
                <ToggleTheme />
            </div>
        </div>
    );
}

export default Header;
