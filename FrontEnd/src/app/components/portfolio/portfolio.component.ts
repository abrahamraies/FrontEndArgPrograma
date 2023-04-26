import { ProyectosService } from './../../services/proyectos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  proyectos: Proyecto[] = null;
  proyectosCargados: number = 0;
  isLogged = false;

  constructor(private proyectosService:ProyectosService,private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.obtenerProyectos();

    if(this.tokenService.getToken()){
      if(this.tokenService.getAuthorities().toString().includes("ROLE_ADMIN"))
        this.isLogged = true;
    }else{
      this.isLogged = false;
    }

  }

  private obtenerProyectos(){
    this.proyectosService.obtenerProyectos().subscribe(
      data => {
        this.proyectos = data
        this.proyectosCargados = 1;
      }
    )
  }

}
