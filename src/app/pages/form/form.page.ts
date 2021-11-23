import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Banco, Comuna, Region, TipoCuenta } from 'src/app/interfaces/banco.interface';
import { Sweetalert2Service } from 'src/app/services/sweetalert2.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  bancos: Banco[] = [
    { id: '01', nombre: 'Banco Bice' },
    { id: '02', nombre: 'BBVA' },
    { id: '03', nombre: 'Consorcio' },
    { id: '04', nombre: 'Banco de Chile - Edwards Citi' },
    { id: '05', nombre: 'Banco del Desarrollo' },
    { id: '06', nombre: 'Banco Estado' },
    { id: '07', nombre: 'Banco Falabella' },
    { id: '08', nombre: 'Banco Internacional' },
    { id: '09', nombre: 'Banco Itaú' },
    { id: '10', nombre: 'Banco Paris' },
    { id: '11', nombre: 'Banco Ripley' },
    { id: '12', nombre: 'Banco Santander - Banefe' },
    { id: '13', nombre: 'Banco Security' },
    { id: '14', nombre: 'Bci - Tbanc - Nova' },
    { id: '15', nombre: 'Coopeuch' },
    { id: '16', nombre: 'Corpbanca' },
    { id: '17', nombre: 'HSBC Bank' },
    { id: '18', nombre: 'Los Héroes' },
    { id: '19', nombre: 'TENPO Prepago' },
    { id: '20', nombre: 'Transbank' },
  ];

  tipoCuentas: TipoCuenta[] = [
    { id: '01', nombre: 'Cuenta Vista' },
    { id: '02', nombre: 'Cuenta Corriente' },
    { id: '03', nombre: 'Cuenta Ahorro' },
  ];


  regUser: FormGroup = new FormGroup({
    nombres: new FormControl(),
    apellidos: new FormControl(),
    rut: new FormControl(),
    telefono: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    banco: new FormControl(),
    cuenta: new FormControl()
  });

  regDuenio: FormGroup = new FormGroup({
    nombres: new FormControl(),
    apellidos: new FormControl(),
    rut: new FormControl(),
    telefono: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    banco: new FormControl(),
    cuenta: new FormControl(),
    direEstac: new FormControl(),
    region: new FormControl(),
    comuna: new FormControl()
  });

  typeUser: string;
  isDuenio = false;
  tipoCuenta: any;
  banco: any;
  regiones: Array<Region>;
  comunas: Array<Comuna>;

  constructor(private alertService: Sweetalert2Service, private router: Router) {
    this.fetch(data => {
      this.regiones = data;
      console.log(this.regiones);
    });
  }

  ngOnInit() {
    this.typeUser = 'user';
  }

  onChange() {
    if (this.typeUser === 'duenio') {
      this.isDuenio = true;
    } else {
      this.isDuenio = false;
    }
  }

  onSubmitRegUser() {
    console.log(this.regUser.value);
    this.alertService.sweetOK('Usuario Registrado', 'Se ha ingresado el usuario exitosamente');
    this.router.navigateByUrl('/start');
  }
  onSubmitRegDuenio() {
    console.log(this.regDuenio.value);
    this.alertService.sweetOK('Usuario Registrado', 'Se ha ingresado el usuario exitosamente');
    this.router.navigateByUrl('/start');

  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/regionesycomunas.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onChangeRegion(event: CustomEvent){
    const regionSelect =  event.detail.value.region;
    const result = this.regiones.filter(region => region.region === regionSelect
    );
    this.comunas = result[0].comunas;
    console.log(this.comunas);
  }

}
