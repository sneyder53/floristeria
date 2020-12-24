import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgenTarjetaComponent } from './imgen-tarjeta.component';

describe('ImgenTarjetaComponent', () => {
  let component: ImgenTarjetaComponent;
  let fixture: ComponentFixture<ImgenTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgenTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgenTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
