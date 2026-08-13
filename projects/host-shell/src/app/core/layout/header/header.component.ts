import { Component, OnInit } from '@angular/core';
import { CartService, SharedUiModule } from 'shared-ui';
import { RouterLink } from '@angular/router';
import { NgIf, AsyncPipe } from '@angular/common';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [
        SharedUiModule,
        RouterLink,
        NgIf,
        AsyncPipe,
    ],
})
export class HeaderComponent implements OnInit {
  constructor(private cs: CartService) {}
  // private cartListener = (event: Event) => {
  //   const customEvent = event as CustomEvent<any>;
  //   console.log(customEvent.detail);

  // };



  login = true;
  ngOnInit(): void {
    //  window.addEventListener('cart-added', this.cartListener);
  }

  count$ = this.cs.cartCount$;
  products$ = this.cs.cartProducts$;
}
