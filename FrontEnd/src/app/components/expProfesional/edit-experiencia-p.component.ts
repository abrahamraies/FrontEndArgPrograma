import { Explab } from './../../models/explab';
import { Component, OnInit } from '@angular/core';
import { ExplabService } from 'src/app/services/explab.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia-p',
  templateUrl: './edit-experiencia-p.component.html',
  styleUrls: ['./edit-experiencia-p.component.css']
})
export class EditExperienciaPComponent implements OnInit {
  explab: Explab
  AnioFin: number;
  fechascorrectas: boolean;

  constructor(private activatedRouter:ActivatedRoute,private experienciaService:ExplabService,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detalleExperiencia(id).subscribe(
      data => {
        this.explab = data;
      }, err => {
        alert("Error al modificar los datos de la experiencia");
      }
    )
  }

  onAnioInicioChange() {
    if(this.explab.fin != "Actualidad")
    {
      this.AnioFin = parseInt(this.explab.fin);
      if (this.explab.inicio && this.explab.fin && this.explab.inicio > this.AnioFin) {
        this.fechascorrectas = false;
      }else{
        this.fechascorrectas = true;
      }
    }
  }

  onAnioFinChange() {
    if(this.explab.fin != "Actualidad")
    {
      this.AnioFin = parseInt(this.explab.fin);
      if (this.explab.inicio && this.explab.fin && this.explab.inicio > this.AnioFin) {
        this.fechascorrectas = false;
      }else{
        this.fechascorrectas = true;
      }
    }
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.editarDatosExperiencia(id,this.explab).subscribe(
      data => {
        if(this.fechascorrectas){
          alert("Experiencia modificada con exito");
          this.router.navigate(['Experiencia']);
        }else{
          alert('Error: El año de inicio debe ser menor al año de finalización');
        }
      }, err => {
        alert("Error al modificar los datos de la Experiencia");
      }
    )
  }

  salir(){
    this.router.navigate(['Experiencia']);
  }
}
