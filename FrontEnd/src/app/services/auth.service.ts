import { JwtDto } from './../models/JwtDto';
import { loginUsuario } from './../models/loginUsuario';
import { Observable } from 'rxjs';
import { NuevoUsuario } from './../models/nuevoUsuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient:HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL+'nuevo',nuevoUsuario);
  }

  public login(loginUsuario:loginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL+'login',loginUsuario);
  }
}
