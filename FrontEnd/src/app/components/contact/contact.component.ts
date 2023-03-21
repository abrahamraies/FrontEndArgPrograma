import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(private datos:PersonaService) { }
  persona!:persona;
  DatosCargados:number = 0;
  ngOnInit(): void {
    this.datosContacto();
  }

  private datosContacto(){
    this.datos.obtenerDatosPersona().subscribe(data => {
      this.persona = data[0];
      this.DatosCargados = 1;
    });
  }

}
