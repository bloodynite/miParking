import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ReservaPage } from '../../modals/reserva/reserva.page';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.page.html',
  styleUrls: ['./parkings.page.scss'],
})
export class ParkingsPage implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.router.navigateByUrl('/start');
  }

  async onClickReserva(){
      // this.modal = true;
      const modal = await this.modalCtrl.create({
        component: ReservaPage,
        componentProps: {
          // getdata: prod
        }
      });
      await modal.present();

      const { data } = await modal.onDidDismiss();
      // if (data === 1) {
      //   this.modal = false;
      // }else if(data && data !== 1){
      //   this.modal = false;
      //   this.prodServ.putProductos(data.row.sku, data.row);
      // }
  }

}
