import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
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
import { ModalData } from './modal-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  locale: string = 'pt-BR';
  url: string = '/assets/eventos.json';
  events: CalendarEvent[] = [];
  calendarEvents: any;
  activeDayIsOpen = false;
  // @ViewChild('modalContent') modalContent: TemplateRef<any>;
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
