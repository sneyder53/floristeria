import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './GLOBAL';


@Injectable()

export class DedicatoriaService{

	//public url = "http://localhost:8000/floristeria1/backend/web";
	public url;

	constructor(
		private _http: HttpClient){
      this.url = GLOBAL.url;
    }


	create(dedicatoria){
		let json = JSON.stringify(dedicatoria);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.post(this.url+"/dedicatoria/new", params,{headers: headers});
	}


	listarDedicatoria(){
		return this._http.get(this.url+"/dedicatoria/listar");
	}

	getDedicatoria(id){
		return this._http.get(this.url+"/dedicatoria/"+id);
	}

	editar(dedicatoria, id){
		let json = JSON.stringify(dedicatoria);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.post(this.url+"/dedicatoria/editar/"+id, params,{headers: headers});
	}

	remove(id){
		return this._http.get(this.url+"/dedicatoria/remove/"+id);
	}

	listarDedicatoriaPorMotivo(id){
		return this._http.get(this.url+"/dedicatoria/por-motivo/"+id);
	}

}
