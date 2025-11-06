import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports da nova estrutura
import { HomeComponent } from './features/home/home.component';
import { OrigemComponent } from './features/clube/origem/origem.component';
import { DiretoriaComponent } from './features/clube/diretoria/diretoria.component';
import { MembrosComponent } from './features/membros/membros.component';
import { CalendarioComponent } from './features/calendario/calendario.component';
import { GaleriaComponent } from './features/galeria/galeria.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { AcessoNegadoComponent } from './core/pages/acesso-negado/acesso-negado.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'origem', component: OrigemComponent },
  { path: 'diretoria', component: DiretoriaComponent },
  { path: 'membros', component: MembrosComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }