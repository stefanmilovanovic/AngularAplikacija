import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaObavestenjaComponent } from './lista-obavestenja/lista-obavestenja.component';



@NgModule({
  declarations: [
    ListaObavestenjaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListaObavestenjaComponent
  ]
})
export class ObavestenjaModule { }
