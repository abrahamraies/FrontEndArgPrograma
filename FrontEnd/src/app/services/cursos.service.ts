import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  url:string="http://localhost:8080/cursos/"
  constructor(private http:HttpClient) { }

  public obtenerDatosCursos():Observable<any>{
    return this.http.get(this.url);
  }

  public agregarDatosCursos(Cursos: Curso): Observable<any>{
    return this.http.post<any>(this.url+"nuevo",Cursos);
  }

  public editarDatosCursos(id:number,Cursos:Curso): Observable<any>{
    return this.http.put<any>(this.url+`modificar/${id}`,Cursos);
  }

  public eliminarCursos(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `eliminar/${id}`);
  }
}
