import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Motivo } from '../../model/motivo';
import { MotivoService } from '../../services/motivo.service';

@Component({
  selector: 'app-motivo',
  templateUrl: './motivo.component.html',
  styleUrls: ['./motivo.component.css'],
  providers: [MotivoService]
})
export class MotivoComponent implements OnInit {
	public title = "Configuracion de Motivo";
	public motivo;
	public motivo2;
	public status;
	public motivos;
	public errorMessage;
	public status_get_motivo;
	public visible = null;

  	constructor(private _MotivoService : MotivoService,
        		private _route: ActivatedRoute,
        		private _router: Router) { }

  	ngOnInit() {
  		this.motivo = new Motivo(1,"","");
  		this.motivo2 = new Motivo(1,"","");
  		this.listarMotivo();
  	}

  	listarMotivo(){
  		this._route.params.subscribe(params=>{
      
      		this._MotivoService.listarMotivos().subscribe(
          		response =>{
            		this.status = response['status'];
            		if (this.status != "success") {
              			this.status = "error";
            		}else{
              			this.motivos = response['data'];
               			console.log(this.motivo);
           	 		}
          		},
          		error =>{
            		this.errorMessage = <any>error;
            		if (this.errorMessage != null) {
              			console.log(this.errorMessage);
              			alert("Error en la peticion");
            		}
          		}
        		);
    	});
  	}

  	crearMotivo(){
  		let motivo = this.motivo;
        this._MotivoService.create(motivo).subscribe(
        	response =>{
          		this.status = response['status'];
          		console.log(motivo);
          		if (this.status != 'success') {
            		this.status = "error";
          		}else{
            		this.motivo = response['msg'];
            		console.log(this.motivo);
          		}
        	},
        	error =>{
          		this.errorMessage = <any>error;
          		if (this.errorMessage != null) {
            		console.log(this.errorMessage);
            		alert("Error en la peticion");
          		}
        	}
        );
      	window.location.href = "/motivo";
      	console.log("motivo creado");
  	}

  	visibleform(v, id){
  		this.visible = v;
  		this._route.params.subscribe(
        	params =>{
        		this._MotivoService.getMotivo(id).subscribe(
          		response => {
            		this.motivo2 = response['data'];
            		console.log(this.motivo2);
            		this.status_get_motivo = response['status'];

            		if (this.status_get_motivo != 'success') {
              			this._router.navigate(["/motivo"]);
            		}
          		},
          		error => {
            		this.errorMessage = <any>error;
          			if (this.errorMessage != null) {
            			console.log(this.errorMessage);
            			alert("Error en la peticion");
          			}
          		}
        	);
      		}
      	);
  	}

  	editarMotivo(){
  		let motivo = this.motivo2;
  		this._route.params.subscribe(params =>{
        	this._MotivoService.editar(motivo, motivo.idmotivo).subscribe(
          		response =>{
            		this.status = response['status'];
            		this._router.navigate(["/motivo"]);
            		this.visible = null;
            		if (this.status != 'success') {
              			this.status = "error";
            		}
          		},
          		error =>{
            		this.errorMessage = <any>error;
            		if (this.errorMessage != null) {
              			console.log(this.errorMessage);
              			alert("Error en la peticion");
            		}
          		}
        	);
      	});
    	window.location.href = "/motivo";
  	}

  	deletemotivo(id){
  		this._MotivoService.remove(id).subscribe(
        	response => {
          		this.status = response['status'];
          		this._router.navigate(["/motivo"]);
          		if (this.status != 'success') {
            		this.status = "error";
          		}
      		},
      		error => {
        		this.errorMessage = <any>error;
          		if (this.errorMessage != null) {
            		console.log(this.errorMessage);
            		alert("Error en la peticion");
          	}
      	}
      	);
      	window.location.href = "/motivo";
  	}

}
