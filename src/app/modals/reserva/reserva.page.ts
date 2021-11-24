import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {
  fecIni: string;
  fecTerm: string;
  constructor(private modalCtrl: ModalController, private datePicker: DatePicker, private alertServ: Sweetalert2Service, private router:Router) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

  fechaInicio(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        this.fecIni = date.toLocaleDateString();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  fechaTermino(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        this.fecIni = date.toLocaleDateString();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  pagar(){
    this.alertServ.sweetOK('Pago Realizado', 'Se ha ingresado la reserva exitosamente');
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/home');
  }

}
