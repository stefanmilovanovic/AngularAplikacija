import { Component } from '@angular/core';
import {
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PotvrdaSifre } from '../validatori/potvrda-sifre';
import { ProveriIme } from '../validatori/proveri-ime';
import { NalogService } from '../nalog.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css'],
})
export class RegistracijaComponent {

  ucitavanje = false;

  constructor(
    private potvrdaSifre: PotvrdaSifre,
    private proveriIme: ProveriIme,
    private nalogService:NalogService
  ) {}

  registracijaForma = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          Validators.pattern(/^[0-9A-z]+$/),
        ],
        [this.proveriIme.validate as unknown as AsyncValidatorFn]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    {
      validators: [this.potvrdaSifre.validate],
    }
  );

  onSubmit() {
    if (this.registracijaForma.invalid) {
      this.registracijaForma.controls.username.markAsDirty();
      this.registracijaForma.controls.password.markAsDirty();
      this.registracijaForma.controls.passwordConfirmation.markAsDirty();
      return;
    }
    this.ucitavanje = true;
    console.log(this.registracijaForma.value);
    this.nalogService.registracija(this.registracijaForma.getRawValue()).subscribe((response)=>{
      console.log(response);
      this.ucitavanje = false;
    });
  }
}
