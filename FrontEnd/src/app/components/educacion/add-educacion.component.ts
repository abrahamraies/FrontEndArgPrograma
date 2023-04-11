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

  constructor(private educacionService:EducacionService,private router:Router) { }

  ngOnInit(): void {
  }

  onAdd(){
    const educacion = new Educacion(this.titulo,this.nombre,this.inicio,this.fin,this.resumen_edu);
    this.educacionService.agregarDatosEducacion(educacion).subscribe(
      data=>{
        alert("Educación agregada");
        this.router.navigate(['Educacion']);
      },err => {
        alert("Fallo al querer agregar una nueva Educación");
      }
    )
  }

  salir(){
    this.router.navigate(['Educacion'])
  }

}
