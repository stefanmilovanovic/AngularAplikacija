import { Injectable } from '@angular/core';
import { PostaService } from './posta.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostaResolverService {

  constructor(private postaService:PostaService, private router:Router) { }

  resolve(route:ActivatedRouteSnapshot){
    let {id} = route.params;
    return this.postaService.vratiPorukuPoId(id).pipe(
      catchError((err)=>{
        this.router.navigate(["posta/nePostoji"]);
        return EMPTY;
      })
    );
  }
}
