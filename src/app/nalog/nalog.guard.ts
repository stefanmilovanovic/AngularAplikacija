import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, skipWhile, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NalogService } from './nalog.service';

@Injectable({
  providedIn: 'root',
})
export class nalogGuard {
  constructor(private nalogService: NalogService, private router: Router) {}

  canMatch(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    // Ovde vracamo observable samo ako ima complete()
    // Ovim operatorima fejkujemo da ima comlete()
    return this.nalogService.$prijavljen.pipe(
      skipWhile((value) => value === null),
      take(1),
      tap((authenticated) => {
        if (authenticated === false) {
          this.router.navigate(['']);
        }
      })
    );
  }
}
