import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  @Input('color') color:string= '';
  @Input ('count') count:any=0;
  constructor() { }

  ngOnInit(): void {
  }

}
