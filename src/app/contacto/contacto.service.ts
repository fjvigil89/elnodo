import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Upredes } from '../interface/upredes';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  
  headers = new HttpHeaders();

  constructor( private httpClient: HttpClient) { 
    //console.log("desde service");
  }

  getData(){
    return this.httpClient.get<Upredes[]>('http://sync.upr.edu.cu/api/user/frank.vigil');
  }
}
