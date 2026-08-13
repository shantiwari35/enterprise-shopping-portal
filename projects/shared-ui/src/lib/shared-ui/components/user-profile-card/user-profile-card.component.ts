import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { AvatarComponent } from '../avatar/avatar.component';
import { MatDivider } from '@angular/material/divider';
import { AppIconComponent } from '../app-icon/app-icon.component';
import { ButtonComponent } from '../button/button.component';
import { DatePipe } from '@angular/common';
import { TextTruncatePipe } from '../../pipes/text-truncate.pipe';

@Component({
    selector: 'lib-user-profile-card',
    templateUrl: './user-profile-card.component.html',
    styleUrls: ['./user-profile-card.component.css'],
    // encapsulation: ViewEncapsulation.ShadowDom,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatCard, AvatarComponent, MatDivider, AppIconComponent, ButtonComponent, DatePipe, TextTruncatePipe]
})
export class UserProfileCardComponent implements OnInit {

  @Input('inputData') inputData: any;
  constructor() { }

  ngOnInit(): void {
  }

  getFullName(): string {
    if (this.inputData) {
      return `${this.inputData.name.title} ${this.inputData.name.first} ${this.inputData.name.last}`;
    }
    return '';
  }
}
