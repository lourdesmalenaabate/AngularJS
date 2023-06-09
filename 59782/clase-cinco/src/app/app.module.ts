import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CryptosComponent } from './components/cryptos/cryptos.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CryptosComponent,
    CuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
