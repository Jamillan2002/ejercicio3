import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicionales',
  templateUrl: './condicionales.component.html',
  styleUrls: ['./condicionales.component.css']
})
export class CondicionalesComponent implements OnInit {

  visible: boolean;

  constructor() { 
    this.visible = true;
  }

  ngOnInit(): void {
  }

  cambiaBoolean() {
    this.visible = !this.visible;
  }
}
