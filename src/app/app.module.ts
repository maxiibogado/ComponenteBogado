import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProductoComponent } from './producto/producto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProductoComponent,
    NavbarComponent,
    ListadoAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
