import { Component } from '@angular/core';
//
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public formSubmitted = false;

  public loginForm = this.fb.group({
    username: [localStorage.getItem('username') || '' , [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  login(): void {
    // private handlerError({ err }: { err: any; }): Observable<never>{
    const formValue = (this.loginForm.value) as any ;

     this.usuarioService.login(formValue).
      subscribe( {
          next: (resp) => {
           //console.log(resp);
           if(this.loginForm.get('remember')?.value){
              //localStorage.setItem('username', formValue.get('username').value);
              // corregir.....!!!
            }else{
              localStorage.removeItem('username');
            }
            console.log(resp);

           //redirecciona a la ruta inicial del Home
           //this.router.navigateByUrl('');

        },
        error: (err) => {
          console.log(err);
          //si sucede un error:
          Swal.fire('Error:',err.message, 'error');

        },
        complete:() =>{
          //console.info('Complete.');
        }
      });


  }
}
