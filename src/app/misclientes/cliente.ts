export class Cliente {
    public nombre: string;
    public direccion: string;

    constructor(nombre: string = "", direccion:string = ""){
        this.direccion = direccion;
        this.nombre= nombre;
    }
}
