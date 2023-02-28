import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RolesRecursosRoutingModule } from './components/roles-recursos/roles-recursos-routing.module';
import { RolesRecursosComponent } from './components/roles-recursos/roles-recursos.component';
import { RolesComponent } from './components/roles/roles.component';

const routes: Routes = [
  {
    path: 'roles-recursos',
    component: RolesRecursosComponent,
    loadChildren: ()=>import('./components/roles-recursos/roles-recursos.module').then(m => m.RolesRecursosModule)
  },
  {
    path: 'roles',
    component: RolesComponent,
    loadChildren: ()=>import('./components/roles/roles.module').then(m => m.RolesModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


