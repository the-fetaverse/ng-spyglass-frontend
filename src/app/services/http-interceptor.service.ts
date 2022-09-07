import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let username = this.authService.getAuthenticatedUser();
    let basicAuthString = this.authService.getAuthenticatedToken();

    if (username && basicAuthString) {
      request = request.clone({
        setHeaders: { Authorization: basicAuthString },
      });
    }
    return next.handle(request);
  }
}
