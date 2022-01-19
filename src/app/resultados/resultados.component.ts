import { Component, OnInit } from '@angular/core';
import { Resultado } from './resultado';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  resultados: Promise<Resultado[]>;
  url: string = 'https://cursosdedesarrollo.com/pactometro/resultados.json';
  private _result: any;

  constructor(private _httpClient: HttpClient) { 
    //this.resultados = [];
/*    let newResultado = new Resultado("Raros", 76, "buena");
    this.resultados.push(newResultado);
    newResultado = new Resultado("Normales", 23, "Regular");
    this.resultados.push(newResultado);
*/
    this.resultados = this._httpClient.get<Observable<Resultado[]>>(this.url)
      .pipe(catchError(this.handleError('get', []))).toPromise();    
  }

  private handleError (operation = 'operation', result?: any[]) {
    this._result = result;
    return (error: any): any[] => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return [];
    };
  }

  ngOnInit(): void {
  }
}
