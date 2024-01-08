import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poruka } from './poruka';

export interface SvaPostaOdgovor{
  id:string,
  subject:string,
  from: string
}

@Injectable({
  providedIn: 'root'
})
export class PostaService {

  constructor(private http:HttpClient) { }
  emailAPI = "https://api.angular-email.com/";

  svaPosta(){
    return this.http.get<SvaPostaOdgovor[]>(this.emailAPI+"emails");
  }
  vratiPorukuPoId(porukaId:number){
    return this.http.get<Poruka>(this.emailAPI+"emails/"+porukaId);
  }
}
