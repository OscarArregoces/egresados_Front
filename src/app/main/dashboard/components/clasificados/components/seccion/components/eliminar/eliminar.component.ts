import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ClasificadosService } from 'src/app/core/services/dashboard/clasificados.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  API_URI = environment.API_URI;
  public secciones: any[] = [];
  public token: any;

  constructor(
    private clasificadosService: ClasificadosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.traerSecciones();
  }


  traerSecciones() {
    this.secciones = [];
    try {
      this.clasificadosService.getAll(`${this.API_URI}/advertisements/seccion/`, this.token).subscribe(respuesta => this.secciones = respuesta.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  confirm(event: Event | any, id:any) {
    this.confirmationService.confirm({
      target: event.target,
      message: '¿Seguro que desea eliminar esta seccion?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        try {
          this.clasificadosService.delete(`${this.API_URI}/advertisements/seccion/delete/${id}/`, this.token).subscribe(respuesta => {
            this.traerSecciones();
            return this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Eliminado correctamente !!!' });
          });
        } catch (error) {
          console.log(error)
          return this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema en la consulta' });
        }
      },
      reject: () => {
        //reject action
      }
    });
  }

}