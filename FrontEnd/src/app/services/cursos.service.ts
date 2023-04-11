import { Curso } from './../models/curso';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  //url:string="https://backend-ar.onrender.com/cursos/"
  url:string="http://localhost:8080/v1/cursos/";
  constructor(private http:HttpClient) { }

  public obtenerDatosCursos():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.url);
  }

  public detalleCursos(id:number): Observable<Curso>{
    return this.http.get<Curso>(this.url + `detalle/${id}`);
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
