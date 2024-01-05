import { Component, OnInit } from '@angular/core';
import { VremeService } from '../vreme.service';

@Component({
  selector: 'app-prognoza',
  templateUrl: './prognoza.component.html',
  styleUrls: ['./prognoza.component.css'],
})
export class PrognozaComponent implements OnInit {
  constructor(private vremeService: VremeService) {}

  prognoza: { temperatura: number; vreme: string }[] = [];

  ngOnInit(): void {
    this.vremeService.preuzmiPrognozu().subscribe((response) => {
      this.prognoza = response;
    });
  }

  resetujPrognozu() {
    if (this.prognoza.length<1) {
      this.vremeService.preuzmiPrognozu().subscribe((response) => {
        this.prognoza = response;
      });
    }
  }
}
