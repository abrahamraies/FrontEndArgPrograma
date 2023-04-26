import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url:string="https://backend-ar.onrender.com/v1/proyectos/";
  //url:string="http://localhost:8080/v1/proyectos/";
  constructor(private http:HttpClient) { }

  public obtenerProyectos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url);
  }

  public detalleProyecto(id:number): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url + `detalle/${id}`);
  }

  public agregarProyecto(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(this.url+"nuevo",proyecto);
  }

  public editarProyecto(id:number,proyecto:Proyecto): Observable<any>{
    return this.http.put<any>(this.url+`modificar/${id}`,proyecto);
  }

  public eliminarProyecto(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `eliminar/${id}`);
  }
}
