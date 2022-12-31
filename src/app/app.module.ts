import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { MenuComponent } from './components/compartidos/menu/menu.component';
import { MenuAdministradorComponent } from './components/compartidos/menu-administrador/menu-administrador.component';
import { RegistrarComponent } from './components/vistaAdministrador/registrar/registrar.component';
import { ModificarComponent } from './components/vistaAdministrador/modificar/modificar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ActualizarComponent } from './components/vistaAdministrador/actualizar/actualizar.component';
import { ConsultarComponent } from './components/vistaEstudiante/consultar/consultar.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    IngresarComponent,
    RegistrarseComponent,
    CreditosComponent,
    MenuComponent,
    MenuAdministradorComponent,
    RegistrarComponent,
    ModificarComponent,
    ActualizarComponent,
    ConsultarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }