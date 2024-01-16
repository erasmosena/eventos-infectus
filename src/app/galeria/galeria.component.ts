import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  itensGaleria: any;
  constructor() {
    this.itensGaleria =  Array(35).fill(1).map((x, i) => i + 1);
  }

  ngOnInit(): void {
  }

}
