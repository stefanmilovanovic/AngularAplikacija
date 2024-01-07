import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject, catchError, map, refCount, switchMap, tap } from 'rxjs';
import { ObavestenjaService } from '../obavestenja/obavestenja.service';

interface NovostiApiOdgovor{
  totalResults:number;
  articles:Vest[]
}

export interface Vest{
  title:string,
    url: string,
    publishedAt:string
}

@Injectable({
  providedIn: 'root'
})
export class NovostiService {

  private novostiAPI = "https://newsapi.org/v2/top-headlines";
  private pageSize = 10;
  private apiKey = "3a844663971a4eb6a9d180ae456838e0";
  private country = "rs";

  brojStranice:Subject<number>;
  izlazVesti:Observable<Vest[]>;
  ukupanBrojStranica:Subject<number>;
  constructor(private http:HttpClient, private obavestenjaService:ObavestenjaService) {
    this.brojStranice = new Subject<number>();
    this.ukupanBrojStranica = new Subject<number>();
    this.izlazVesti = this.brojStranice.pipe(
      map((broj:number)=>{
        return new HttpParams()
        .set('pageSize', this.pageSize)
          .set('page',broj)
          .set('country', this.country)
          .set('apiKey', this.apiKey);
      }),
      switchMap((params)=>{
        return http.get<NovostiApiOdgovor>(this.novostiAPI,{params:params});
      }),
      tap((response)=>{
        let brojStranica = response.totalResults/this.pageSize;
        brojStranica = Math.ceil(brojStranica);
        this.ukupanBrojStranica.next(brojStranica);
        obavestenjaService.dodajUspeh("Vesti uspešno učitane!")
      }),
      map((response)=>{
        return response.articles
      }),
      catchError((err)=>{
        obavestenjaService.dodajGresku("Greška prilikom učitavanja vesti!");
        return EMPTY;
      })
    )
  }
}
