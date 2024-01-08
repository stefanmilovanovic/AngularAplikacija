import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorukaNePostojiComponent } from './poruka-ne-postoji.component';

describe('PorukaNePostojiComponent', () => {
  let component: PorukaNePostojiComponent;
  let fixture: ComponentFixture<PorukaNePostojiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorukaNePostojiComponent]
    });
    fixture = TestBed.createComponent(PorukaNePostojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
