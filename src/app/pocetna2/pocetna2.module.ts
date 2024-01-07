import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pocetna2RoutingModule } from './pocetna2-routing.module';
import { Pocetna2Component } from './pocetna2/pocetna2.component';
import { NovostiModule } from '../novosti/novosti.module';


@NgModule({
  declarations: [
    Pocetna2Component
  ],
  imports: [
    CommonModule,
    Pocetna2RoutingModule,
    NovostiModule
  ]
})
export class Pocetna2Module { }
