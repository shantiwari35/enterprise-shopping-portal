import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
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
