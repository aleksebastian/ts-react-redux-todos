import React from "react";

import TodoList from "features/todoList/TodoList";
import AddTodo from "features/todoList/AddTodo";
import Footer from "features/visibilityFilter/Footer";
import "./App.css";

export default function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}
