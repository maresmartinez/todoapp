import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoServices, TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoServices:TodoService) { }

  ngOnInit() {
    this.todos = this.todoServices.getTodos();
  }

}
