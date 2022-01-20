import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import {FormsModule} from "@angular/forms";
import { MisclientesComponent } from './misclientes/misclientes.component';
import { CondicionalesComponent } from './condicionales/condicionales.component';
import {HttpClientModule} from "@angular/common/http";
import { ResultadosComponent } from './resultados/resultados.component';
import { EventillosComponent } from './eventillos/eventillos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    MisclientesComponent,
    CondicionalesComponent,
    ResultadosComponent,
    EventillosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
