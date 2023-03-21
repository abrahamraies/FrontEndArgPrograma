export class persona {
  idpersona! : number;
  nombre : string;
  apellido : string;
  fecha_nacimiento : Date;
  nacionalidad : string;
  correo : string;
  sobre_mi : string;
  ocupacion : string;
  image_background : string;
  image_perfil : string;
  domicilio : string;
  estado_civil : string;
  sobre_mi_r1 : string;
  sobre_mi_r2 : string;
  celular : string;
  ciudad : string;
  nivelIngles : string;
  freelance : string;
  dni : string;
  cuit : string;
  resumen: string;

  constructor(nombre: string, apellido: string, fecha_nacimiento : Date,nacionalidad : string,correo : string,sobre_mi : string,ocupacion : string,image_background: string,image_perfil : string,domicilio : string,estado_civil : string,sobre_mi_r1 : string,sobre_mi_r2 : string,celular : string,ciudad : string,nivelIngles : string,freelance : string,dni : string,cuit : string, resumen : string ){
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha_nacimiento = fecha_nacimiento;
    this.nacionalidad = nacionalidad;
    this.correo = correo;
    this.sobre_mi = sobre_mi;
    this.ocupacion = ocupacion;
    this.image_background = image_background;
    this.image_perfil = image_perfil;
    this.domicilio = domicilio;
    this.estado_civil = estado_civil;
    this.sobre_mi_r1 = sobre_mi_r1;
    this.sobre_mi_r2 = sobre_mi_r2;
    this.celular = celular;
    this.ciudad = ciudad;
    this.nivelIngles = nivelIngles;
    this.freelance = freelance;
    this.dni = dni;
    this.cuit = cuit;
    this.resumen = resumen;
  }
}

