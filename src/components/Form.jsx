import React, { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, settodos }) {
  const [todo, settodo] = useState({ name: "", done: false });

  function handlesubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo({ name: "", done: false });
  }
  return (
    <div>
      <form onSubmit={handlesubmit} className={styles.todoform}>
        <input
          className={styles.moderninput}
          placeholder="Enter todo item"
          onChange={(e) => settodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
        ></input>
        <button type="submit" className={styles.modernbutton}>
          Add
        </button>
      </form>
    </div>
  );
}
