import React, { useState } from "react";
import { TodoListView } from "./components/todo-list-view";
import { store } from "./store/store";
import "./styles.css";

console.clear();

export default function App() {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    store.addTodo(title);
    setTitle("");
  };
  return (
    <div className="App">
      <h1>MobX Todo-App</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="todoTitle">Todo title</label>
        <input
          id="todoTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit"> Add Todo </button>
      </form>
      <TodoListView todoList={store} />

      <h2>Add Todo:</h2>
    </div>
  );
}
