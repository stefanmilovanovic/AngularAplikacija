import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostaRoutingModule } from './posta-routing.module';
import { PostaPocetnaComponent } from './posta-pocetna/posta-pocetna.component';
import { PostaListaComponent } from './posta-lista/posta-lista.component';
import { PostaPrikazComponent } from './posta-prikaz/posta-prikaz.component';
import { PostaPrikazPocetnaComponent } from './posta-prikaz-pocetna/posta-prikaz-pocetna.component';
import { PorukaNePostojiComponent } from './poruka-ne-postoji/poruka-ne-postoji.component';
import { PostaFormaComponent } from './posta-forma/posta-forma.component';
import { PostaNovaPorukaComponent } from './posta-nova-poruka/posta-nova-poruka.component';
import { SharedModule } from '../shared/shared.module';
import { PostaOdgovorComponent } from './posta-odgovor/posta-odgovor.component';


@NgModule({
  declarations: [
    PostaPocetnaComponent,
    PostaListaComponent,
    PostaPrikazComponent,
    PostaPrikazPocetnaComponent,
    PorukaNePostojiComponent,
    PostaFormaComponent,
    PostaNovaPorukaComponent,
    PostaOdgovorComponent
  ],
  imports: [
    CommonModule,
    PostaRoutingModule,
    SharedModule
  ]
})
export class PostaModule { }
