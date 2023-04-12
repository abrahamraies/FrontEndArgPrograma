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
  AnioFin: number;
  fechascorrectas: boolean;

  constructor(private experienciaService:ExplabService,private router:Router) { }

  ngOnInit(): void {
  }

  onAnioInicioChange() {
    if(this.fin != "Actualidad")
    {
      this.AnioFin = parseInt(this.fin);
      if (this.inicio && this.fin && this.inicio > this.AnioFin) {
        this.fechascorrectas = false;
      }else{
        this.fechascorrectas = true;
      }
    }
  }

  onAnioFinChange() {
    if(this.fin != "Actualidad")
    {
      this.AnioFin = parseInt(this.fin);
      if (this.inicio && this.fin && this.inicio > this.AnioFin) {
        this.fechascorrectas = false;
      }else{
        this.fechascorrectas = true;
      }
    }
  }

  onAdd(){
    const explab = new Explab(this.titulo,this.nombre,this.inicio,this.fin,this.tareas);
    this.experienciaService.agregarDatosExperiencia(explab).subscribe(
      data=>{
        if(this.fechascorrectas){
          alert("Experiencia agregada");
          this.router.navigate(['Experiencia']);
        }else{
          alert('Error: El año de inicio debe ser menor al año de finalización');
        }
      },err => {
        alert("Fallo al querer agregar una nueva Experiencia");
      }
    )
  }

  salir(){
    this.router.navigate(['Experiencia'])
  }

}
