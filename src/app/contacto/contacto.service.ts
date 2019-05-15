import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Upredes } from '../interface/upredes';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
 

  apiurl = '/api/trabajadores/4016';
  url_upredes = '/empleados_gras?_format=json&idCcosto=4016';
  constructor( private httpClient: HttpClient) {}

  getData(){
    return this.httpClient.get<Upredes>(this.apiurl);
  }
  
}
