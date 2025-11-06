import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretoria',
  templateUrl: './diretoria.component.html',
  styleUrls: ['./diretoria.component.css']
})
export class DiretoriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  diretores =[
    {
      id: 'carrasco',
      nome: 'Carrasco',
      cargo:'Presidente'
    },
    {
      id: 'clecio',
      nome: 'Clécio',
      cargo:'Vice-Presidente'
    },
    {
      id: 'paranoia',
      nome: 'Paranóia',
      cargo:'Sargento de Armas - Disciplina'
    },
    {
      id: 'vonne',
      nome: 'Vonne',
      cargo:'Tesoureiro'
    },
    {
      id: 'trindade',
      nome: 'Trindade',
      cargo:'Diretor de Marketing'
    },
    {
      id: 'victor',
      nome: 'Victor',
      cargo:'Diretor Social'
    },
    {
      id: 'urso',
      nome: 'Erasmo Sena - \'Urso\'',
      cargo:'Secretário'
    },
  ]

}
