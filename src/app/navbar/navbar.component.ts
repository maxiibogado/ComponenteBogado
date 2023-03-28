import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input('nombreFicticio') tituloPrincipal:string = "";

  @Output() mes = new EventEmitter<number>();
  @Output() año = new EventEmitter<Date>();
  @Output() cantidadHoverTitulo = new EventEmitter<number>();

  cantidad = 0; 

  mostrarAñoDelCursoEnPadre(fechaActual:Date){
    this.año.emit(fechaActual);
  }

  enviarMesActual(mes:number){
    this.mes.emit(mes);
  }

  // enviarCantidadHover(){
  //   this.cantidad = this.cantidad + 1;
  //   this.cantidadHoverTitulo.emit(this.cantidad);
  //   console.log(this.cantidad); 
  // }



}
