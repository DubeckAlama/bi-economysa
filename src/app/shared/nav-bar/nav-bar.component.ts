import { Component } from '@angular/core';
//
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) {}

  logout():void {
    //this.usuarioService.
    this.usuarioService.logout();

    //redirecciona a la ruta inicial del Home
    this.router.navigateByUrl('/login');

  }

}
