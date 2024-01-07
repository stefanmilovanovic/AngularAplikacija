import { Component, OnInit } from '@angular/core';
import { NalogService } from '../nalog.service';
import { ObavestenjaService } from 'src/app/obavestenja/obavestenja.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-odjava',
  templateUrl: './odjava.component.html',
  styleUrls: ['./odjava.component.css']
})
export class OdjavaComponent implements OnInit{
  constructor(private nalogService:NalogService,private obavestenjaService:ObavestenjaService, private router:Router){}
  ngOnInit(): void {
    this.nalogService.odjava().subscribe((value)=>{
      console.log(value)
      this.obavestenjaService.dodajUspeh("Odjava sa naloga uspešna");
      this.router.navigate(["prijava"]);
    })
  }
}
