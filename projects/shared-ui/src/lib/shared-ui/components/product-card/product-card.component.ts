import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductCardModel } from '../../models/Product.model';

@Component({
  selector: 'lib-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product!: any;

  @Output()
  addToCart = new EventEmitter<any>();

  @Output()
  viewDetails = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  onViewDetails(): void {
    this.viewDetails.emit(this.product);
  }
}
