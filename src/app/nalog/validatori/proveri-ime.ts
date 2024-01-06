import { Injectable } from '@angular/core';
import { NalogService } from '../nalog.service';
import { AbstractControl } from '@angular/forms';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProveriIme {
  constructor(private nalogService: NalogService) {}

  validate = (control: AbstractControl) => {
    let { value } = control;
    return this.nalogService.proveriIme(value).pipe(
      map((value) => {
        // console.log(value);
        if ((value = { available: true })) {
          return null;
        }
        return value;
      }),
      catchError((err) => {
        if (err.error.username) {
          return of({ imeVecPostoji: true });
        }
        return of({ noConnection: true });
      })
    );
  };
}
