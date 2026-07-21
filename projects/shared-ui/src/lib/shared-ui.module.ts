import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiComponent } from './shared-ui.component';
import { AppIconComponent } from './shared-ui/components/app-icon/app-icon.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [SharedUiComponent, AppIconComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AppIconComponent, MaterialModule],
})
export class SharedUiModule {}
