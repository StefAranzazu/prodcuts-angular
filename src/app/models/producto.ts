export class Producto {
    _id?: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    precio: number;


    constructor (nombre: string, categoria: string, ubicacicaion: string, precio: number){
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacicaion;
        this.precio = precio;
    }
}