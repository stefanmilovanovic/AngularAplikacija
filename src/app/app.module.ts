import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import { VremeModule } from './vreme/vreme.module';
import { ObavestenjaModule } from './obavestenja/obavestenja.module';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { NovostiModule } from './novosti/novosti.module';
import { NalogModule } from './nalog/nalog.module';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VremeModule,
    ObavestenjaModule,
    NovostiModule,
    NalogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
