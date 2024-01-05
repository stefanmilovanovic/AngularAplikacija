import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaNovostiComponent } from './lista-novosti/lista-novosti.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListaNovostiComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ListaNovostiComponent
  ]
})
export class NovostiModule { }
