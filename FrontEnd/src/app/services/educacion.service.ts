import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url:string="https://backend-ar.onrender.com/v1/educacion/";
  //url:string="http://localhost:8080/v1/educacion/";

  constructor(private http:HttpClient) { }

  public obtenerDatosEducacion():Observable<any>{
    return this.http.get(this.url);
  }

  public detalleEducacion(id:number): Observable<Educacion>{
    return this.http.get<Educacion>(this.url + `detalle/${id}`);
  }

  public agregarDatosEducacion(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.url+"nuevo",educacion);
  }

  public editarDatosEducacion(id:number,educacion:Educacion): Observable<any>{
    return this.http.put<any>(this.url+`modificar/${id}`,educacion);
  }

  public eliminarEducacion(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `eliminar/${id}`);
  }
}
