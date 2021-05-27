import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { TodoModel } from 'src/app/models/todo.model';
import { UserModel } from 'src/app/models/user.model';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userList: UserModel[] = [];
  dataSource: any;
  data: UserModel[];
  todoList: TodoModel[];
  isUserModalOpen: boolean = false;
  // zipcodeOfCities = {};
  filteredCities: Observable<UserModel[]>;
  displayedColumns: string[] = [
    'name',
    'username',
    'email',
    'company',
    'city',
    'todosCount',
  ];

  nameValidation = "^[a-zA-ZçÇğĞıİöÖşŞüÜ -']+";
  phoneValidation = '^[0-9]*$';

  newUser: FormGroup = this.formBuilder.group({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(this.nameValidation),
      ],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    phone: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(this.phoneValidation),
      ],
    }),
    city: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    zipcode: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
  });

  get name() {
    return this.newUser.get('name');
  }
  get email() {
    return this.newUser.get('email');
  }
  get phone() {
    return this.newUser.get('phone');
  }
  get city() {
    return this.newUser.get('city');
  }

  get zipcode() {
    return this.newUser.get('zipcode');
  }

  constructor(
    private userService: UserService,
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllTodos();
    this.citySelect;
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
      this.userList = data;
      this.dataSource = this.data;
    });
  }

  getAllTodos() {
    this.todoService.fetchTodos().subscribe((data) => {
      this.todoList = data;

      this.getAllUsers();
      // this.citySelect;
    });
  }

  toggleUserModal() {
    this.isUserModalOpen = !this.isUserModalOpen;
    this.newUser.reset();
  }

  addUser() {
    alert('Successfully added.');
  }

  citySelect = (val) => {
    let selectedCity = val;
    console.log(selectedCity);
  };
}
