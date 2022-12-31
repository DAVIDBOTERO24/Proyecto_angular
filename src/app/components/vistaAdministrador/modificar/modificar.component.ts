import { Component, OnInit } from '@angular/core';

import{CrudService} from 'src/app/Servicio/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  formularioBuscar:FormGroup;
  estudiantes:any;
  student:any;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService
  ) { 
    this.formularioBuscar = this.formulario.group({ numeroDocumento:[''] });
    this.student = '';
  }

  ngOnInit(): void {
    this.crudService.MostrarEstudiantes().subscribe(res=>{
      this.estudiantes = res;
    });
  }

  borrarRegistro(id:any, icontrol:any){
    if (window.confirm("¿Desea eliminar el registro?")) {
      this.crudService.BorrarEstudiante(id).subscribe((res)=>{
        this.estudiantes.splice(icontrol, 1);
        this.student = '';
      }); 
    }
  }

  borrarRegistro2(id:any){
    if (window.confirm("¿Desea eliminar el registro?")) {
      this.crudService.BorrarEstudiante(id).subscribe((res)=>{
        window.location.reload();
      });
    }
  }

  buscarRegistro(){
    this.crudService.BuscarEstudiante(this.formularioBuscar.value.numeroDocumento).subscribe(res=>{
      const input: any = document.getElementById('buscar');
      const buscador: any = document.getElementById('buscador');
      if('success' in res){
        input.value = '';
        buscador.style.display = 'none';
      } else {
        this.student = res[0];
        buscador.style.display = 'block';
        input.value = '';
      } 
    });
  }

  ocultarBusqueda():void{
    const buscador: any = document.getElementById('buscador');
    buscador.style.display = 'none';
  }
}
