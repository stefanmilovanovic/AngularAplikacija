import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NalogService } from '../nalog.service';
import { ObavestenjaService } from 'src/app/obavestenja/obavestenja.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css'],
})
export class PrijavaComponent {
  ucitavanje = false;
  constructor(
    private nalogService: NalogService,
    private obavestenjaService: ObavestenjaService,
    private router:Router
  ) {}

  prijavaForma = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.pattern(/^[0-9A-z]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  onSubmit() {
    if (this.prijavaForma.invalid) {
      this.prijavaForma.controls.username.markAsDirty();
      this.prijavaForma.controls.password.markAsDirty();
      return;
    }
    this.ucitavanje = true;
    this.nalogService.prijava(this.prijavaForma.getRawValue()).subscribe({
      next: (response) => {
        this.ucitavanje = false;
        this.obavestenjaService.dodajUspeh('Uspešna prijava na nalog');
        this.router.navigate(["posta"]);
      },
      error: (err) => {
        this.ucitavanje = false;
        if(err.status === 422){
          this.prijavaForma.setErrors({netacniPodaci:true})
        }
        this.obavestenjaService.dodajGresku('Nešto je pošlo naopako');
      },
    });
  }
}
