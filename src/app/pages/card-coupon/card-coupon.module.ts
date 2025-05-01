import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardCouponPageRoutingModule } from './card-coupon-routing.module';

import { CardCouponPage } from './card-coupon.page';

import { QRCodeComponent } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardCouponPageRoutingModule,
    QRCodeComponent
  ],
  declarations: [CardCouponPage]
})
export class CardCouponPageModule {}
