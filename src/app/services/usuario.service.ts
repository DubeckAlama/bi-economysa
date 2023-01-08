import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//
import { LoginForm } from '../interfaces/login-form.interface';
import { Observable, throwError,catchError, map } from 'rxjs';
import { userResponse } from '../interfaces/userResponse.interface';
import  {JwtHelperService} from '@auth0/angular-jwt';
import Swal from 'sweetalert2';

const base_url = environment.base_url;
const helper =new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient) {
    this.checkToken();
  }

  login(formData: LoginForm): Observable< userResponse | void>{
    return this.http
        .post<userResponse>(`${base_url}/signin`, formData)
        .pipe(
            map( (res:userResponse) => {

                //grabar token
                this.saveToken(res.token);

                //console.log(res)
                return res;

            }),
            catchError((err) => this.handlerError({ err }))
        );
  }

  logout():void{
    localStorage.removeItem('token');

    // si usuario esta loguedo-> cmbiar (false)

  }

  private checkToken():void{
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);

    // si usuario esta loguedo-> cmbiar (true)


  }

  private saveToken(token: string):void{
    localStorage.setItem('token',token);
  }

  private handlerError({ err }: { err: any; }): Observable<never>{
    let errorMessage ='ocurrio un error..';

    if(err){
        errorMessage=` ${err.message}`;
    }

    Swal.fire('Error', err.messages, 'error');
    //return throwError(errorMessage);
    return throwError(()=> new Error(errorMessage));

  }

}
