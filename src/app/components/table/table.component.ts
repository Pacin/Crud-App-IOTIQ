import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() columns: any[];
  displayedColumns: any[];
  dataSource: any;

  constructor() {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    if (!this.data) return alert('sa');
    if (this.data) {
      const columns = this.data
        .reduce((columns, row) => {
          return [...columns, ...Object.keys(row)];
        }, [])
        .reduce((columns, column) => {
          return columns.includes(column) ? columns : [...columns, column];
        }, []);

      this.columns = columns.map((column: any) => {
        return {
          columnDef: column,
          header: column,
          cell: (element: any) => `${element[column] ? element[column] : ``}`,
        };
      });
      this.displayedColumns = this.columns.map((c) => c.columnDef);

      this.dataSource = this.data;
    }
  }
}
