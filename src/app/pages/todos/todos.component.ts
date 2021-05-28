import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  isTodoModalOpen: boolean = false;

  newTodo: FormGroup = this.formBuilder.group({
    username: new FormControl('', {
      validators: Validators.required,
    }),
    title: new FormControl('', {
      validators: [Validators.required, Validators.minLength(20)],
    }),
  });

  get title() {
    return this.newTodo.get('title');
  }

  get username() {
    return this.newTodo.get('username');
  }

  constructor(
    private todoService: TodoService,
    private userService: UserService,
    private formBuilder: FormBuilder
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

  toggleTodoModal() {
    this.isTodoModalOpen = !this.isTodoModalOpen;
  }
  addTodo() {
    alert('Todo has added.');
    this.isTodoModalOpen = false;
  }
}
