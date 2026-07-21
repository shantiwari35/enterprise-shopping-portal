import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'host-shell';

  menus = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
    },
    {
      name: 'Products',
      icon: 'inventory_2',
    },

    {
      name: 'Customers',
      icon: 'people',
    },

  ];
}
