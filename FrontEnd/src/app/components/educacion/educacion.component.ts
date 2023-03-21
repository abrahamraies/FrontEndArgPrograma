import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones: Educacion[] = null;
  constructor(private educacionService:EducacionService,private router:Router) { }

  ngOnInit(): void {
    this.educacionService.obtenerDatosEducacion().subscribe(
      data => {
        this.educaciones = data
      }
    )
  }

  onUpdate(id:number): void{
    this.router.navigate(['editEducacion/'+id]);
  }
  onDelete(id:number){
    this.educacionService.eliminarEducacion(id).subscribe();
    alert("La educación ha sido eliminada con exito");
    this.router.navigate(['Educacion'])
  }

  addEducacion(){
    this.router.navigate(['addEducacion']);
  }

  salir(){
    this.router.navigate(['']);
  }

}
