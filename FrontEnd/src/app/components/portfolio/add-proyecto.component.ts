import { Router } from '@angular/router';
import { ProyectosService } from './../../services/proyectos.service';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  github_Url: string = '';
  deploy_Url: string = '';

  constructor(private proyectosService:ProyectosService,private router:Router) { }

  ngOnInit(): void {
  }

  onAdd(){
    const proyecto = new Proyecto(this.nombre,this.descripcion,this.github_Url,this.deploy_Url);
    this.proyectosService.agregarProyecto(proyecto).subscribe(
      data=>{
        alert("Proyecto agregado");
        this.router.navigate(['Proyectos']);
      },err => {
        alert("Fallo al querer agregar un nuevo Proyecto");
      }
    )
  }

  salir(){
    this.router.navigate(['Proyectos'])
  }

}
