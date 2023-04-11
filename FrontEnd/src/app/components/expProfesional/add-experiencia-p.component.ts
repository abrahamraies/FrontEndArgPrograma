import { Explab } from './../../models/explab';
import { ExplabService } from 'src/app/services/explab.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tareas } from 'src/app/models/Tareas';

@Component({
  selector: 'app-add-experiencia-p',
  templateUrl: './add-experiencia-p.component.html',
  styleUrls: ['./add-experiencia-p.component.css']
})
export class AddExperienciaPComponent implements OnInit {
  titulo: string = null;
  nombre: string = null;
  inicio: number = 0;
  fin: string = null;
  tareas: Tareas[];

  constructor(private experienciaService:ExplabService,private router:Router) { }

  ngOnInit(): void {
  }

  onAdd(){
    const explab = new Explab(this.titulo,this.nombre,this.inicio,this.fin,this.tareas);
    this.experienciaService.agregarDatosExperiencia(explab).subscribe(
      data=>{
        alert("Experiencia agregada");
        this.router.navigate(['Experiencia']);
      },err => {
        alert("Fallo al querer agregar una nueva Experiencia");
      }
    )
  }

  salir(){
    this.router.navigate(['Experiencia'])
  }

}
