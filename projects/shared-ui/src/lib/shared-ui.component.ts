import { Component, OnInit } from '@angular/core';
import { IconLoaderService } from '../public-api';

@Component({
    selector: 'lib-shared-ui',
    template: `
    <p>
      shared-ui works!
    </p>
  `,
    styles: [],
    standalone: true
})
export class SharedUiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
