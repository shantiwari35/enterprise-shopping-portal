import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-icon-badge',
  templateUrl: './icon-badge.component.html',
  styleUrls: ['./icon-badge.component.css'],
})
export class IconBadgeComponent implements OnInit {
  @Input() icon = 'shopping_cart';
  @Input() count:number|null = 0;
  @Input() color = '#007AFF';
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
