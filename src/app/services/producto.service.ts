import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../intrefaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    //http://localhost:3000/
    // enviroment   
    this.myAppUrl = 'http://localhost:3000/'; 
    this.myApiUrl = 'api/productos/';
  }
  // Producto se obtiene de la interfaces creadas
  getListProductos() : Observable<Producto[]>{
    return this.http.get<Producto[]>(this.myAppUrl+this.myApiUrl);
  }
  deleteProducto(id:number): Observable<void>{ 
    return this.http.delete<void>(this.myAppUrl+this.myApiUrl+id);
  }
  saveProducto(producto:Producto): Observable<void>{
    return this.http.post<void>(this.myAppUrl+this.myApiUrl, producto);
  }
  getProducto(id: number): Observable<Producto>{
    return this.http.get<Producto>(this.myAppUrl+this.myApiUrl+id);
  }
}

