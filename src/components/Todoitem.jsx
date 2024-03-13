import React from "react";
import styles from "./Todoitem.module.css";

export default function Todoitem({ item, todos, settodos }) {
  function handledelete(item) {
    settodos(todos.filter((todo) => todo !== item));
  }
  function handleclick(name) {
    const arr = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    settodos(arr);
  }
  const classname = item.done ? styles.com : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span className={classname} onClick={() => handleclick(item.name)}>
          {" "}
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handledelete(item)}
            className={styles.deletebutton}
          >
            X
          </button>
        </span>
        <hr className={styles.line} />{" "}
      </div>
    </div>
  );
}
