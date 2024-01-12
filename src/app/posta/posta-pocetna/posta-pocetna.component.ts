import { Component } from '@angular/core';
import { NalogService } from 'src/app/nalog/nalog.service';

@Component({
  selector: 'app-posta-pocetna',
  templateUrl: './posta-pocetna.component.html',
  styleUrls: ['./posta-pocetna.component.css']
})
export class PostaPocetnaComponent {
  korisnik = "";
  constructor(private nalogSevice:NalogService){
    this.korisnik = this.nalogSevice.korisnickoIme;
  }
}
