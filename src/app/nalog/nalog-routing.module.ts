import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { OdjavaComponent } from './odjava/odjava.component';

const routes: Routes = [
  {
    path: 'prijava',
    component: PrijavaComponent,
  },
  {
    path: 'registracija',
    component: RegistracijaComponent,
  },
  {
    path:"odjava",
    component:OdjavaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NalogRoutingModule {}
