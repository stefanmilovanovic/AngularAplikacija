import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NalogRoutingModule } from './nalog-routing.module';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { OdjavaComponent } from './odjava/odjava.component';


@NgModule({
  declarations: [
    RegistracijaComponent,
    PrijavaComponent,
    OdjavaComponent
  ],
  imports: [
    CommonModule,
    NalogRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class NalogModule { }
