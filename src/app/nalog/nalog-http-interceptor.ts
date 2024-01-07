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
    console.log(req.url);
    if (
      req.url === 'https://newsapi.org/v2/top-headlines' ||
      req.url === 'https://api.openweathermap.org/data/2.5/forecast'
    ) {
      return next.handle(req);
    }
    const noviRequest = req.clone({
      withCredentials: true,
    });

    return next.handle(noviRequest);
  }
}
