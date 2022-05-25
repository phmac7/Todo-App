import React from "react";
import Header from "../../molecules/Header/Header";
import styles from "./Todo.module.scss";

function Todo() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default Todo;
