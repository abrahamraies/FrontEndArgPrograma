import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-add-cursos',
  templateUrl: './add-cursos.component.html',
  styleUrls: ['./add-cursos.component.css']
})
export class AddCursosComponent implements OnInit {
  nombre: string = '';
  autor: string = '';
  fecha: string = '';
  constructor(private cursoService:CursosService,private router:Router) { }

  ngOnInit(): void {
  }

  onAdd(){
    const curso = new Curso(this.nombre,this.autor,this.fecha);
    this.cursoService.agregarDatosCursos(curso).subscribe(
      data=>{
        alert("Curso agregado");
        this.router.navigate(['editCursos']);
      },err => {
        alert("Fallo al querer agregar un curso");
        this.router.navigate(['']);
      }
    )
  }

  salir(){
    this.router.navigate(['editCursos'])
  }
}
