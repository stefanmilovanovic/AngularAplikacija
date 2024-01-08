import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostaRoutingModule } from './posta-routing.module';
import { PostaPocetnaComponent } from './posta-pocetna/posta-pocetna.component';
import { PostaListaComponent } from './posta-lista/posta-lista.component';
import { PostaPrikazComponent } from './posta-prikaz/posta-prikaz.component';
import { PostaPrikazPocetnaComponent } from './posta-prikaz-pocetna/posta-prikaz-pocetna.component';
import { PorukaNePostojiComponent } from './poruka-ne-postoji/poruka-ne-postoji.component';


@NgModule({
  declarations: [
    PostaPocetnaComponent,
    PostaListaComponent,
    PostaPrikazComponent,
    PostaPrikazPocetnaComponent,
    PorukaNePostojiComponent
  ],
  imports: [
    CommonModule,
    PostaRoutingModule
  ]
})
export class PostaModule { }
