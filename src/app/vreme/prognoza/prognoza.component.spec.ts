import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrognozaComponent } from './prognoza.component';

describe('PrognozaComponent', () => {
  let component: PrognozaComponent;
  let fixture: ComponentFixture<PrognozaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrognozaComponent]
    });
    fixture = TestBed.createComponent(PrognozaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
