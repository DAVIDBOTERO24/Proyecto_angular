import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import{CrudService} from 'src/app/Servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  formularioadmin:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router,
    ) {

    this.formularioadmin = this.formulario.group({
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
    })

   }

  ngOnInit(): void {
  }
  
  enviardatos():any{
    this.crudService.Registrar(this.formularioadmin.value).subscribe(res=>{
      this.ruteador.navigateByUrl('/admin/consultar');
    });
  }

}
