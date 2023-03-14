import { EducacionService } from './../../services/educacion.service';
import { CursosService } from './../../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ExplabService } from 'src/app/services/explab.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private s_curso:CursosService,private s_educacion:EducacionService,private s_explab:ExplabService) { }
  Cursos:any;
  Educacion:any;
  Experiencia:any;
  cursosCargados:number = 0;
  educacionCargado:number = 0;
  experienciaCargado:number = 0;

  ngOnInit(): void {
    this.obtenerDatosResumen();
  }

  private obtenerDatosResumen(){
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
