import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostaPrikazPocetnaComponent } from './posta-prikaz-pocetna.component';

describe('PostaPrikazPocetnaComponent', () => {
  let component: PostaPrikazPocetnaComponent;
  let fixture: ComponentFixture<PostaPrikazPocetnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostaPrikazPocetnaComponent]
    });
    fixture = TestBed.createComponent(PostaPrikazPocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
