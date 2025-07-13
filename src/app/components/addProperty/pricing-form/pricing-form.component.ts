import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-pricing-form',
  templateUrl: './pricing-form.component.html',
  styleUrls: ['./pricing-form.component.css']
})
export class PricingFormComponent implements OnInit {
  isRent: boolean;
  rent: number;
  securityDeposit: number;
  maintenance: number;
  sellingAskingPrice: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getIsRent();
  }

  getIsRent() {
    this.route.queryParams
      .pipe(take(1))
      .subscribe(params => {
        this.isRent = params['isRent'] === 'true';
      });
  }

  onPricingFormSubmit(values: any){
    console.log('pricingFormComponent::onPricingFormSubmit(). values: ', values)
    this.router.navigateByUrl(`home/list-property/address-form`);
  }
}

