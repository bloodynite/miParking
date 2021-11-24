import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.page.html',
  styleUrls: ['./parkings.page.scss'],
})
export class ParkingsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  salir(){
    this.router.navigateByUrl('/start');
  }

}
