import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaTareasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
