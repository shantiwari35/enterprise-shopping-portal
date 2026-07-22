import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  menus = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      link: '/dashboard',
      title: 'Dashboard',
    },
    {
      name: 'Products',
      icon: 'inventory_2',
      link: '/products',
      title: 'Products',

    },

    {
      name: 'Customers',
      icon: 'people',
      link: '/users',
      title: 'Customers',
    },

  ];
}
