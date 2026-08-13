import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'lib-app-icon',
    templateUrl: './app-icon.component.html',
    styleUrls: ['./app-icon.component.css'],
    standalone: true,
    imports: [MatIcon],
})
export class AppIconComponent implements OnInit {
  @Input()
  name!: string;

  constructor() {}

  ngOnInit(): void {}
}
