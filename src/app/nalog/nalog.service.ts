import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

interface PodaciRegistracija{
  username:string | null ,
  password:string | null,
  passwordConfirmation:string | null
}

interface PodaciPrijava{
  username:string | null,
  password: string | null,
}

interface OdgovorNaProveraPrijavljen{
  authenticated:boolean;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class NalogService {

  $prijavljen = new BehaviorSubject(false);
  emailAPI = "https://api.angular-email.com/auth/";
  korisnickoIme = "";

  constructor(private http:HttpClient) { }

  proveriIme(ime:string){
    return this.http.post(this.emailAPI+"username",{
      username:ime
    })
  }

  registracija(podaci:PodaciRegistracija){
    return this.http.post(this.emailAPI+"signup",podaci).pipe(
      tap((response:any)=>{
        this.$prijavljen.next(true);
        this.korisnickoIme = response.username;
      })
    );
  }

  prijava(podaci:PodaciPrijava){
    return this.http.post(this.emailAPI+"signin",podaci).pipe(
      tap((response:any)=>{
        this.$prijavljen.next(true);
        this.korisnickoIme = response.username;
      })
    );
  }

  proveraPrijavljen(){
    return this.http.get<OdgovorNaProveraPrijavljen>(this.emailAPI+"signedin").pipe(
      tap(({authenticated,username})=>{
        this.$prijavljen.next(authenticated);
        this.korisnickoIme = username;
      })
    );
  }

  odjava(){
    return this.http.post(this.emailAPI+"signout",{}).pipe(
      tap(()=>{
        this.$prijavljen.next(false);
      })
    )
  }
}
