import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './features/users/pages/users-list/users-list.component';
import { SharedUiModule } from "shared-ui";

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedUiModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
