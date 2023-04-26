export class Proyecto {
  id_proyecto!: number;
  nombre:string;
  descripcion:string;
  deploy_Url:string;
  github_Url:string;

  constructor(nombre:string,descripcion:string,deploy_Url:string,github_Url:string){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.deploy_Url = deploy_Url;
    this.github_Url = github_Url;
  }
}
