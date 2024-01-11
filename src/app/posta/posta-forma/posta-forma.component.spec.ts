import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostaFormaComponent } from './posta-forma.component';

describe('PostaFormaComponent', () => {
  let component: PostaFormaComponent;
  let fixture: ComponentFixture<PostaFormaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostaFormaComponent]
    });
    fixture = TestBed.createComponent(PostaFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
