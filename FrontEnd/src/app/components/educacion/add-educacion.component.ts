import { EducacionService } from './../../services/educacion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  titulo: string = '';
  nombre: string = '';
  inicio: number = 0;
  fin: string = '';
  resumen_edu: string = '';
  AnioFin: number;
  fechascorrectas: boolean;

  constructor(private educacionService:EducacionService,private router:Router) { }

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
    const educacion = new Educacion(this.titulo,this.nombre,this.inicio,this.fin,this.resumen_edu);
    this.educacionService.agregarDatosEducacion(educacion).subscribe(
      data=>{
        if(this.fechascorrectas){
          alert("Educación agregada");
          this.router.navigate(['Educacion']);
        }else{
          alert('Error: El año de inicio debe ser menor al año de finalización');
        }
      },err => {
        alert("Fallo al querer agregar una nueva Educación");
      }
    )
  }

  salir(){
    this.router.navigate(['Educacion'])
  }

}
