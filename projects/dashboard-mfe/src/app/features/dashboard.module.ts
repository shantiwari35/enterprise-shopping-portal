import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './pages/dashboard-view/dashboard-view.component';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        DashboardViewComponent
    ]
})
export class DashboardModule { }
