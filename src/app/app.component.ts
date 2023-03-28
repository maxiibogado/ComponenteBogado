import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentesBogado';

  tituloPrincipal = 'Este titulo viene del appComponent'

  test(){
    console.log("El mes ingresado es: ");   
  }

  mostrarCantidad(event:number){
    console.log(event);
    
    alert(event);
  }

}
