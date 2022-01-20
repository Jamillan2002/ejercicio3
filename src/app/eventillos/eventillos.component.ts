import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventillos',
  templateUrl: './eventillos.component.html',
  styleUrls: ['./eventillos.component.css']
})
export class EventillosComponent implements OnInit {

  campoTexto: string;

  constructor() {
    this.campoTexto = "";
   }

   ngOnInit(): void {
  }

  pulsadoBueno(event: MouseEvent) {
    event.preventDefault();
    //console.log(event);
    console.log("buenos días");
  }

  sobreBotonBueno(event: MouseEvent) {
    event.preventDefault();
    //console.log(event);
    console.log("jijiji");
  }

  pulsadoFeo(event: MouseEvent) {
    event.preventDefault();
    //console.log(event);
    console.log("y tu que miras!");
  }

  pulsadoMalo(event: MouseEvent) {
    event.preventDefault();
    //console.log(event);
    console.log("te vas a cagar!");
  }

  enviar() {
    console.log(this.campoTexto);
  }

  ejecutablur() {
    //console.log(event);
    if (this.campoTexto.length >= 5)
      console.log("Ejecuta Blur");
  }
}
