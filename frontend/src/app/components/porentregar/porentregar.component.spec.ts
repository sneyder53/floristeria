import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorentregarComponent } from './porentregar.component';

describe('PorentregarComponent', () => {
  let component: PorentregarComponent;
  let fixture: ComponentFixture<PorentregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorentregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorentregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
