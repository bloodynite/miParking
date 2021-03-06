import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ParkingsPageRoutingModule } from './parkings-routing.module';

import { ParkingsPage } from './parkings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingsPageRoutingModule
  ],
  declarations: [ParkingsPage],
  providers: [DatePicker]
})
export class ParkingsPageModule {}
