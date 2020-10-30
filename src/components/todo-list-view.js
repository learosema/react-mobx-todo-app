import * as React from "react";
import { observer } from "mobx-react";

const TodoView = observer(({ todo }) => (
  <li className={todo.finished ? "done" : ""}>
    <input
      id={todo.id}
      type="checkbox"
      checked={todo.finished}
      onChange={() => todo.toggle()}
    />
    <label htmlFor={todo.id}>{todo.title}</label>
  </li>
));

export const TodoListView = observer(({ todoList }) => (
  <div>
    <ul>
      {todoList.todos.map((todo) => (
        <TodoView todo={todo} key={todo.id} />
      ))}
    </ul>
  </div>
));
