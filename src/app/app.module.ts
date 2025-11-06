import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Imports da nova estrutura
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { HomeComponent } from './features/home/home.component';
import { OrigemComponent } from './features/clube/origem/origem.component';
import { DiretoriaComponent } from './features/clube/diretoria/diretoria.component';
import { MembrosComponent } from './features/membros/membros.component';
import { CalendarioComponent } from './features/calendario/calendario.component';
import { GaleriaComponent } from './features/galeria/galeria.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { AcessoNegadoComponent } from './core/pages/acesso-negado/acesso-negado.component';

// Imports de libs externas
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OrigemComponent,
    DiretoriaComponent,
    MembrosComponent,
    CalendarioComponent,
    GaleriaComponent,
    NotFoundComponent,
    AcessoNegadoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }