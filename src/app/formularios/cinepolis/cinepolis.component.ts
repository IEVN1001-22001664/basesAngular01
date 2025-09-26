import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre:string="";
  cCompradores:number=0;
  cardCineco:string="";
  cBoletos:number=0;
  vPagar:number=0;

procesar(): void {
  let limite = this.cCompradores * 7;

  if (this.cBoletos > limite) {
    alert(`No puedes comprar más de ${limite} boletos en total (${this.cCompradores} compradores MAX ${limite} boletos).`);
    this.cBoletos = limite; 
  } else {
    if (this.cBoletos > 5){
      this.vPagar = (this.cBoletos * 12) * 0.85;
    } else if (this.cBoletos >= 3){
      this.vPagar = (this.cBoletos * 12) * 0.9;
    } else {
      this.vPagar = this.cBoletos * 12;
    }

    if (this.cardCineco === 'si'){
      this.vPagar = this.vPagar * 0.9;
    }
  }
}



  salir():void{
  this.nombre = "";
  this.cCompradores = 0;
  this.cardCineco = "";
  this.cBoletos = 0;
  this.vPagar = 0;
  alert("Saliendo de la Página, Vuelva pronto");
  }
}
