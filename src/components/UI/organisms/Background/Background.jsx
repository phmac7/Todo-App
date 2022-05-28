import React, { useRef, useEffect } from "react";
import styles from "./Background.module.scss";

function Background({ children, appHeight }) {

    // const teste = {
    //     minHeight: `100vh`,
    //     height: `${appHeight}px`
    // }

    console.log(appHeight)
    return (
        <div style={teste} className={styles.background}>
            <div className={styles["background__img"]}></div>
            <div className={styles["background__blank"]}></div>
            {children}
        </div>
    );
}

export default Background;
