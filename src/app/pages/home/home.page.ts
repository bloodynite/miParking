import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mapa: Mapboxgl.Map;
  lat: number;
  lng: number;
  loading: boolean;

  constructor(private router: Router) { }

  async ngOnInit() {
    await this.getLocationService().then(res=>{
      this.lat = res.lat;
      this.lng = res.lng;
    });

    Mapboxgl.accessToken = environment.mapTkn;
    console.log('cargando data');
    this.loading = false;
    this.mapa = new Mapboxgl.Map({
    container: 'mapa-mapbox', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [this.lng, this.lat], // starting position [lng, lat] -33.4442711,-70.7459718
    zoom: 16 // starting zoom
});

  this.marker(this.lng, this.lat);
  }

  salir(){
    this.router.navigateByUrl('/start');
  }

  async getLocationService(): Promise<any>{
    console.log('iniciando');
    this.loading = true;
    return await new Promise((resolve, reject)=>{
      navigator.geolocation.getCurrentPosition(resp=>{
        resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
      });
    });
  }

  marker(lng: number, lat: number){
    const marker = new Mapboxgl.Marker({
      draggable: true
    }).setLngLat([lng, lat]).addTo(this.mapa);
  }
}
