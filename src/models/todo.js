import { makeObservable, observable, action } from "mobx";

export class Todo {
  id = Math.random().toString(16).slice(2);
  title = "";
  finished = false;

  constructor(title) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action
    });
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}
