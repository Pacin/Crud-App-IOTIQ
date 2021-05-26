import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UserModel } from 'src/app/models/user.model';
import { TodoModel } from 'src/app/models/todo.model';
=======
import { TodoModel } from 'src/app/models/todo.model';
import { UserModel } from 'src/app/models/user.model';
import { TodoService } from 'src/app/services/todo.service';
>>>>>>> de4da1b25b07de3c6e8eb2d628ba220b73bb3258
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
<<<<<<< HEAD
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



=======
  displayedColumns: string[] = [
    'name',
    'username',
    'email',
    'company',
    'city',
    'todosCount',
  ];
  dataSource: any;
  data: UserModel[];
  todoList: TodoModel[];

  constructor(
    private userService: UserService,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllUsers() {
    this.userService.fetchUser().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        let todosCount = this.todoList.filter(
          (todo) => todo.userId === data[i].id
        ).length;
        data[i]['todoCount'] = todosCount;
      }
      this.data = data;
      this.dataSource = this.data;
    });
  }

  getAllTodos() {
    this.todoService.fetchTodos().subscribe((data) => {
      this.todoList = data;

      this.getAllUsers();
    });
  }

  openUserModal() {
    console.log('User Modal Opened.');
  }
>>>>>>> de4da1b25b07de3c6e8eb2d628ba220b73bb3258
}
