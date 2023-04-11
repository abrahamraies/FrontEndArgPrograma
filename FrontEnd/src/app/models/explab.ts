import { Tareas } from "./Tareas";

export class Explab {
  id!: number;
  titulo: string;
  nombre: string;
  inicio: number;
  fin: string;
  tareas: Tareas[];

  constructor(titulo: string,nombre:string,inicio:number,fin:string,tareas:Tareas[]){
    this.titulo = titulo;
    this.nombre = nombre;
    this.inicio = inicio;
    this.fin = fin;
    this.tareas = tareas;
  }
}
