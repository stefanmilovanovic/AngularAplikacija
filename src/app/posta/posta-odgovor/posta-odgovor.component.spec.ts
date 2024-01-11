import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostaOdgovorComponent } from './posta-odgovor.component';

describe('PostaOdgovorComponent', () => {
  let component: PostaOdgovorComponent;
  let fixture: ComponentFixture<PostaOdgovorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostaOdgovorComponent]
    });
    fixture = TestBed.createComponent(PostaOdgovorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
