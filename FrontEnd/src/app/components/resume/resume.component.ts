import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private datos:PortfolioService) { }
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
    this.datos.obtenerDatosCursos().subscribe(data => {
      this.Cursos = data;
      this.cursosCargados = 1;
    });
    this.datos.obtenerDatosEducacion().subscribe(data => {
      this.Educacion = data;
      this.educacionCargado = 1;
    });
    this.datos.obtenerDatosExpProf().subscribe(data => {
      this.Experiencia = data;
      this.experienciaCargado = 1;
    });
  }
}
