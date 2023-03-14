import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url:string="http://localhost:8080/persona/"
  constructor(private http:HttpClient) { }

  public obtenerDatosPersona():Observable<any>{
    return this.http.get(this.url);
  }

  public agregarDatosPersona(persona: persona): Observable<any>{
    return this.http.post<any>(this.url+"nueva",persona);
  }

  public editarDatosPersona(id:number,persona:persona): Observable<any>{
    return this.http.put<any>(this.url+`modificar/${id}`,persona);
  }

  public eliminarPersona(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `eliminar/${id}`);
  }
}
