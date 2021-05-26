import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { TodoModel } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  fetchTodos() {
    return this.http.get<TodoModel[]>(`${env.baseURL}/todos`);
  }
}
