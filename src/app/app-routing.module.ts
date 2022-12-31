import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditosComponent } from './components/creditos/creditos.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ModificarComponent } from './components/vistaAdministrador/modificar/modificar.component';
import { RegistrarComponent } from './components/vistaAdministrador/registrar/registrar.component';
import { ActualizarComponent } from './components/vistaAdministrador/actualizar/actualizar.component';
import { ConsultarComponent } from './components/vistaEstudiante/consultar/consultar.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'ingresar', component: IngresarComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'creditos', component: CreditosComponent},

  {path: 'admin/ingresar', component: RegistrarComponent},
  {path: 'admin/consultar', component: ModificarComponent},
  {path: 'admin/actualizar/:id', component: ActualizarComponent},
  {path: 'estudiante/consultar/:id', component: ConsultarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
