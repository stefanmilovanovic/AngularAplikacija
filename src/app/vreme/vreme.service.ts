import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  EMPTY,
  Observable,
  catchError,
  filter,
  map,
  mergeMap,
  retry,
  switchMap,
  tap,
  toArray,
} from 'rxjs';
import { ObavestenjaService } from '../obavestenja/obavestenja.service';

interface PrognozaApiOdgovor {
  city: {};
  list: {
    dt_txt: string;
    main: {
      temp: number;
    };
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class VremeService {
  constructor(private http: HttpClient, private obavestenjaService:ObavestenjaService) {}

  prognozaAPI = 'https://api.openweathermap.org/data/2.5/forecast';

  nadjiLokaciju() {
    return new Observable<GeolocationCoordinates>((subscriber) => {
      // Ova ugradjena funkcija vraca ili kordinate ili gresku
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          // Ako je lokacija uspesno nadjena vracamo kordinate
          let { coords } = position;
          subscriber.next(coords);
          subscriber.complete();
        },
        (err) => {
          // Ako vrati gresku prebacijemo Observable u stanje greske
          subscriber.error(err);
        }
      );
    }).pipe(
      // Ponavlja logiku zeljeni broj puta
      retry(1),
      tap(()=>{
        this.obavestenjaService.dodajUspeh("Lokacija uspešno pronađena!");
      }),
      catchError((err)=>{
        this.obavestenjaService.dodajGresku("Problem sa lokacijom!");
        return EMPTY;
      })
    );
  }

  preuzmiPrognozu() {
    return this.nadjiLokaciju().pipe(
      map((coords) => {
        return new HttpParams()
          .set('lat', coords.latitude.toString())
          .set('lon', coords.longitude.toString())
          .set('units', 'metric')
          .set('appid', 'b1cb5160953fb0ab69f1706e9df7e621');
      }),
      switchMap((httpParams) => {
        return this.http.get<PrognozaApiOdgovor>(this.prognozaAPI, {
          params: httpParams,
        });
      }),
      map((prognoza) => {
        return prognoza.list;
      }),
      // Od svakog objekta u listi pravimo novi observable i saljemo dalje
      mergeMap((lista) => {
        return lista;
      }),
      // Pomocu filtera uzimamo svaki 8 objekat/ observable
      filter((objekat, index) => {
        if (index % 8 === 0) {
          return true;
        }
        return false;
      }),
      // Uzimamo samo vreme i temperaturu
      map((value) => {
        return {
          temperatura: value.main.temp,
          vreme: value.dt_txt,
        };
      }),
      // Prebacujemo sve vrednosti observalbe-ih u jednu
      toArray()
    );
  }
}
