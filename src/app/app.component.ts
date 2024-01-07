import { Component, OnInit } from '@angular/core';
import { NalogService } from './nalog/nalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  prijavljen = false;
  constructor(private nalogService:NalogService){}

  ngOnInit(): void {
    this.nalogService.$prijavljen.subscribe((response)=>{
      this.prijavljen = response;
    })
    this.nalogService.proveraPrijavljen().subscribe((value)=>{console.log(value)});
  }

  title = 'app';
}
