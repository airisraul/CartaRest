import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  
  private articulos: any[] = [];

  constructor(private http: HttpClient) { }


  getArticulos(){

    return this.http.get( URL_SERVICIOS + '/articulo');

  }

}
