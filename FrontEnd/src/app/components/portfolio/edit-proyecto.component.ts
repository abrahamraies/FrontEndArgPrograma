import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectosService } from 'src/app/services/proyectos.service';


@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(private activatedRouter:ActivatedRoute,private proyectoService:ProyectosService,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detalleProyecto(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al modificar los datos del proyecto");
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.editarProyecto(id,this.proyecto).subscribe(
      data => {
        alert("Educación modificada con exito");
        this.router.navigate(['Proyectos']);
      }, err => {
        alert("Error al modificar los datos del proyecto");
      }
    )
  }

  salir(){
    this.router.navigate(['Proyectos']);
  }

}
