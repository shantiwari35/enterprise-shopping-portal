import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'lib-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.css'],
    standalone: true,
    imports: [NgIf]
})
export class BadgeComponent implements OnInit {

  @Input('color') color:string= '';
  @Input ('count') count:any=0;
  constructor() { }

  ngOnInit(): void {
  }

}
