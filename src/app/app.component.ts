import { Component, OnInit } from '@angular/core';
import { repeat } from 'rxjs';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Eventos';
  colunas: string[] = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
  meses = [
    {
      codigo: 0, descricao: 'Janeiro'
    },
    {
      codigo: 1, descricao: 'Fevereiro'
    },
    {
      codigo: 2, descricao: 'Março'
    },
    {
      codigo: 3, descricao: 'Abril'
    },
    {
      codigo: 4, descricao: 'Maio'
    },
    {
      codigo: 5, descricao: 'Junho'
    },
    {
      codigo: 6, descricao: 'Julho'
    },
    {
      codigo: 7, descricao: 'Agosto'
    },
    {
      codigo: 8, descricao: 'Setembro'
    },
    {
      codigo: 9, descricao: 'Outubro'
    },
    {
      codigo: 10, descricao: 'Novembro'
    },
    {
      codigo: 11, descricao: 'Dezembro'
    }];
  diasDoMes = [new Array(7), new Array(7), new Array(7), new Array(7), new Array(7)];
  
  mes: number = 0;
  url: string = '/assets/eventos.json';
  eventos: any;
  dataAtual = moment(new Date());
  dataAtualFormatada = this.dataAtual.format("DD/MM/YYYY");

  constructor(private http: HttpClient) { }



  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.eventos = res;
    });
    this.montarCalendario();
  }

  montarCalendario(){
    //this.mes = 10 ;
    let data = moment(new Date(this.dataAtual.year(), this.mes, 1));
    let semana = 0;
    for (let i = 0; data.month() <= this.mes && i <= 30; i++) {
      let dataFormatada = moment(data).format("DD/MM/YYYY");
      if (data.weekday() == 0) {
        semana += 1;
      }
      let diaSemana = data.weekday();
      this.diasDoMes[semana][diaSemana] =
      {
        semana: semana,
        dia: diaSemana,
        data: dataFormatada
      };
      // console.log(`[${semana},${diaSemana}]= ${dataFormatada}`)
      // console.log({
      //   semana: semana,
      //   dia: diaSemana,
      //   data: dataFormatada
      // });
      data.add(1, 'days');
    }
  }

  obterImagem(path:string){
    console.log(path);
    return this.http.get(path);
  }

  obterEvento(data: string) {
    return this.eventos.filter((it: any) => it.data == data)
  }

  setPlan($evento:any){
    this.mes = $evento.target.value;
    this.diasDoMes = [new Array(7), new Array(7), new Array(7), new Array(7), new Array(7)];
    this.montarCalendario();
  }



}
