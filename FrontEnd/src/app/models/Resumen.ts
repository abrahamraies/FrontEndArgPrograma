export class Resumen {
  id: number;
  detalle: string;

  constructor(data: any) {
    this.id = data.id;
    this.detalle = data.detalle;
  }
}
