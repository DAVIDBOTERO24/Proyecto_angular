import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import{CrudService} from 'src/app/Servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  formIngresoEstudiante:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
  ) {
    this.formIngresoEstudiante = this.formulario.group({
      numeroDocumento:[''],
      correo:['']
    })
   }

  ngOnInit(): void {
  }

  inicioSesion():any{
    this.crudService.InicioSesionEstudiante(this.formIngresoEstudiante.value).subscribe(res=>{
      if('success' in res){
        window.alert("Las credenciales ingresadas no son correctas");
      }
      else{
        this.ruteador.navigateByUrl('/estudiante/consultar/'+res[0].idEstudiante); 
      }    
    });
  }
}
