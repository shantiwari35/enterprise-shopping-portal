import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly cartCountSubject$=new BehaviorSubject<number>(0);

  private readonly cartProductSubject$=new BehaviorSubject<any[]>([]);

  readonly cartCount$=this.cartCountSubject$.asObservable();
  readonly cartProducts$=this.cartProductSubject$.asObservable();

  constructor() { }
  get cartCount(): number {
    return this.cartCountSubject$.value;
  }

  get cartProducts(): any[] {
    return this.cartProductSubject$.value;
  }

  // Setters
  setCartCount(count: number): void {
    this.cartCountSubject$.next(count);
  }

  setCartProducts(products: any[]): void {
    this.cartProductSubject$.next(products);
    this.cartCountSubject$.next(products.length);
  }
  addProductInCart(p:any){
    const products=[...this.cartProductSubject$.value,p];
    this.setCartProducts(products);
    this.setCartCount(products.length);
  }
}
