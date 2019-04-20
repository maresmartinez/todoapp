import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'Todo 1',
        completed: false
      },
      {
        id: 2,
        title: 'Todo 2',
        completed: false
      },
      {
        id: 3,
        title: 'Todo 3',
        completed: true
      }
    ]
  }
}
