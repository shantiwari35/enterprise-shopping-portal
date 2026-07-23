import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiComponent } from './shared-ui.component';
import { AppIconComponent } from './shared-ui/components/app-icon/app-icon.component';
import { MaterialModule } from './material/material.module';
import { LogoComponent } from './shared-ui/components/logo/logo.component';
import { UserProfileCardComponent } from './shared-ui/components/user-profile-card/user-profile-card.component';
import { ButtonComponent } from './shared-ui/components/button/button.component';
import { IconLoaderService } from './shared-data/services/icon-loader.service';
import { AvatarComponent } from './shared-ui/components/avatar/avatar.component';
import { PaginationComponent } from './shared-ui/components/pagination/pagination.component';
import { SearchComponent } from './shared-ui/components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextTruncatePipe } from './shared-ui/pipes/text-truncate.pipe';
import { BadgeComponent } from './shared-ui/components/badge/badge.component';
import { IconBadgeComponent } from './shared-ui/components/icon-badge/icon-badge.component';
import { ProductCardComponent } from './shared-ui/components/product-card/product-card.component';
import { CartService } from './shared-data/services/cart.service';

@NgModule({
  declarations: [
    SharedUiComponent,
    AppIconComponent,
    LogoComponent,
    UserProfileCardComponent,
    ButtonComponent,
    AvatarComponent,
    PaginationComponent,
    SearchComponent,
    TextTruncatePipe,
    BadgeComponent,
    IconBadgeComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  providers: [IconLoaderService,CartService],
  exports: [
    AppIconComponent,
    MaterialModule,
    LogoComponent,
    UserProfileCardComponent,
    ButtonComponent,
    AvatarComponent,
    PaginationComponent,
    SearchComponent,
    TextTruncatePipe,
    BadgeComponent,
    IconBadgeComponent,
    ProductCardComponent,
  ],
})
export class SharedUiModule {
  constructor(private iconLoader: IconLoaderService,private cartService:CartService) {}
}
