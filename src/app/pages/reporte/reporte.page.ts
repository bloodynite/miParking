import { Component, OnInit } from '@angular/core';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {

  constructor(private alertServ: Sweetalert2Service) { }

  ngOnInit() {
  }

  descargar(){
    this.alertServ.sweetOK('Archivo Descargado', 'Se ha generado el reporte exitosamente');
  }

}
