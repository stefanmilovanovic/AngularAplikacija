import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Poruka } from '../poruka';

@Component({
  selector: 'app-posta-forma',
  templateUrl: './posta-forma.component.html',
  styleUrls: ['./posta-forma.component.css']
})
export class PostaFormaComponent {

  @Output() porukaSubmit = new EventEmitter();
  @Input() porukaPodaci:Poruka = {
    id: "",
    from: "",
    to: "",
    text: "",
    html: "",
    subject: ""
  };

  slanje = false;

  postaForma = new FormGroup({
    to: new FormControl("",[
      Validators.required,
      Validators.email
    ]),
    // Postoji mogucnost da disable-ujemo polje odavde
    from: new FormControl({value:"",disabled:true},[
      Validators.required
    ]),
    subject: new FormControl("",[
      Validators.required
    ]),
    content: new FormControl("",[
      Validators.required
    ])
  })

  constructor() { }

  ngOnInit(): void {
    this.postaForma.setValue({
      to: this.porukaPodaci.to,
      from: this.porukaPodaci.from,
      subject: this.porukaPodaci.subject,
      content: this.porukaPodaci.text
    })
  }

  onSubmit(){
    if(this.postaForma.invalid){
      this.postaForma.controls.to.markAsDirty();
      this.postaForma.controls.subject.markAsDirty();
      this.postaForma.controls.content.markAsDirty();
      return;
    }
    this.slanje = true;
    this.porukaSubmit.emit(this.postaForma.getRawValue())
  }

}
