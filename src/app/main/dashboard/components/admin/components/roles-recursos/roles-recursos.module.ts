import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRecursosRoutingModule } from './roles-recursos-routing.module';
import { RolesRecursosComponent } from './roles-recursos.component';


//PRIME NG TABLE
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {KeyFilterModule} from 'primeng/keyfilter';

import {AutoCompleteModule} from 'primeng/autocomplete';
import {ToastModule} from 'primeng/toast';
import { CrearComponent } from './components/crear/crear.component';
import { VerComponent } from './components/ver/ver.component';


@NgModule({
  declarations: [
    CrearComponent,
    VerComponent
  ],
  imports: [
    CommonModule,
    RolesRecursosRoutingModule,


    
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    KeyFilterModule,
    AutoCompleteModule,
    ToastModule 
  ]
})
export class RolesRecursosModule { }
