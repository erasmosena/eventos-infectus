import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-motorcycle-club',
  templateUrl: './motorcycle-club.component.html',
  styleUrls: ['./motorcycle-club.component.css']
})
export class MotorcycleClubComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarParaOrigem() {
    this.router.navigate(['/origem']).then(() => {
      window.scrollTo(0, 0);
    });
  }

}
