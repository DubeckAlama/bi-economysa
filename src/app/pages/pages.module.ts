import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
  ],
  imports: [CommonModule,
    SharedModule,
    AppRoutingModule,

  ]
})
export class PagesModule { }
