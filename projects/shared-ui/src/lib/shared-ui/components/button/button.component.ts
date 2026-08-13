import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { NgClass, NgIf } from '@angular/common';
import { AppIconComponent } from '../app-icon/app-icon.component';

@Component({
    selector: 'lib-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
    //  encapsulation: ViewEncapsulation.ShadowDom,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatButton, NgClass, NgIf, AppIconComponent]
})
export class ButtonComponent  {
  @Input() label = 'Button';

  @Input() icon = '';

  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';

  @Input() disabled = false;

  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
