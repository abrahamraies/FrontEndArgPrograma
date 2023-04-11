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

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.editarDatosExperiencia(id,this.explab).subscribe(
      data => {
        alert("Experiencia modificada con exito");
        this.router.navigate(['Experiencia']);
      }, err => {
        alert("Error al modificar los datos de la Experiencia");
      }
    )
  }

  salir(){
    this.router.navigate(['Experiencia']);
  }
}
