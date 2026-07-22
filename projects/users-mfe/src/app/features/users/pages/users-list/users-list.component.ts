import { Component, OnInit } from '@angular/core';
import { UserService } from 'projects/users-mfe/src/app/core/service/user.service';

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

  users: any[] = [];

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
    this.userService.getRandomUsers(this.page, this.pageSize).subscribe((response:any) => {
      console.log('Users:', response.data);
      const apiData = response?.data;
      if(!response || !response.data || !response.data.data) {
        console.error('Invalid response structure:', response);
        return;
      }
      this.users = apiData?.data; // Assuming the API response has a 'data' property containing the user list
      this.page = apiData?.page; // Assuming the API response has a 'page' property for the current page
      this.pageSize = apiData?.limit; // Assuming the API response has a 'limit' property for the page size
    });
  }
}
