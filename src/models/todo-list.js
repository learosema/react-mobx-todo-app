import { makeObservable, observable, computed, action } from "mobx";

import { Todo } from "./todo";

export class TodoList {
  todos = [];

  get unfinishedTodoCount() {
    const { todos } = this;
    return todos.filter((todo) => !todo.finished).length;
  }

  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
      addTodo: action
    });
    this.todos = todos;
  }

  addTodo(title) {
    this.todos.unshift(new Todo(title));
  }
}
