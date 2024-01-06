import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PodaciRegistracija{
  username:string | null ,
  password:string | null,
  passwordConfirmation:string | null
}

@Injectable({
  providedIn: 'root'
})
export class NalogService {

  emailAPI = "https://api.angular-email.com/auth/";

  constructor(private http:HttpClient) { }

  proveriIme(ime:string){
    return this.http.post(this.emailAPI+"username",{
      username:ime
    })
  }

  registracija(podaci:PodaciRegistracija){
    return this.http.post(this.emailAPI+"signup",podaci);
  }
}
