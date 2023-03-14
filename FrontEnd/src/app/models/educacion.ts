export class Educacion {
  id_edu!:number;
  titulo:string;
  nombre:string;
  inicio:number;
  fin:number;
  resumen_edu:string;

  constructor(titulo:string,nombre:string,inicio:number,fin:number,resumen_edu:string){
    this.titulo = titulo;
    this.nombre = nombre;
    this.inicio = inicio;
    this.fin = fin;
    this.resumen_edu = resumen_edu;
  }
}
