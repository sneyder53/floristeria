export class Pedido{
	constructor (public idpedido: number,
		public para:string,
		public de:string,
		public direccionEntrega: string,
		public pago: boolean,
		public valor: number,
		public valorDomicilio: number,
		public fechaEntrega: Date,
		public fechaCobro: Date,
		public motivomotivo: string,
		public direccionCobro: string,
		public telefonoEntrega: string,
		public telefonoCobro: string,
		public clientecliente: string,
		public entregado: boolean,
		public hora: Date,
		public comentario: string
	){}
}