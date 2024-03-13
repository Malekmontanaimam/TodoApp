import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, settodos] = useState([]);
  const completetodo = todos.filter((todo) => todo.done).length;
  const totaltodos = todos.length;
  return (
    <div>
      <Form todos={todos} settodos={settodos} />
      <TodoList todos={todos} settodos={settodos} />
      <Footer completetodo={completetodo} totaltodos={totaltodos} />
    </div>
  );
}
