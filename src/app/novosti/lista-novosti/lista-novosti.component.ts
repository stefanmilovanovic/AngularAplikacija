import { Component, OnDestroy } from '@angular/core';
import { NovostiService, Vest } from '../novosti.service';

@Component({
  selector: 'app-lista-novosti',
  templateUrl: './lista-novosti.component.html',
  styleUrls: ['./lista-novosti.component.css']
})
export class ListaNovostiComponent implements OnDestroy{
  vesti?: Vest[];
  brojStranica = 0;
  vestiObservable:any;
  constructor(private novostiService:NovostiService){
    this.vestiObservable = this.novostiService.izlazVesti.subscribe((response)=>{
      this.vesti = response;
    });
    this.novostiService.ukupanBrojStranica.subscribe((broj)=>{
      this.brojStranica = broj;
    })

    this.novostiService.brojStranice.next(1);
  }
  ngOnDestroy(): void {
    this.vestiObservable.unsubscribe();
  }

  promenaStranice(broj: number) {
    this.novostiService.brojStranice.next(broj);
  }
}
