import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class FamiliaService {

  private familias: any[] = [];

  constructor(private http: HttpClient) { }


  getFamilias(){

    return this.http.get( URL_SERVICIOS + '/familia');

  }

}
