import React from "react";
import Todoitem from "./Todoitem";
import styles from "./TodoList.module.css";
export default function TodoList({ todos, settodos }) {
  const sortedtodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedtodos.map((item) => (
        <Todoitem
          key={item.name}
          item={item}
          todos={todos}
          settodos={settodos}
        />
      ))}
    </div>
  );
}
