import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MotivoService } from '../../services/motivo.service';
import { ImagenTarjeta } from '../../model/imgenTarjeta';
import { ImagenTarjetaService } from '../../services/imagenTarjeta.service';
import { GLOBAL } from '../../services/GLOBAL';

@Component({
  selector: 'app-imgen-tarjeta',
  templateUrl: './imgen-tarjeta.component.html',
  styleUrls: ['./imgen-tarjeta.component.css'],
  providers: [MotivoService, ImagenTarjetaService]
})
export class ImgenTarjetaComponent implements OnInit {
	public visible = null;
  public title = "Configuracion Imagenes de Tarjetas";
	public motivos;
	public status;
	public errorMessage;
	public imagenes;
	public imagenTarjeta;
	public imagenTarjeta2;
  public filesToUpload: Array<File>;
  public resultUpload;
  public status_get_imagenTarjeta;
  public url;
  	constructor(private _MotivoService : MotivoService,
            private _imagenTarjetaService : ImagenTarjetaService,
        		private _route: ActivatedRoute,
        		private _router: Router) {
              this.url = GLOBAL.url;
             }

  	ngOnInit() {
  		this.imagenTarjeta = new ImagenTarjeta(1,"","","","");
  		this.imagenTarjeta2 = new ImagenTarjeta(1,"","","","");
  		this.listarMotivo();
      this.listarImagenes();
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

  	listarImagenes(){
  		this._route.params.subscribe(params=>{
       		this._imagenTarjetaService.listarImagenes().subscribe(
          		response =>{
            		this.status = response['status'];
            		if (this.status != "success") {
              			this.status = "error";
            		}else{
              			this.imagenes = response['data'];
               			console.log(this.imagenes);
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

  	fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
      console.log(this.filesToUpload);
  	}

    crearImagenTarjeta(){
      this._imagenTarjetaService.makefilerequest(this.imagenTarjeta, this.filesToUpload).then(
        (result) => {
          this.resultUpload = result;
          console.log(this.resultUpload);
        },
        (error) => {
          console.log(error);
        }
        );
      setTimeout("location.href='/imagen/tarjeta'", 5000);
      //window.location.href = "/imagen/tarjeta";
    }

    visibleform(v, id){
      this.visible = v;
      this._route.params.subscribe(
          params =>{
            this._imagenTarjetaService.getImgenTarjeta(id).subscribe(
              response => {
                this.imagenTarjeta2 = response['data'];
                console.log(this.imagenTarjeta2);
                this.status_get_imagenTarjeta = response['status'];

                if (this.status_get_imagenTarjeta != 'success') {
                    this._router.navigate(["/imagen/tarjeta"]);
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

    deleteImagenTarjeta(id){
      this._imagenTarjetaService.remove(id).subscribe(
          response => {
              this.status = response['status'];
              this._router.navigate(["/imagen/tarjeta"]);
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
        window.location.href = "/imagen/tarjeta";
    }

    editarImagenTarjeta(){

      let imagenTarjeta = new ImagenTarjeta(this.imagenTarjeta2.idimagenTarjeta,this.imagenTarjeta2.nombre,"",this.imagenTarjeta2.descripcion,this.imagenTarjeta2.motivomotivo.idmotivo);
      this._imagenTarjetaService.updatefilerequest(imagenTarjeta, this.filesToUpload, this.imagenTarjeta2.idimagenTarjeta).then(
        (result) => {
          this.resultUpload = result;
          console.log(this.resultUpload);
        },
        (error) => {
          console.log(error);
        }
        );
      window.location.href = "/imagen/tarjeta";
    }

}
