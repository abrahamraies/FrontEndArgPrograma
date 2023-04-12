import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url:string="https://backend-ar.onrender.com/v1/persona/";
  //url:string="http://localhost:8080/v1/persona/";
  constructor(private http:HttpClient) { }

  public obtenerDatosPersona():Observable<persona[]>{
    return this.http.get<persona[]>(this.url);
  }

  public detallePersona(id:number): Observable<persona>{
    return this.http.get<persona>(this.url + `detalle/${id}`);
  }

  public agregarDatosPersona(persona: persona): Observable<any>{
    return this.http.post<any>(this.url+"nueva",persona);
  }

  public editarDatosPersona(id:number,persona:persona): Observable<any>{
    persona.id = id;
    return this.http.put<any>(this.url+`modificar/${id}`,persona);
  }

  public eliminarPersona(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `eliminar/${id}`);
  }
}
