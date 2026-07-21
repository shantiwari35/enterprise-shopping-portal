import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.css'],
})
export class AppIconComponent implements OnInit {
  @Input()
  name!: string;

  constructor() {}

  ngOnInit(): void {}
}
