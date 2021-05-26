import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';
import { UserModel } from 'src/app/models/user.model';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  displayedColumns: string[] = ['username', 'title', 'completed'];
  dataSource: any;
  data: TodoModel[];
  userList: UserModel[];

  constructor(
    private todoService: TodoService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.fetchUserList();
  }

  getTodos() {
    this.todoService.fetchTodos().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        let userId = data[i].userId;
        let userInfo = this.userList.find((user) => user.id === userId);
        let name = userInfo.username;
        data[i]['username'] = name;
      }
      this.dataSource = data;
    });
  }

  fetchUserList() {
    this.userService.fetchUser().subscribe((data) => {
      this.userList = data;
      this.getTodos();
    });
  }
}
