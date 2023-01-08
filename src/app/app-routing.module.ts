import { NgModule } from '@angular/core';

//Agregados:
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

//componentes:
import { LoginComponent } from './auth/login/login.component';
import { Page404Component } from './pages/page404/page404.component';
import { AuthRoutingModule } from './auth/auth.routing';


const routes : Routes =[

  { path: '**', component: Page404Component}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
