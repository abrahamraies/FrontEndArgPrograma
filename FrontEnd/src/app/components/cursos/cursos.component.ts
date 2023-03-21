import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = null;

  constructor(private cursoService:CursosService,private router:Router) { }

  ngOnInit(): void {
    this.cursoService.obtenerDatosCursos().subscribe(
      data => {
        this.cursos = data
      }
    )
  }

  onUpdate(id:number): void{
    this.router.navigate(['editCurso/'+id]);
  }
  onDelete(id:number){
    this.cursoService.eliminarCursos(id).subscribe();
    alert("El curso ha sido eliminado con exito");
    this.router.navigate(['editCursos'])
  }

  addCurso(){
    this.router.navigate(['addCurso']);
  }

  salir(){
    this.router.navigate(['']);
  }

}
