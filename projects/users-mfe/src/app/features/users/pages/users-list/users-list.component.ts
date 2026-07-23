import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'projects/users-mfe/src/app/core/service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  page = 1;
  pageSize = 10;
  userMap = new Map<number, any[]>();
  users: any[] = [];
  totalItems = 100;

  viewMode: 'card' | 'table' = 'card';

  displayedColumns = ['avatar', 'name', 'email', 'phone', 'country', 'actions'];

  dataSource = new MatTableDataSource<any>();

  loadPage(page: number) {
    this.page = page;

    this.getUsers();
  }

  changePageSize(size: number) {
    this.pageSize = size;

    this.getUsers();
  }
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService
      .getRandomUsers(this.page, this.pageSize)
      .subscribe((response: any) => {
        console.log('Users:', response.data);
        const apiData = response?.data;
        if (!response || !response.data || !response.data.data) {
          console.error('Invalid response structure:', response);
          return;
        }
        this.users = apiData?.data;
        this.dataSource.data = this.users;
        this.userMap.set(this.page, this.users);
        this.page = apiData?.page; // Assuming the API response has a 'page' property for the current page
        this.pageSize = apiData?.limit; // Assuming the API response has a 'limit' property for the page size
        this.totalItems = apiData?.totalItems; // Assuming the API response has a 'total' property for the total number of items
      });
  }

  searchUsers($event: string) {
    let searchTerm = $event.toLowerCase();
    let pageUsers = this.userMap.get(this.page);
    let filteredUsers = pageUsers?.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      return fullName.includes(searchTerm);
    });
    this.users = filteredUsers || [];
    this.dataSource.data = this.users;
    console.log('Search Term:', searchTerm);
  }

  changeView(arg0: string) {
    this.viewMode = arg0 as 'card' | 'table';
  }
}
