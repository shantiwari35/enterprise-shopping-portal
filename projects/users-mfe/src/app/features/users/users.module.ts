import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { UserService } from '../../core/service/user.service';


@NgModule({ declarations: [], imports: [CommonModule, UsersRoutingModule, MatTableModule], providers: [UserService, provideHttpClient(withInterceptorsFromDi())] })
export class UsersModule {}
