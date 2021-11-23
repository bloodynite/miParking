import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  email: string;
  pass: string;
  constructor(private alerServ: Sweetalert2Service, private route: Router) { }

  ngOnInit() {
  }

  onClickInvitado(){
    this.route.navigateByUrl('/home');
  }

  onClickEntrar(){
    if(this.email && this.pass){
      this.route.navigateByUrl('/home');
    }
    else {
      this.alerServ.sweetWarning('Alerta','Debe llenar todos los campos');
  }}
}
