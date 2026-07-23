import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SharedUiModule } from "projects/shared-ui/src/public-api";



@NgModule({
  declarations: [
    ProductListComponent
  ],
  providers:[],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedUiModule
]
})
export class ProductsModule { }
