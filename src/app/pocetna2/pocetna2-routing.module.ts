import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pocetna2Component } from './pocetna2/pocetna2.component';

const routes: Routes = [{
  path:"",
  component:Pocetna2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pocetna2RoutingModule { }
