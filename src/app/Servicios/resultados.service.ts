import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  constructor(private _httpClient: HttpClient) {
    console.log('Iniciando servicio Resultados');
   }

   
}
