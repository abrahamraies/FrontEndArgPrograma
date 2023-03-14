import { PersonaService } from './../../services/persona.service';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/models/persona';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private datos:PersonaService) { }
  persona!:persona;
  portfolioCargado:number = 0;

  ngOnInit(): void {
    this.obtenerDatosPersona();
  }

  private obtenerDatosPersona(){
    this.datos.obtenerDatosPersona().subscribe(data => {
      this.persona = data[0];
      this.portfolioCargado = 1;
    });
  }

}
