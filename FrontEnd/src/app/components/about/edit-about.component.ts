import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  persona: persona = null

  constructor(private activatedRouter:ActivatedRoute,private personaService:PersonaService,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detallePersona(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar los datos de la persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.editarDatosPersona(id,this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar los datos de la persona");
        this.router.navigate(['']);
      }
    )
  }
  salir(){
    this.router.navigate(['']);
  }

}
