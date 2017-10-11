import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
      title= 'Lista rzeczy do zrobienia';
      newTodoTitle= ' ';

      todos: Array<Todo> = [ // tablica
      {
        title: 'zakupy',
        complete: true
      },
      {
        title: 'kino',
        complete: false
      }];

      public addTodo() {
        if (!this.newTodoTitle) {
          return;
        }
        const newTodo: Todo = {
          title: this.newTodoTitle,
          complete: false
        };
        this.todos.push(newTodo);

        this.newTodoTitle = '';
      }

      // bez publuc nie działa
      public deleteTodo(index) {
        this.todos.splice(index, 1);
      }
}

interface Todo {
  title: string;
  complete: boolean;
 }
