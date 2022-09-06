import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let username = 'dmjohnspor@gmail.com';
    let password = 'test';
    let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    request = request.clone({ setHeaders: { Authorization: basicAuthString } });
    return next.handle(request);
  }
}
