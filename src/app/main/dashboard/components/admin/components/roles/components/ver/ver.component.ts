import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/services/dashboard/admin.service';
import { environment } from 'src/environments/environment';

import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {
  API_URI = environment.API_URI;
  public roles: any[] = [];
  public verificarRoles: any[] = [];
  public token: string | null = '';
  public display: boolean = false;
  public displayEditar: boolean = false;
  public idSelected: number | null = null;

  public banderaBtnEdit: boolean = true;
  blockSpecial: RegExp = /^[^<>*!@.,]+$/

  public form = this.fb.group({
    name: ['', Validators.required]
  })

  public name: string = '';

  constructor(private adminService: AdminService, private fb: FormBuilder, private messageService: MessageService, private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.traerDatos()

  }

  traerDatos() {
    this.roles = [];
    this.verificarRoles = [];

    this.adminService.getAllRoles(`${this.API_URI}/roles`, this.token).subscribe(response => {
      this.roles = response.data;
      response.data.map((rol: any) => this.verificarRoles.push(rol.name.toLowerCase()))
    })
  }


  submit() {
    if (this.verificarRoles.includes(this.form.value.name.toLowerCase())) {
      return this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Este rol ya existe' });
    }


    try {
      this.adminService.createRol(`${this.API_URI}/roles/create/`, this.form.value, this.token).subscribe(response => {
        this.roles.push({ id: response.data.id, name: response.data.name })
        this.traerDatos();
        this.showDialog()
        this.form.reset();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Rol guardado' });

      })
    } catch (error: any) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${error.errors.error}` });
      console.log(error)
    }
  }

  showDialog() {
    this.display = !this.display;
  }

  showEditar(id: any) {
    this.idSelected = id;
    this.banderaBtnEdit = false;
    // this.roles.map(rol => {
    //   if (rol.id === id) this.form.value.name = rol.name;
    // })

    this.roles.map(rol => {
      if (rol.id === id) this.name = rol.name;
    })

    this.displayEditar = !this.displayEditar


    console.log(id)
    console.log(this.form.value.name)
  }

  editar() {
    try {
      this.adminService.editRol(`${this.API_URI}/roles/update/${this.idSelected}`, { name: this.name }, this.token).subscribe(response => console.log(response));
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Rol editado correctamente' });
      this.traerDatos();
      this.displayEditar = false;
      this.banderaBtnEdit = !this.banderaBtnEdit;
    } catch (error:any) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${error.errors.error}` });
    }
  }

  cancelar() {
    this.banderaBtnEdit = !this.banderaBtnEdit;
    this.displayEditar = false;
  }

  eliminar(id: any) {

    try {
      this.adminService.deleteRol(`${this.API_URI}/roles/delete/${id}`, this.token).subscribe( response =>  {
        if(response.ok){
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Rol eliminado' });
          this.traerDatos();
        }
      })
    } catch (error) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Problemas con la consulta.' });
    }
    console.log(id)
  }

  confirm(event: Event | any, id:any) {
    this.confirmationService.confirm({
        target: event.target,
        message: '¿Esta seguro que desea eliminar este rol?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.eliminar(id)
        },
        reject: () => {
            //reject action
        }
    });
}


}
