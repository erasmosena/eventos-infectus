import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

import { AppComponent } from './app.component';
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
import {CalendarioComponent} from "./calendario/calendario.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CalendarioComponent,
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
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
