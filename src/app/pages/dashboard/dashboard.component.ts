import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor (private usuarioService: UsuarioService){
    this.usuarioService.checkToken().subscribe(resp=>{
      //console.log(resp);
    });
  }


}
