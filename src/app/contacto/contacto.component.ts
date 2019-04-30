import { Component, OnInit } from '@angular/core';
import { ContactoService } from './contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  upredes = [];
  constructor( private constactoService: ContactoService ) { 
     this.constactoService.getData().subscribe(data =>{
      console.log(data);
      this.upredes = data;
    });
  }

  ngOnInit() {
  }

}
