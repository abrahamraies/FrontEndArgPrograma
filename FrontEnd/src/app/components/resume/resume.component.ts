import { EducacionService } from './../../services/educacion.service';
import { CursosService } from './../../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ExplabService } from 'src/app/services/explab.service';
import { TokenService } from 'src/app/services/token.service';
import { PersonaService } from 'src/app/services/persona.service';
import { persona } from 'src/app/models/persona';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private s_curso:CursosService,private s_educacion:EducacionService,private s_explab:ExplabService,private tokenService:TokenService,private s_persona:PersonaService) { }
  Cursos:any;
  Educacion:any;
  Experiencia:any;
  cursosCargados:number = 0;
  educacionCargado:number = 0;
  experienciaCargado:number = 0;
  persona!:persona;
  portfolioCargado:number = 0;

  isLogged = false;

  ngOnInit(): void {
    this.obtenerDatosResumen();

    if(this.tokenService.getToken()){
      if(this.tokenService.getAuthorities().toString().includes("ROLE_ADMIN"))
        this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  private obtenerDatosResumen(){
    this.s_persona.obtenerDatosPersona().subscribe(data => {
      this.persona = data[0];
      this.portfolioCargado = 1;
    });

    this.s_curso.obtenerDatosCursos().subscribe(data => {
      this.Cursos = data;
      this.cursosCargados = 1;
    });
    this.s_educacion.obtenerDatosEducacion().subscribe(data => {
      this.Educacion = data;
      this.educacionCargado = 1;
    });
    this.s_explab.obtenerDatosExperiencia().subscribe(data => {
      this.Experiencia = data;
      this.experienciaCargado = 1;
    });
  }
}
