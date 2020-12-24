import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const appRoutes : Routes = [
	{path: 'home', component: HomeComponent },
	{path: 'home/:page', component: HomeComponent },
	{path: 'pedido', component: PedidoComponent },
	{path: 'cliente', component: ClienteComponent },
	{path:'cliente/:page', component: ClienteComponent},
	{path:'pedido/search', component: SearchPedidoComponent},
	{path:'pedido/search/:search', component: SearchPedidoComponent},
	{path:'pedido/search/:search/:page', component: SearchPedidoComponent},
	{path:'cliente/search', component: SearchClienteComponent},
	{path:'cliente/search/:search', component: SearchClienteComponent},
	{path:'cliente/search/:search/:page', component: SearchClienteComponent},
	{path:'cliente/pedido/:id', component: ClientePedidoComponent},
	{path:'cliente/pedido/:id/:page', component: ClientePedidoComponent},
	{path:'pedido/porpagar', component: PorpagarComponent},
	{path:'pedido/porpagar/:page', component: PorpagarComponent},
	{path:'pedido/porentregar', component: PorentregarComponent},
	{path:'pedido/porentregar/:page', component: PorentregarComponent},
	{path:'pedido/recibo/:id', component: ReciboComponent},
	{path:'pedido/tarjeta/:id/:motivo', component: TarjetaComponent},
	{path:'motivo', component: MotivoComponent},
	{path:'dedicatoria', component: DedicatoriaComponent},
	{path:'imagen/tarjeta', component: ImgenTarjetaComponent},
	{path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);