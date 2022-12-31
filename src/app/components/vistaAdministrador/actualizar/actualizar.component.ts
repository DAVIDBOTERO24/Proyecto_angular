import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import{CrudService} from 'src/app/Servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  formularioActualizar:FormGroup;
  id:any;

  constructor(
    private activateRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) {
    this.id= this.activateRoute.snapshot.paramMap.get('id');
    this.crudService.ObtenerEstudiante(this.id).subscribe(res=>{
      this.formularioActualizar.setValue({
        nombre:res[0]['nombre'],
        apellidos:res[0]['apellidos'],
        sexo:res[0]['sexo'],
        tipoDocumento:res[0]['tipoDocumento'],
        edad:res[0]['edad'],
        numeroDocumento:res[0]['numeroDocumento'],
        direccion:res[0]['direccion'],
        telefono:res[0]['telefono'],
        correo:res[0]['correo'],
        carrera:res[0]['carrera'],
        jornada:res[0]['jornada'],
      });
    });
    
    this.formularioActualizar=this.formulario.group({
      nombre:[''],
      apellidos:[''],
      sexo:[''],
      tipoDocumento:[''],
      edad:[''],
      numeroDocumento:[''],
      direccion:[''],
      telefono:[''],
      correo:[''],
      carrera:[''],
      jornada:['']
    });
   }

  ngOnInit(): void {
  }

  enviardatos():any{
    this.crudService.ActualizarEstudiante(this.id, this.formularioActualizar.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/admin/consultar');
    });
  }

}
