import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalendarEvent } from 'angular-calendar';
import { parse } from 'date-fns';
import { environment } from '../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private API_URL = environment.API_URL;
  private url = `${this.API_URL}/eventos.json`;

  constructor(private http: HttpClient) { }

  private getCssClassFromTitle(title: string): string {
    if (title.includes('Aniversário')) {
      return 'evento-aniversario';
    }
    if (title.includes('Reunião Geral')) {
      return 'evento-reuniao';
    }
    if (title.includes('Sexta Infectada')) {
      return 'evento-sexta';
    }
    if (title.includes('Motofest') || title.includes('Motochico')) {
      return 'evento-motofest';
    }
    return '';
  }

  getEventos(): Observable<CalendarEvent[]> {
    return this.http.get<any[]>(this.url).pipe(
      map(eventos => {
        return eventos.map(evento => {
          const title = evento.evento.titulo;
          return {
            start: parse(evento.dataInicio, 'dd/MM/yyyy', new Date()),
            end: parse(evento.dataFim, 'dd/MM/yyyy', new Date()),
            title: title,
            meta: {
              cssClass: this.getCssClassFromTitle(title),
              description: evento.evento.descricao,
              location: evento.evento.local,
              image: evento.evento.imagem
            }
          };
        });
      })
    );
  }
}
