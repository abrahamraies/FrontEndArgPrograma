import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private datos:PortfolioService) { }
  miPortfolio:any;
  portfolioCargado:number = 0;

  ngOnInit(): void {
    this.obtenerDatosPersona();
  }

  private obtenerDatosPersona(){
    this.datos.obtenerDatosPersona().subscribe(data => {
      this.miPortfolio = data[0];
      this.portfolioCargado = 1;
    });
  }


}
