export class Resultado {
    
    nombre: string;
    dipu: number;
    imagen:string;
  
    constructor(nombre: string = "", dipu: number = 0, imagen: string = "") {
      this.nombre = nombre;
      this.dipu = dipu;
      this.imagen = imagen;
    }   
}
