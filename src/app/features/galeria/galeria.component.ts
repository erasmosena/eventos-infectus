import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  images: string[] = [
    'assets/images/gallery/GAELERIA5.jpg',
    'assets/images/gallery/GALERIA00.jpg',
    'assets/images/gallery/GALERIA10.jpg',
    'assets/images/gallery/GALERIA11.jpg',
    'assets/images/gallery/GALERIA12.jpg',
    'assets/images/gallery/GALERIA13.jpg',
    'assets/images/gallery/GALERIA14.jpg',
    'assets/images/gallery/GALERIA15.png',
    'assets/images/gallery/GALERIA16.jpg',
    'assets/images/gallery/GALERIA17.jpg',
    'assets/images/gallery/GALERIA18.jpg',
    'assets/images/gallery/GALERIA19.jpg',
    'assets/images/gallery/GALERIA20.jpg',
    'assets/images/gallery/GALERIA21.jpg',
    'assets/images/gallery/GALERIA22.jpg',
    'assets/images/gallery/GALERIA23.jpg',
    'assets/images/gallery/GALERIA24.jpg',
    'assets/images/gallery/GALERIA25.png',
    'assets/images/gallery/GALERIA26.jpg',
    'assets/images/gallery/GALERIA27.jpg',
    'assets/images/gallery/GALERIA28.png',
    'assets/images/gallery/GALERIA29.png',
    'assets/images/gallery/GALERIA30.png',
    'assets/images/gallery/GALERIA31.jpg',
    'assets/images/gallery/GALERIA32.jpg',
    'assets/images/gallery/GALERIA33.jpg',
    'assets/images/gallery/GALERIA34.jpg',
    'assets/images/gallery/GALERIA36.jpg',
    'assets/images/gallery/GALERIA37.jpg',
    'assets/images/gallery/GALERIA38.jpg',
    'assets/images/gallery/GALERIA39.jpg',
    'assets/images/gallery/GALERIA4.jpg',
    'assets/images/gallery/GALERIA40.jpg',
    'assets/images/gallery/GALERIA41.jpg',
    'assets/images/gallery/GALERIA42.jpg',
    'assets/images/gallery/GALERIA43.jpg',
    'assets/images/gallery/GALERIA44.jpg',
    'assets/images/gallery/GALERIA45.jpg',
    'assets/images/gallery/GALERIA46.jpg',
    'assets/images/gallery/GALERIA47.jpg
  ];

  constructor() { }

  ngOnInit(): void {
  }

}