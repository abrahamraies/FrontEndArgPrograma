import { Resumen } from "./Resumen";

export class persona {
  id! : number;
  nombre : string;
  apellido : string;
  fecha_nacimiento : Date;
  nacionalidad : string;
  correo : string;
  ocupacion : string;
  image_background : string;
  image_perfil : string;
  domicilio : string;
  estado_civil : string;
  celular : string;
  ciudad : string;
  nivelIngles : string;
  freelance : string;
  dni : string;
  cuit : string;
  resumen: Resumen[];

  constructor(data: any) {
    this.id = data.id;
    this.nombre = data.nombre;
    this.apellido = data.apellido;
    this.fecha_nacimiento = data.fecha_nacimiento;
    this.nacionalidad = data.nacionalidad;
    this.correo = data.correo;
    this.ocupacion = data.ocupacion;
    this.image_background = data.image_background;
    this.image_perfil = data.image_perfil;
    this.domicilio = data.domicilio;
    this.estado_civil = data.estado_civil;
    this.celular = data.celular;
    this.ciudad = data.ciudad;
    this.nivelIngles = data.nivelIngles;
    this.freelance = data.freelance;
    this.dni = data.dni;
    this.cuit = data.cuit;
    this.resumen = data.resumen;
  }
}

