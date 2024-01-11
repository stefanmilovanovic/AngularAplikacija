import { Component } from '@angular/core';

@Component({
  selector: 'app-posta-nova-poruka',
  templateUrl: './posta-nova-poruka.component.html',
  styleUrls: ['./posta-nova-poruka.component.css']
})
export class PostaNovaPorukaComponent {

  showModal = false;
  ShowModal() {
    this.showModal = !this.showModal;
  }
}
