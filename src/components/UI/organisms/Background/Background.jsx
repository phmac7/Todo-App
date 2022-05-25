import React from "react";
import styles from "./Background.module.scss";

function Background() {
  return (
    <div className={styles.background}>
      <div className={styles["background__img"]}></div>
      <div className={styles["background__blank"]}></div>
    </div>
  );
}

export default Background;
