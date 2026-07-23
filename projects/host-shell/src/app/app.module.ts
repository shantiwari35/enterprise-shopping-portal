import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { IconLoaderService, SharedUiModule } from 'shared-ui';
import { CdkTableModule } from "@angular/cdk/table";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule,CommonModule, AppRoutingModule, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule, MatCardModule, SharedUiModule, BrowserAnimationsModule, CdkTableModule],
  providers: [IconLoaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
