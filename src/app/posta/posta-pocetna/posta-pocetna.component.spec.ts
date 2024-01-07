import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostaPocetnaComponent } from './posta-pocetna.component';

describe('PostaPocetnaComponent', () => {
  let component: PostaPocetnaComponent;
  let fixture: ComponentFixture<PostaPocetnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostaPocetnaComponent]
    });
    fixture = TestBed.createComponent(PostaPocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
