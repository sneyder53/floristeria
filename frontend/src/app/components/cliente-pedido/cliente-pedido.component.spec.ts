import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePedidoComponent } from './cliente-pedido.component';

describe('ClientePedidoComponent', () => {
  let component: ClientePedidoComponent;
  let fixture: ComponentFixture<ClientePedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientePedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
