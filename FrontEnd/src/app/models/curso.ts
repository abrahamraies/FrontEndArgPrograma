export class Curso {
  id_cursos!: number;
  nombre:string;
  fecha:string;
  autor:string;

  constructor(nombre:string,fecha:string,autor:string){
    this.nombre = nombre;
    this.fecha = fecha;
    this.autor = autor;
  }
}
