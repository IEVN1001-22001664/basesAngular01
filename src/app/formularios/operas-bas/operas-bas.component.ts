import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1:string='';
  num2:string='';
  rbutton:string='';
  resultado: number=0;

  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }
  restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2);
  }
  multiplicar():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2);
  }
  dividir():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2);
  }

calcular():void{
  if(this.rbutton == 'suma' ){
    this.sumar()
  }
  if(this.rbutton == 'restar' ){
    this.restar()
  }
  if(this.rbutton == 'multiplicacion' ){
    this.multiplicar()
  }
  if(this.rbutton == 'division' ){
    this.dividir()
  }
}
}
