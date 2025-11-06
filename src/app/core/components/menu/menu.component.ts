import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  iconRotation = false;
  isMenuVisible: boolean = false;
  firstLoad: boolean = true;
  menuAnimation: string = '';

  toggleMenu() {
    this.iconRotation = !this.iconRotation;
    if( this.firstLoad){
      this.firstLoad = false;
    }
    if(this.isMenuVisible) {
       this.menuAnimation = 'slide-out'
       setTimeout(() => {
        this.isMenuVisible = false;
      }, 300);
    }  else {
      this.menuAnimation = 'slide-in';
      this.isMenuVisible = true;
    }




  }


  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navegarParaHome() {
    this.router.navigate(['/home']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  navegarParaComando() {
    this.router.navigate(['/diretoria']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  navegarParaGaleria() {
    this.router.navigate(['/galeria']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  navegarParaCalendario() {
    this.router.navigate(['/calendario']).then(() => {
      window.scrollTo(0, 0);
    });
  }

}
