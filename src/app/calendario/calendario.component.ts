import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { environment } from '../../environments/environment';

import flatpickr from 'flatpickr';
import {
  startOfDay,
  addHours,
  endOfDay,
  parse,
  isSameDay,
  isSameMonth,
} from 'date-fns';

import {
  CalendarEvent,
  CalendarView,
  CalendarEventTimesChangedEvent,
} from 'angular-calendar';
 import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit, AfterViewInit, OnDestroy {

  API_URL= environment.API_URL;
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  locale: string = 'pt-BR';
  url: string = `${this.API_URL}/eventos.json`;
  events: CalendarEvent[] = [];
  calendarEvents: any;
  activeDayIsOpen = false;
  modalData: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((res) => {
      this.calendarEvents = res;
      if (this.calendarEvents !== undefined) {
        for (let i = 0; i < this.calendarEvents.length; i++) {
          this.calendarEvents[i].start = parse(
            this.calendarEvents[i].data,
            'dd/MM/yyyy',
            new Date(),
          );
          this.calendarEvents[i].end = parse(
            this.calendarEvents[i].data,
            'dd/MM/yyyy',
            new Date(),
          );
          console.log(this.calendarEvents[i].evento.titulo);
          this.calendarEvents[i].title = this.calendarEvents[i].evento.titulo;
          this.calendarEvents[i].imagem = this.calendarEvents[i].evento.imagem;
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

}
