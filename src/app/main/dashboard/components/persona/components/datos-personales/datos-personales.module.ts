import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosPersonalesRoutingModule } from './datos-personales-routing.module';
import { DatosPersonalesComponent } from './datos-personales.component';
import { VerComponent } from './components/ver/ver.component';
import { CrearComponent } from './components/crear/crear.component';
import { EditarComponent } from './components/editar/editar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';


@NgModule({
  declarations: [
    DatosPersonalesComponent,
    VerComponent,
    CrearComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    DatosPersonalesRoutingModule
  ]
})
export class DatosPersonalesModule { }
