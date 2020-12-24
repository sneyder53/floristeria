import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Dedicatoria } from '../../model/dedicatoria';
import { MotivoService } from '../../services/motivo.service';
import { DedicatoriaService } from '../../services/dedicatoria.service';

@Component({
  selector: 'app-dedicatoria',
  templateUrl: './dedicatoria.component.html',
  styleUrls: ['./dedicatoria.component.css'],
  providers: [MotivoService, DedicatoriaService]
})
export class DedicatoriaComponent implements OnInit {

	public title = "Configuracion Dedicatorias";
	public dedicatorias;
	public dedicatoria;
	public dedicatoria2;
	public motivos;
	public status;
	public errorMessage;
	public visible = null;
	public status_get_dedicatoria;

  	constructor(private _MotivoService : MotivoService,
  				private _DedicatoriaService : DedicatoriaService,
        		private _route: ActivatedRoute,
        		private _router: Router) { }

  	ngOnInit() {
  		this.dedicatoria = new Dedicatoria(1,"","","");
  		this.dedicatoria2 = new Dedicatoria(1,"","","");
  		this.listarMotivo();
  		this.listarDedicatoria();
  	}

  	crearDedicatoria(){
  		let dedicatoria = this.dedicatoria;
        this._DedicatoriaService.create(dedicatoria).subscribe(
        	response =>{
          		this.status = response['status'];
          		console.log(dedicatoria);
          		if (this.status != 'success') {
            		this.status = "error";
          		}else{
            		this.dedicatoria = response['msg'];
            		console.log(this.dedicatoria);
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
      	window.location.href = "/dedicatoria";
      	console.log("dedicatoria creada");
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
               			console.log(this.motivos);
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

  	listarDedicatoria(){
  		this._route.params.subscribe(params=>{
      
      		this._DedicatoriaService.listarDedicatoria().subscribe(
          		response =>{
            		this.status = response['status'];
            		if (this.status != "success") {
              			this.status = "error";
            		}else{
              			this.dedicatorias = response['data'];
               			console.log(this.dedicatorias);
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

  	visibleform(v, id){
  		this.visible = v;
  		this._route.params.subscribe(
        	params =>{
        		this._DedicatoriaService.getDedicatoria(id).subscribe(
          		response => {
            		this.dedicatoria2 = response['data'];
            		console.log(this.dedicatoria2);
            		this.status_get_dedicatoria = response['status'];

            		if (this.status_get_dedicatoria != 'success') {
              			this._router.navigate(["/dedicatoria"]);
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

  	editarDedicatoria(){
  		let dedicatoria = new Dedicatoria(this.dedicatoria2.iddedicatoria,this.dedicatoria2.nombre, this.dedicatoria2.dedicatoria,this.dedicatoria2.motivomotivo.idmotivo);
  		this._route.params.subscribe(params =>{
        	this._DedicatoriaService.editar(dedicatoria, this.dedicatoria2.iddedicatoria).subscribe(
          		response =>{
            		this.status = response['status'];
            		this._router.navigate(["/dedicatoria"]);
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
    	window.location.href = "/dedicatoria";
  	}

  	deleteDedicatoria(id){
  		this._DedicatoriaService.remove(id).subscribe(
        	response => {
          		this.status = response['status'];
          		this._router.navigate(["/dedicatoria"]);
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
      	window.location.href = "/dedicatoria";
  	}

}
