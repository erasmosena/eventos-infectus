import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { environment } from '../../environments/environment';

import flatpickr from 'flatpickr';
import {
  parse,
  isSameDay,
  isSameMonth,
} from 'date-fns';

import {
  CalendarEvent,
  CalendarView,
} from 'angular-calendar';
 import { HttpClient } from '@angular/common/http';

 import Evento from "./evento.model"



@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit, AfterViewInit, OnDestroy {



  API_URL= environment.API_URL;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  locale: string = 'pt-BR';
  url: string = `${this.API_URL}/eventos.json`;
  urlImage: string =  `${this.API_URL}/images`;
  events: CalendarEvent[] = [];
  calendarEvents: any;
  activeDayIsOpen = false;
  modalData: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log(this.url);
    console.log(new Date().getFullYear());
    this.http.get<Evento[]>(this.url).subscribe((res) => {
      this.calendarEvents = res;
      if (this.calendarEvents !== undefined) {
        for (let i = 0; i < this.calendarEvents.length; i++) {

          this.calendarEvents[i].start = parse(
            this.obterData(this.calendarEvents[i].dataInicio),
            'dd/MM/yyyy',
            new Date(),
          );
          this.calendarEvents[i].end = parse(
            this.obterData(this.calendarEvents[i].dataFim),
            'dd/MM/yyyy',
            new Date(),
          );
          this.calendarEvents[i].title = this.calendarEvents[i].evento.titulo;
          this.calendarEvents[i].imagem = `${this.urlImage}${this.calendarEvents[i].evento.imagem}`;
          console.log(this.calendarEvents[i].imagem);
        }
        this.events = this.calendarEvents;
      }
    });
  }

  ngAfterViewInit(): void {
    flatpickr('.flatpickr', {
      enableTime: true,
      dateFormat: 'd/m/-YTH:i',
      altFormat: 'F j, Y H:i',
    });
  }
  obterData(data: string) {
    if( data ) {
      return data.substring(0,5)+"/"+new Date().getFullYear()
    }
    return ''
  }
  ngOnDestroy() {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    //this.modal.open(this.modalContent, { size: 'lg' });
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
