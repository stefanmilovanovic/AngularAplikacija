import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostaPrikazComponent } from './posta-prikaz.component';

describe('PostaPrikazComponent', () => {
  let component: PostaPrikazComponent;
  let fixture: ComponentFixture<PostaPrikazComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostaPrikazComponent]
    });
    fixture = TestBed.createComponent(PostaPrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
