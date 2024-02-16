import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log('Auth Interceptor called!');
        const modifiedReq = req.clone({headers: req.headers.append('auth', 'abcxyz')})
        return next.handle(modifiedReq).pipe(tap((event) => {  
            if(event.type === HttpEventType.Response){
                console.log('Response has arrived. Response data: ');
                console.log(event.body)
            }
        }));
    }
}