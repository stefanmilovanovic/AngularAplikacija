import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { VremeModule } from './vreme/vreme.module';
import { ObavestenjaModule } from './obavestenja/obavestenja.module';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { NovostiModule } from './novosti/novosti.module';
import { NalogModule } from './nalog/nalog.module';
import { NalogHttpInterceptor } from './nalog/nalog-http-interceptor';
import { Pocetna2Module } from './pocetna2/pocetna2.module';

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
    NalogModule,
    Pocetna2Module
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NalogHttpInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
