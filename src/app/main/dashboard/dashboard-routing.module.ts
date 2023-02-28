import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './components/admin/admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { RolesRecursosRoutingModule } from './components/admin/components/roles-recursos/roles-recursos-routing.module';
import { ClasificadosComponent } from './components/clasificados/clasificados.component';
import { EncuestasComponent } from './components/encuestas/encuestas.component';
import { GeneralComponent } from './components/escritorio/general/general.component';
import { PersonaComponent } from './components/persona/persona.component';
import { PqrsComponent } from './components/pqrs/pqrs.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      //universidad
      {
        path: 'aspecto_general',
        component: GeneralComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
        loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
        // loadChildren:  ()=> import('./dashboard.module').then( m => m.DashboardModule)
      },
      {
        path: 'persona',
        component: PersonaComponent,
        loadChildren: () => import('./components/persona/persona.module').then(m => m.PersonaModule)
      },
      {
        path: 'encuestas',
        component: EncuestasComponent,
        loadChildren: () => import('./components/encuestas/encuestas.module').then(m => m.EncuestasModule)
      },
      {
        path: 'pqrs',
        component: PqrsComponent,
        loadChildren: () => import('./components/pqrs/pqrs.module').then(m => m.PqrsModule)
      },
      {
        path: 'clasificados',
        component: ClasificadosComponent,
        loadChildren: () => import('./components/clasificados/clasificados.module').then(m => m.ClasificadosModule)
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, AdminRoutingModule, RolesRecursosRoutingModule]
})
export class DashboardRoutingModule { }
