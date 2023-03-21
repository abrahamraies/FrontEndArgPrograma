import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Explab } from '../models/explab';

@Injectable({
  providedIn: 'root'
})
export class ExplabService {
  url:string="http://localhost:8080/experiencia/"
  constructor(private http:HttpClient) { }

  public obtenerDatosExperiencia():Observable<any>{
    return this.http.get(this.url);
  }

  public detalleExperiencia(id:number): Observable<Explab>{
    return this.http.get<Explab>(this.url + `detalle/${id}`);
  }

  public agregarDatosExperiencia(experiencia: Explab): Observable<any>{
    return this.http.post<any>(this.url+"nueva",experiencia);
  }

  public editarDatosExperiencia(id:number,experiencia:Explab): Observable<any>{
    return this.http.put<any>(this.url+`modificar/${id}`,experiencia);
  }

  public eliminarExperiencia(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `eliminar/${id}`);
  }
}
