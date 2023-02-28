import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { RolesRecursosComponent } from './components/roles-recursos/roles-recursos.component';

@NgModule({
  declarations: [
    // RolesRecursosComponent
  ],
  exports:[
    // RolesRecursosComponent,
  ]
  ,
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
