import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostaRoutingModule } from './posta-routing.module';
import { PostaPocetnaComponent } from './posta-pocetna/posta-pocetna.component';


@NgModule({
  declarations: [
    PostaPocetnaComponent
  ],
  imports: [
    CommonModule,
    PostaRoutingModule
  ]
})
export class PostaModule { }
