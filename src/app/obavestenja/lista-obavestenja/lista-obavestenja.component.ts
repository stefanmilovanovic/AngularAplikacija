import { Component } from '@angular/core';
import { ObavestenjaService, Poruka } from '../obavestenja.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-obavestenja',
  templateUrl: './lista-obavestenja.component.html',
  styleUrls: ['./lista-obavestenja.component.css']
})
export class ListaObavestenjaComponent{

  poruke:Observable<Poruka[]>
  constructor(private obavestenjaService:ObavestenjaService){
    this.poruke = obavestenjaService.izlaznePoruke;
  }

  ugasiObavestenje(id:number){
    this.obavestenjaService.ukloniPoruku(id);
  }
}
