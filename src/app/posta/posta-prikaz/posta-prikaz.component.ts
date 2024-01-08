import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poruka } from '../poruka';

@Component({
  selector: 'app-posta-prikaz',
  templateUrl: './posta-prikaz.component.html',
  styleUrls: ['./posta-prikaz.component.css']
})
export class PostaPrikazComponent implements OnInit{
  constructor(private route:ActivatedRoute){}
  poruka:Poruka | any;

  ngOnInit(): void {
    this.route.data.subscribe(({poruka})=>{
      this.poruka = poruka;
    })
  }


}
