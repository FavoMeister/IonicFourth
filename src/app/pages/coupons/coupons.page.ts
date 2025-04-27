import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
  standalone: false,
})
export class CouponsPage implements OnInit {

  public coupons: Coupon[];

  constructor(
    private couponsService: CouponsService
  ) { 
    this.coupons = [];
  }

  ngOnInit() {
    this.couponsService.getCoupons().then((coupons: Coupon[]) => {
      this.coupons = coupons;
      console.log(coupons);
      
    })
  }

}
