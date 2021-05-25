import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isMenuOpen: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
}
