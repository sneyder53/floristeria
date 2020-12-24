import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { SearchPedidoComponent } from './components/search-pedido/search-pedido.component';
import { SearchClienteComponent } from './components/search-cliente/search-cliente.component';
import { ClientePedidoComponent } from './components/cliente-pedido/cliente-pedido.component';
import { PorpagarComponent } from './components/porpagar/porpagar.component';
import { PorentregarComponent } from './components/porentregar/porentregar.component';
import { ReciboComponent } from './components/recibo/recibo.component';
import { MotivoComponent } from './components/motivo/motivo.component';
import { DedicatoriaComponent } from './components/dedicatoria/dedicatoria.component';
import { ImgenTarjetaComponent } from './components/imgen-tarjeta/imgen-tarjeta.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PedidoComponent,
    ClienteComponent,
    SearchPedidoComponent,
    SearchClienteComponent,
    ClientePedidoComponent,
    PorpagarComponent,
    PorentregarComponent,
    ReciboComponent,
    MotivoComponent,
    DedicatoriaComponent,
    ImgenTarjetaComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [ appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
