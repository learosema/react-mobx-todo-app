import { Todo } from "../models/todo";
import { TodoList } from "../models/todo-list";

export const store = new TodoList([
  new Todo("Grab coffee"),
  new Todo("Write code")
]);
