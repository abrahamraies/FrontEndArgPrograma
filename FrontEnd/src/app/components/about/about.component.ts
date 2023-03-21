import { TokenService } from './../../services/token.service';
import { PersonaService } from './../../services/persona.service';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/models/persona';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private datos:PersonaService, private tokenService:TokenService) { }
  persona!:persona;
  portfolioCargado:number = 0;

  isLogged = false;

  ngOnInit(): void {
    this.obtenerDatosPersona();

    if(this.tokenService.getToken()){
      if(this.tokenService.getAuthorities().toString().includes("ROLE_ADMIN"))
        this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  private obtenerDatosPersona(){
    this.datos.obtenerDatosPersona().subscribe(data => {
      this.persona = data[0];
      this.portfolioCargado = 1;
    });
  }

}
