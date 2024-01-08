import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostaListaComponent } from './posta-lista.component';

describe('PostaListaComponent', () => {
  let component: PostaListaComponent;
  let fixture: ComponentFixture<PostaListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostaListaComponent]
    });
    fixture = TestBed.createComponent(PostaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
