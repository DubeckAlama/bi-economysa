import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    /**
       * @param {Router} _router
       */
      constructor(private _router: Router) { }
      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(

            catchError((err: HttpErrorResponse) => {

            //Si la solicitus esta dentro de 401-403 (token vencido)
            if ([401, 403].indexOf(err.status) !== -1) {
                localStorage.removeItem('token');
                // token ya expirado:
                Swal.fire('Error:','Su sesión a expirado, vuelva a iniciar sesión!', 'error');
                this._router.navigate(['/login']);
            }

            // throwError
            let error = err.error || err.statusText;
            //Catchs errors
            if (err.status > 404) {
                error["message"] = "Ocurrió un problema, inténtelo más tarde."
            }
            error["status"] = err.status;
            return throwError(error);

            })

        );

      }
}
