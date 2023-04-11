import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {
  curso: Curso = null;
  constructor(private activatedRouter:ActivatedRoute,private cursoService:CursosService,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursoService.detalleCursos(id).subscribe(
      data => {
        this.curso = data;
      }, err => {
        alert("Error al modificar los datos del curso");
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursoService.editarDatosCursos(id,this.curso).subscribe(
      data => {
        alert("Curso modificado con exito");
        this.router.navigate(['editCurso']);
      }, err => {
        alert("Error al modificar los datos del curso");
      }
    )
  }

  salir(){
    this.router.navigate(['editCursos']);
  }

}
