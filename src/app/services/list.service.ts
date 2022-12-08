import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../interface/todo';

@Injectable()
export class ListService {
  private todoslist = new BehaviorSubject<Todo[]>([]);
  private data: {
    todos: Todo[];
  } = {
    todos: [],
  };
  readonly todos = this.todoslist.asObservable();
  private itemId = 0;
  constructor() {}

  create(todo: Todo) {
    this.itemId = this.itemId + 1;
    todo.id = this.itemId;
    this.data.todos.push(todo);
    this.todoslist.next(Object.assign({}, this.data).todos);
  }

  delete(todoId: number) {
    this.data.todos.forEach((t, i) => {
      if (t.id === todoId) {
        this.data.todos.splice(i, 1);
      }
    });

    this.todoslist.next(Object.assign({}, this.data).todos);
  }
}
