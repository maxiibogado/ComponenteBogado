import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent {

  readonly alumnos:[id:number,nombre:string,apellido:string,edad:number][]=
  [
    [1,'maximiliano','bogado',29],
    [2,'juan cruz', 'ceretti' , 29],
    [3,'robert','Torres',25],
    [4,'patricia ramona' , 'Morinigo',34],
    [5,'marita','ingolotti',32]
  ] 

  filtrarMenores(alumnos:[id:number,nombre:string,apellido:string,edad:number][]){
      let menores = alumnos.filter(alumno => alumno[3]< 30) 
      return menores;
  }

  
  






}
