import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Admin} from './Admin';
import { Admin2 } from './Admin2'; 

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string='http://localhost/desarrolloWeb/angular/'
  constructor(private clienteHttp: HttpClient) { 
  }
  
  InicioSesionAdmin(datosAministrador:Admin2):Observable<any> {
    return this.clienteHttp.post(this.API+"?admin", datosAministrador);
  }

  InicioSesionEstudiante(datosEstudiante:Admin):Observable<any> {
    return this.clienteHttp.post(this.API+"?buscar2", datosEstudiante);
  }

  Registrar(datosEstudiante:Admin):Observable<any> {
    return this.clienteHttp.post(this.API+"?insertar=1", datosEstudiante);
  }

  MostrarEstudiantes(){
    return this.clienteHttp.get(this.API);
  }

  BorrarEstudiante(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }

  ObtenerEstudiante(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }

  ActualizarEstudiante(id:any, datosEstudiante:Admin):Observable<any> {
    return this.clienteHttp.post(this.API+"?actualizar="+id, datosEstudiante);
  }

  BuscarEstudiante(documento:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?buscar="+documento);
  }

}
