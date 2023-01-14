import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//
import { AuthGuard } from '../guards/auth.guard';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';


const routes: Routes =[
    { path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
     { path: 'dashboard', component: DashboardComponent},
     { path: 'progress', component: ProgressComponent},

     { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
   },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes) ],
    exports: [RouterModule]
  })

export class PagesRoutingModule {}
