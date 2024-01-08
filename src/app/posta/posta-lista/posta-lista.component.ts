import { Component, OnInit } from '@angular/core';
import { PostaService, SvaPostaOdgovor } from '../posta.service';

@Component({
  selector: 'app-posta-lista',
  templateUrl: './posta-lista.component.html',
  styleUrls: ['./posta-lista.component.css']
})
export class PostaListaComponent implements OnInit{
  constructor(private postaService:PostaService){}
  posta:SvaPostaOdgovor[] = [];
  ngOnInit(): void {
    this.postaService.svaPosta().subscribe((response)=>{
      this.posta = response;
    })
  }
}
