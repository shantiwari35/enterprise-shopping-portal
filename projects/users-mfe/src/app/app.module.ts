import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './features/users/pages/users-list/users-list.component';
import { SharedUiModule } from "shared-ui";
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedUiModule,
    HttpClientModule,
    MatTableModule,
    CommonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
