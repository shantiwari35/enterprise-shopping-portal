import { Component, OnInit } from '@angular/core';
import { ProductService } from 'projects/products-mfe/src/app/core/services/product-service.service';
import { ProductsModule } from '../../products.module';
import { CartService } from 'shared-ui';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../../../../../../../shared-ui/src/lib/shared-ui/components/product-card/product-card.component';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    standalone: true,
    imports: [NgFor, ProductCardComponent]
})
export class ProductListComponent implements OnInit {

  products:ProductsModule[]=[];
  limit=10;
  offset=0
  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {

    this.getProducts(this.limit,this.offset);
  }

  getProducts(limit:number,offset:number){
    this.productService.getAllProducts(limit,offset).subscribe(
      {
        next:(data:any)=>{
          console.log(data);
          if(data){
            this.products=data
          }
        }
      }
    )
  }

  addProductToCart(product:ProductsModule){
// console.log(product)
this.cartService.addProductInCart(product);
    // window.dispatchEvent(
    //   new CustomEvent('cart-added', {
    //     detail: product,
    //   }),
    // );
  }

}
