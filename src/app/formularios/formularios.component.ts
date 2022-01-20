import { Component, OnInit } from '@angular/core';
import { Individuo } from './individuo';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  listaSex = ['Heterosexual', 'Homosexual', 'Bisexual'];
  listaTRelacion = ['Monógama', 'Poliamor', 'Efímera'];
  individuo = new Individuo();
  password2: string;

  constructor() {
    this.password2 = "";
   }

  ngOnInit(): void {
  }

  newIndividuo() {
    this.individuo = new Individuo();
  }

  onSubmit() {
    console.log("onSubmit");
  }

}
