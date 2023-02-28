import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/core/services/dashboard/persona.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  API_URI = environment.API_URI;
  public token: any;

  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    this.getAllPersonas();


  }

  getAllPersonas() {
    this.personaService.getAllPersonas(`${this.API_URI}/persons`,this.token).subscribe( respuesta => {
      console.log(respuesta)
    })
  }

}
