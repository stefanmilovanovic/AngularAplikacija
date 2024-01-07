import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NalogHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url === 'https://api.angular-email.com/auth/signedin') {
      const noviRequest = req.clone({
        withCredentials: true,
      });

      return next.handle(noviRequest);
    }
    return next.handle(req);
  }
}
