import { Component } from '@angular/core';

@Component({
  selector: 'app-posta-odgovor',
  templateUrl: './posta-odgovor.component.html',
  styleUrls: ['./posta-odgovor.component.css']
})
export class PostaOdgovorComponent {
  showModal = false;
  ShowModal() {
    this.showModal = !this.showModal;
  }
}
