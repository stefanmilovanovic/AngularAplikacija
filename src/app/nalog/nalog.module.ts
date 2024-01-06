import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NalogRoutingModule } from './nalog-routing.module';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegistracijaComponent,
    PrijavaComponent
  ],
  imports: [
    CommonModule,
    NalogRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class NalogModule { }
