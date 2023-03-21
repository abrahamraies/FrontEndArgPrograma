import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;
  constructor(private activatedRouter:ActivatedRoute,private educacionService:EducacionService,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detalleEducacion(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar los datos de la educación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.editarDatosEducacion(id,this.educacion).subscribe(
      data => {
        alert("Educación modificada con exito");
        this.router.navigate(['Educacion']);
      }, err => {
        alert("Error al modificar los datos de la educación");
        this.router.navigate(['']);
      }
    )
  }

  salir(){
    this.router.navigate(['Educacion']);
  }

}
