import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostaNovaPorukaComponent } from './posta-nova-poruka.component';

describe('PostaNovaPorukaComponent', () => {
  let component: PostaNovaPorukaComponent;
  let fixture: ComponentFixture<PostaNovaPorukaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostaNovaPorukaComponent]
    });
    fixture = TestBed.createComponent(PostaNovaPorukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
