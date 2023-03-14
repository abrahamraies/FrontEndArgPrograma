export class Explab {
  id_exp!: number;
  titulo: string;
  nombre: string;
  inicio: number;
  fin: string;
  tarea1:string;
  tarea2: string;
  tarea3: string;
  tarea4: string;

  constructor(titulo:string,nombre:string,inicio:number,fin:string,tarea1:string,tarea2:string,tarea3:string,tarea4:string){
    this.titulo = titulo;
    this.nombre = nombre;
    this.inicio = inicio;
    this.fin = fin;
    this.tarea1 = tarea1;
    this.tarea2 = tarea2;
    this.tarea3 = tarea3;
    this.tarea4 = tarea4;
  }
}
