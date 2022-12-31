import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import{CrudService} from 'src/app/Servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  formIngresoAdmin:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
  ) {
      this.formIngresoAdmin = this.formulario.group({
      correo:[''],
      clave:[''],
    })
   }

  ngOnInit(): void {
  }

  inicioSesion():any{
    this.crudService.InicioSesionAdmin(this.formIngresoAdmin.value).subscribe(res=>{
      if('success' in res){
        window.alert("Las credenciales ingresadas no son correctas");
      }
      else{
        this.ruteador.navigateByUrl('/admin/ingresar'); 
      }    
    });
  }

}
