import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrognozaComponent } from './prognoza/prognoza.component';



@NgModule({
  declarations: [
    PrognozaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PrognozaComponent
  ]
})
export class VremeModule { }
