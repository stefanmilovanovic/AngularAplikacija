import { Component, Input } from '@angular/core';
import { Poruka } from '../poruka';
import { PostaService } from '../posta.service';
import { ObavestenjaService } from 'src/app/obavestenja/obavestenja.service';

@Component({
  selector: 'app-posta-odgovor',
  templateUrl: './posta-odgovor.component.html',
  styleUrls: ['./posta-odgovor.component.css']
})
export class PostaOdgovorComponent {

  @Input() poruka: Poruka = {
    id: "",
    from: "",
    to: "",
    subject: "",
    text: "",
    html: ""
  }

  constructor(private postaService:PostaService, private obavestenjaService:ObavestenjaService){}

  showModal = false;
  ShowModal() {
    this.showModal = !this.showModal;
  }

  ngOnChanges() { // MNOGO DOBRA STVAR
    this.poruka = {
      ...this.poruka,
      to: this.poruka.from,
      from: this.poruka.to,
      subject:"Odgovor: "+this.poruka.subject,
      text:
      `

      >> Odgovor na: 
      ${this.poruka.text}
      `
    }
  }

  onSubmit(e: any) {
    let newEmail = {
      to: e.to,
      subject: e.subject,
      text: e.content
    } 
    this.postaService.posaljiPoruku(newEmail).subscribe((response)=>{
      this.obavestenjaService.dodajUspeh("Poruka uspešno poslata");
      this.showModal = false;
    });
   }
}
