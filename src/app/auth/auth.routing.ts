import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//
import { LoginComponent } from './login/login.component';
import { NoAuthGuard } from '../guards/no-auth.guard';


const routes: Routes =[
    { path: 'login', component: LoginComponent,canActivate:[NoAuthGuard]},

];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes) ],
    exports: [RouterModule]
  })

export class AuthRoutingModule {}
