import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Upredes } from '../interface/upredes';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor( private httpClient: HttpClient) { 
    console.log("desde service");
  }

  getData(){
    return this.httpClient.get<Upredes[]>('upr');
  }
}
