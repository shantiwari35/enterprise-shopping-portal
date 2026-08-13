import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'lib-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.css'],
    standalone: true,
    imports: [NgClass, NgIf],
})
export class AvatarComponent  {
  @Input() src = '';

  @Input() name = '';

  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  @Input() status: 'online' | 'away' | 'busy' | 'offline' = 'offline';

  get initials(): string {
    if (!this.name) {
      return '?';
    }

    return this.name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }

  imageError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
