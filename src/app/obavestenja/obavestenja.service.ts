import { Injectable } from '@angular/core';
import { Observable, Subject, scan } from 'rxjs';

export interface Poruka {
  id: number;
  tip: 'uspeh' | 'greska' | 'obrisi';
  tekst?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ObavestenjaService {
  ulazPoruke: Subject<Poruka>;
  izlaznePoruke: Observable<Poruka[]>;

  constructor() {
    this.ulazPoruke = new Subject<Poruka>();
    this.izlaznePoruke = this.ulazPoruke.pipe(
      scan((acc: Poruka[], value: Poruka) => {
        if (value.tip === 'obrisi') {
          return acc.filter((poruka) => poruka.id !== value.id);
        }
        return [...acc, value];
      }, [])
    );
  }

  // Za generisanje Id-a u obavestenjima
  nasumicanBroj() {
    return Math.round(Math.random() * 10000);
  }

  dodajUspeh(poruka: string) {
    let broj = this.nasumicanBroj();
    this.ulazPoruke.next({
      id: broj,
      tekst: poruka,
      tip: 'uspeh',
    });

    setTimeout(() => {
      this.ukloniPoruku(broj);
    }, 5000);
  }

  ukloniPoruku(id: number) {
    this.ulazPoruke.next({
      id: id,
      tip: 'obrisi',
    });
  }

  dodajGresku(poruka: string) {
    let broj = this.nasumicanBroj();
    this.ulazPoruke.next({
      id: broj,
      tekst: poruka,
      tip: 'greska',
    });

    setTimeout(() => {
      this.ukloniPoruku(broj);
    }, 5000);
  }
}
