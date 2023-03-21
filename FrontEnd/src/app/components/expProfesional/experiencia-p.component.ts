import { Explab } from './../../models/explab';
import { Component, OnInit } from '@angular/core';
import { ExplabService } from 'src/app/services/explab.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-p',
  templateUrl: './experiencia-p.component.html',
  styleUrls: ['./experiencia-p.component.css']
})
export class ExperienciaPComponent implements OnInit {
  experiencias: Explab[] = null;
  constructor(private experienciaService:ExplabService,private router:Router) { }

  ngOnInit(): void {
    this.experienciaService.obtenerDatosExperiencia().subscribe(
      data => {
        this.experiencias = data
      }
    )
  }

  onUpdate(id:number): void{
    this.router.navigate(['editExperiencia/'+id]);
  }
  onDelete(id:number){
    this.experienciaService.eliminarExperiencia(id).subscribe();
    alert("La experiencia ha sido eliminada con exito");
    this.router.navigate(['Experiencia'])
  }

  addExperiencia(){
    this.router.navigate(['addExperiencia']);
  }

  salir(){
    this.router.navigate(['']);
  }
}
