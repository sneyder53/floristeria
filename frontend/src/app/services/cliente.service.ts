import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './GLOBAL';

@Injectable()

export class ClienteService{

	//public url = "http://localhost:8000/floristeria1/backend/web";
	public url;

	constructor(
		private _http: HttpClient){
      this.url = GLOBAL.url;
    }

	create(cliente){
		let json = JSON.stringify(cliente);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.post(this.url+"/cliente/new", params,{headers: headers});
	}

	listarClientes( page = null){
		if (page == null) {
			page = 1;
		}
		return this._http.get(this.url+"/cliente/listar?page="+page);
	}

	getCliente(id){
		return this._http.get(this.url+"/cliente/"+id);
	}

	editCliente(cliente, id){
		let json = JSON.stringify(cliente);
		let params = "json="+json;
		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.post(this.url+"/cliente/editar/"+id, params,{headers: headers});
	}

	listarClientespedido(){
		return this._http.get(this.url+"/pedido/clientes");
	}

	listarClienteSearch( page = null, search = null){
		if (page == null) {
			page = 1;
		}
		let http : any;
		if (search == null) {
			http = this._http.get(this.url+"/cliente/search/?page="+page);
		} else{
			http = this._http.get(this.url+"/cliente/search/"+search+"?page="+page);
		}
		return http;
	}

}
