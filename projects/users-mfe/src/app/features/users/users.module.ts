import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../core/service/user.service';


@NgModule({
  declarations: [],
  imports: [CommonModule, UsersRoutingModule,HttpClientModule],
  providers: [UserService],
})
export class UsersModule {}
