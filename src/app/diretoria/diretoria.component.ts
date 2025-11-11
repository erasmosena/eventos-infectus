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
      id: 'alessandro',
      nome: 'Alessandro Góis \'Carrasco\'',
      cargo:'Presidente'
    },
    {
      id: 'clecio',
      nome: 'Clécio Santos',
      cargo:'Vice-Presidente'
    },
    {
      id: 'paranoia',
      nome: 'David \'Paranóia\'',
      cargo:'Sargento de Armas'
    },
    {
      id: 'major',
      nome: 'Evanio Noronha\'Major Noronha\'',
      cargo:'Diretor de Disciplina'
    },
    {
      id: 'vonne',
      nome: 'Vonne Marques',
      cargo:'Tesoureiro'
    },
    {
      id: 'nathan',
      nome: 'Nathan Andrade \'Índio\' ',
      cargo:'Diretor de Marketing'
    },
    {
      id: 'victor',
      nome: 'Victor Nunes',
      cargo:'Diretor Social'
    },
    {
      id: 'urso',
      nome: 'Erasmo Sena - \'Urso\'',
      cargo:'Secretário'
    },
  ]

}
