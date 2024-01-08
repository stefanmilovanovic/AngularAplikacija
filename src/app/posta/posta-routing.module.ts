import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostaPocetnaComponent } from './posta-pocetna/posta-pocetna.component';
import { PostaPrikazComponent } from './posta-prikaz/posta-prikaz.component';
import { PostaPrikazPocetnaComponent } from './posta-prikaz-pocetna/posta-prikaz-pocetna.component';
import { PostaResolverService } from './posta-resolver.service';
import { PorukaNePostojiComponent } from './poruka-ne-postoji/poruka-ne-postoji.component';

const routes: Routes = [{
  path:"",
  component:PostaPocetnaComponent,
  children:[
    {
      path:"",
      component:PostaPrikazPocetnaComponent
    },
    {
      path:"nePostoji",
      component:PorukaNePostojiComponent
    }
    ,
    {
      path:":id",
      component: PostaPrikazComponent,
      resolve:{
        poruka:PostaResolverService
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostaRoutingModule { }
