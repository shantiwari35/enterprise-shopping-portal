import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IconLoaderService {

  private readonly id = 'material-symbols-font';

  constructor() {
    this.load();
  }

  private load(): void {
    if (document.getElementById(this.id)) {
      return;
    }

    const link = document.createElement('link');

    link.id = this.id;
    link.rel = 'stylesheet';

    link.href =
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';

    document.head.appendChild(link);
  }
}

