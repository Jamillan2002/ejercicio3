import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-misclientes',
  templateUrl: './misclientes.component.html',
  styleUrls: ['./misclientes.component.css']
})
export class MisclientesComponent implements OnInit {

  clientes: Cliente[];
  cliente: Cliente;

  constructor() { 
    this.clientes = [];
    this.cliente = new Cliente();
    let newCliente = new Cliente("Pepe", "Lopez de Hoyos");
    this.clientes.push(newCliente);
    newCliente = new Cliente("Juan", "Lavapies");
    this.clientes.push(newCliente);
  }

  ngOnInit(): void {
  }

  public addCliente() {
    console.log("addPersona");
    let newCliente = new Cliente(this.cliente.nombre, this.cliente.direccion);
    this.clientes.push(newCliente);
  }

}
