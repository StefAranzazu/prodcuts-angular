import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:4000/api/productos/'

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<Producto[]>(this.url);
  }

  eliminarProducto(id: string): Observable<any>{
    return this.http.delete(this.url + id)
  } 

  guardarProducto(producto: Producto) : Observable<any> {
    return this.http.post(this.url, producto)
  }

  editarProducto(id: string) : Observable<any> {
    return this.http.get<Producto>(this.url + id)
  }
}
