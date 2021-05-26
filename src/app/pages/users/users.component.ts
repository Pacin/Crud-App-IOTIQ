import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  columns: any[] = [];
  displayedColumns: any[] = [];
  DATA: UserModel[] = [];
  dataSource: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.fetchUser().subscribe((data) => {
      this.DATA = data;
      this.displayData();
    });
  }

  displayData() {
    const columns = this.DATA.reduce((columns, row) => {
      return [...columns, ...Object.keys(row)];
    }, []).reduce((columns, column) => {
      return columns.includes(column) ? columns : [...columns, column];
    }, []);

    this.columns = columns.map((column) => {
      return {
        columnDef: column,
        header: column,
        cell: (element: any) => `${element[column] ? element[column] : ``}`,
      };
    });
    this.displayedColumns = this.columns.map((c) => c.columnDef);

    this.dataSource = this.DATA;
  }
}
