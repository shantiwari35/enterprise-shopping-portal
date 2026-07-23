import { Component, OnInit } from '@angular/core';
import { CartService } from 'shared-ui';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
