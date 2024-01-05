import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNovostiComponent } from './lista-novosti.component';

describe('ListaNovostiComponent', () => {
  let component: ListaNovostiComponent;
  let fixture: ComponentFixture<ListaNovostiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaNovostiComponent]
    });
    fixture = TestBed.createComponent(ListaNovostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
