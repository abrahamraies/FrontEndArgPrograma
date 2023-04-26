import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = null;

  constructor(private proyectosService:ProyectosService,private router:Router) { }

  ngOnInit(): void {
    this.proyectosService.obtenerProyectos().subscribe(
      data => {
        this.proyectos = data
      }
    )
  }

  onUpdate(id:number): void{
    this.router.navigate(['editProyecto/'+id]);
  }
  onDelete(id:number){
    this.proyectosService.eliminarProyecto(id).subscribe();
    alert("El proyecto ha sido eliminada con exito");
    this.router.navigate(['Proyectos']);
  }

  addProyecto(){
    this.router.navigate(['addProyecto']);
  }

  salir(){
    this.router.navigate(['']);
  }

}
