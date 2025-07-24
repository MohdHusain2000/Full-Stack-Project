// https://medium.com/@nitinabansode/implementing-interceptors-in-angular-a-step-by-step-guide-with-examples-77e629773d99
// https://angular.dev/guide/http/interceptors
// https://v17.angular.io/guide/http-interceptor-use-cases
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth_token');

    if (token) {
      const modifiedRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(modifiedRequest);
    }
    return next.handle(req);
  }
}
