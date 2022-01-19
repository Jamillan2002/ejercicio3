import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listado: string[];
  cadena: string;

  constructor() {
    this.listado = ["Cadena 1", "Cadena 2"];
    this.cadena = "";
   }

  ngOnInit(): void {
  }

  addListado() {
    this.listado.push(this.cadena);
  }

}
