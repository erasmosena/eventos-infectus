import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {AboutComponent} from "./about/about.component";
import {AppRoutingModule} from "./app-routing.module";
import {DiretoriaComponent} from "./diretoria/diretoria.component";
import {GaleriaComponent} from "./galeria/galeria.component";
import {HomeComponent} from "./home/home.component";
import {MembrosComponent} from "./membros/membros.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {OrigemComponent} from "./origem/origem.component";
import {MenuComponent} from "./layout/menu/menu.component";
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {MotorcycleClubComponent} from "./layout/motorcycle-club/motorcycle-club.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DiretoriaComponent,
    GaleriaComponent,
    HomeComponent,
    MembrosComponent,
    NotFoundComponent,
    OrigemComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    MotorcycleClubComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
