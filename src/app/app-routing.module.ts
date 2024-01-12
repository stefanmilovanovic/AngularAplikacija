import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { nalogGuard } from './nalog/nalog.guard';

const routes: Routes = [
  {
    path:"posta",
    canMatch:[nalogGuard],
    loadChildren:()=>import("./posta/posta.module").then(m=>m.PostaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
