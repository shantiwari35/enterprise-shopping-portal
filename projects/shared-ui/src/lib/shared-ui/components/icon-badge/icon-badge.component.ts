import { Component, Input, OnInit } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { AppIconComponent } from '../app-icon/app-icon.component';
import { BadgeComponent } from '../badge/badge.component';

@Component({
    selector: 'lib-icon-badge',
    templateUrl: './icon-badge.component.html',
    styleUrls: ['./icon-badge.component.css'],
    standalone: true,
    imports: [
        MatIconButton,
        AppIconComponent,
        BadgeComponent,
    ],
})
export class IconBadgeComponent implements OnInit {
  @Input() icon = 'shopping_cart';
  @Input() count:number|null = 0;
  @Input() color = '#007AFF';
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
