import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request)
            .pipe(
                catchError( error => {

                    let errorMsg = '';

                    if (error.error instanceof ErrorEvent) {

                        console.log('Client error', `Error: ${error.error.message}`);
                        return throwError(errorMsg);
                    }
                    else {

                        console.log('Server error', `Error Code: ${error.status},  Message: ${error.message}`);

                        return this.authService.auth()
                        .pipe(
                            switchMap((res) => {
                                this.authService.setToken(res.token);
                                const requestWithNewBearerToken = request.clone({
                                    headers: request.headers.set('Authorization', `Bearer ${res.token}`)
                                });
                                return next.handle(requestWithNewBearerToken);
                            })
                        )
                    }


                })
            )
    }
}