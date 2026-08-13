import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SharedUiModule } from "projects/shared-ui/src/public-api";



@NgModule({
    providers: [],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedUiModule,
        ProductListComponent
    ]
})
export class ProductsModule { }
