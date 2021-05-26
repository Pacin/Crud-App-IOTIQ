import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { TodoModel } from 'src/app/models/todo.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  columns: any[] = ['A', 'B','C', 'D'];
  userList: UserModel[] = [];
  todosList: TodoModel[] = [];

  getUser() {
    this.userService.fetchUsers().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        let todosCount = this.todosList.filter(todo => todo.userId == data[i].id).length;
        data[i]["todoCount"] = todosCount;
      }

      this.userList = data
      });
  }
  
  constructor(
    private userService: UserService
  ) 
  { }


  ngOnInit(): void {
    this.getUser();
  }



}
