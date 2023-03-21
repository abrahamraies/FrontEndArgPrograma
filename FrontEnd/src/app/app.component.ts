import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEnd';

  constructor(private tokenService:TokenService, private router:Router){
  }
  isLogged = false;

    ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    }

    iniciarSesion(){
      this.router.navigate(['/login']);
    }

    cerrarSesion(){
      this.tokenService.logOut();
      window.location.reload();
    }
}


