import { Component, OnInit } from '@angular/core';
import { Resultado } from './resultado';
import {HttpClient} from "@angular/common/http";
import { ResultadosService } from '../Servicios/resultados.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  resultados: Promise<Resultado[]>;
  resultadosVistos: Resultado[];
  resultadosObservable: Observable<Resultado[]>;


  constructor(private _resultadosService: ResultadosService) { 

    this.resultados = this._resultadosService.getData().toPromise();
    // Inicializo a vacío el resultadosVistos
    this.resultadosVistos = [];
    this.resultadosObservable = this._resultadosService.getData();
  }

  ngOnInit(): void {
     // subscribiendome al observable para procesar los datos y pasarlos a la vista
     this.resultadosObservable.subscribe((data) => {
      console.log(data);
      console.log(data.length);

      data.forEach( (value : Resultado) => {
        console.log(value);
        //let partido: Partido = new Partido(value.nombre, value.dipu, value.imagen);
        this.resultadosVistos.push(value);
      });

      console.log(this.resultadosVistos);
    });
  }
}
