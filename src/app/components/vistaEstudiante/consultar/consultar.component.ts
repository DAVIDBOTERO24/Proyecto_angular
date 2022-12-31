import { Component, OnInit } from '@angular/core';
import{CrudService} from 'src/app/Servicio/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  id:any;
  estudiante:any;

  constructor(
    private activateRoute:ActivatedRoute,
    private crudService:CrudService
  ) {
    
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.crudService.ObtenerEstudiante(this.id).subscribe(res=>{
      this.estudiante = res[0];
    });
  }

}
