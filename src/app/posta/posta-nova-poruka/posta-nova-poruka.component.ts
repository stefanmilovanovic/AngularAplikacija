import { Component } from '@angular/core';
import { NalogService } from 'src/app/nalog/nalog.service';
import { PostaService } from '../posta.service';
import { Poruka } from '../poruka';
import { ObavestenjaService } from 'src/app/obavestenja/obavestenja.service';

@Component({
  selector: 'app-posta-nova-poruka',
  templateUrl: './posta-nova-poruka.component.html',
  styleUrls: ['./posta-nova-poruka.component.css'],
})
export class PostaNovaPorukaComponent {
  constructor(
    private nalogService: NalogService,
    private postaService: PostaService,
    private obavestenjaService:ObavestenjaService
  ) {}

  poruka: Poruka = {
    id: '',
    to: '',
    subject: '',
    html: '',
    text: '',
    from: this.nalogService.korisnickoIme + '@angular-email.com',
  };

  showModal = false;
  ShowModal() {
    this.showModal = !this.showModal;
  }

  onSubmit(e: any /* email:Email */) {
    let novaPoruka = {
      to: e.to,
      subject: e.subject,
      text: e.content,
    };
    this.postaService.posaljiPoruku(novaPoruka).subscribe(() => {
      this.obavestenjaService.dodajUspeh("Poruka uspešno poslata");
      this.showModal = false;
    });
  }
}
