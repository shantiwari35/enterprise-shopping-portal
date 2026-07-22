import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiComponent } from './shared-ui.component';
import { AppIconComponent } from './shared-ui/components/app-icon/app-icon.component';
import { MaterialModule } from './material/material.module';
import { LogoComponent } from './shared-ui/components/logo/logo.component';

@NgModule({
  declarations: [SharedUiComponent, AppIconComponent, LogoComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AppIconComponent, MaterialModule, LogoComponent],
})
export class SharedUiModule {}
