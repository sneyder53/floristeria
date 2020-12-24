import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPedidoComponent } from './search-pedido.component';

describe('SearchPedidoComponent', () => {
  let component: SearchPedidoComponent;
  let fixture: ComponentFixture<SearchPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
