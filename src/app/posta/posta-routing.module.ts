import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostaPocetnaComponent } from './posta-pocetna/posta-pocetna.component';

const routes: Routes = [{
  path:"",
  component:PostaPocetnaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostaRoutingModule { }
