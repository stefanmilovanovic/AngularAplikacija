import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pocetna2Component } from './pocetna2.component';

describe('Pocetna2Component', () => {
  let component: Pocetna2Component;
  let fixture: ComponentFixture<Pocetna2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pocetna2Component]
    });
    fixture = TestBed.createComponent(Pocetna2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
