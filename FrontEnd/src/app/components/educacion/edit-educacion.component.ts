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
  AnioFin: number;
  fechascorrectas: boolean;
  constructor(private activatedRouter:ActivatedRoute,private educacionService:EducacionService,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detalleEducacion(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar los datos de la educación");
      }
    )
  }

  onAnioInicioChange() {
    if(this.educacion.fin != "Actualidad")
    {
      this.AnioFin = parseInt(this.educacion.fin);
      if (this.educacion.inicio && this.educacion.fin && this.educacion.inicio > this.AnioFin) {
        this.fechascorrectas = false;
      }else{
        this.fechascorrectas = true;
      }
    }
  }

  onAnioFinChange() {
    if(this.educacion.fin != "Actualidad")
    {
      this.AnioFin = parseInt(this.educacion.fin);
      if (this.educacion.inicio && this.educacion.fin && this.educacion.inicio > this.AnioFin) {
        this.fechascorrectas = false;
      }else{
        this.fechascorrectas = true;
      }
    }
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.editarDatosEducacion(id,this.educacion).subscribe(
      data => {
        if(this.fechascorrectas){
          alert("Educación modificada con exito");
          this.router.navigate(['Educacion']);
        }else{
          alert('Error: El año de inicio debe ser menor al año de finalización');
        }
      }, err => {
        alert("Error al modificar los datos de la educación");
      }
    )
  }

  salir(){
    this.router.navigate(['Educacion']);
  }

}
