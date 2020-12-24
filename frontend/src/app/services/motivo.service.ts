import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './GLOBAL';


@Injectable()

export class MotivoService{

	//public url = "http://localhost:8000/floristeria1/backend/web";
	public url;

	constructor(
		private _http: HttpClient){
      this.url = GLOBAL.url;
    }


	create(motivo){
		let json = JSON.stringify(motivo);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.post(this.url+"/motivo/new", params,{headers: headers});
	}


	listarMotivos(){
		return this._http.get(this.url+"/motivo/listar");
	}

	getMotivo(id){
		return this._http.get(this.url+"/motivo/"+id);
	}

	editar(motivo, id){
		let json = JSON.stringify(motivo);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.post(this.url+"/motivo/editar/"+id, params,{headers: headers});
	}

	remove(id){
		return this._http.get(this.url+"/motivo/remove/"+id);
	}

}
