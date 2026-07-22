import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
searchUsers($event: string) {
throw new Error('Method not implemented.');
}
  page = 1;

  pageSize = 10;

  loadPage(page: number) {
    this.page = page;

    // this.getUsers();
  }

  changePageSize(size: number) {
    this.pageSize = size;

    // this.getUsers();
  }
  constructor() {}

  ngOnInit(): void {}
}
