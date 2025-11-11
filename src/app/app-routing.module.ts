import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AcessoNegadoComponent } from "./acesso-negado/acesso-negado.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { MembrosComponent } from "./membros/membros.component";
import { GaleriaComponent } from "./galeria/galeria.component";
import { DiretoriaComponent } from "./diretoria/diretoria.component";
//import { MotorcycleClubComponent } from "./layout/motorcycle-club/motorcycle-club.component";
import { AboutComponent } from "./about/about.component";
import {OrigemComponent} from "./origem/origem.component";
import {MotorcycleClubComponent} from "./layout/motorcycle-club/motorcycle-club.component";
import {CalendarioComponent} from "./calendario/calendario.component";
//import { CalendarioComponent } from "./calendario/calendario.component";



const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch:'full'},
    { path: 'home', component: HomeComponent},
    { path: 'membros', component: MembrosComponent},
    { path: 'diretoria', component: DiretoriaComponent},
    { path: 'calendario', component: CalendarioComponent},
    { path: 'galeria', component: GaleriaComponent},
    { path: 'motoclubismo', component: MotorcycleClubComponent},
    { path: 'origem', component: OrigemComponent},
    { path: 'acesso-negado', component: AcessoNegadoComponent},
    { path: 'nao-encontrado', component: NotFoundComponent},
    { path: '**', redirectTo:'/home'},
  ]

  @NgModule({
    imports: [RouterModule.forRoot(routes,{enableTracing:false})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
