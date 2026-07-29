import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './features/users/pages/users-list/users-list.component';
import { SharedUiModule } from "shared-ui";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({ declarations: [
        AppComponent,
        UsersListComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        SharedUiModule,
        MatTableModule,
        CommonModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
