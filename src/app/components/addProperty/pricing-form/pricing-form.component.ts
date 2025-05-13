import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pricing-form',
  templateUrl: './pricing-form.component.html',
  styleUrls: ['./pricing-form.component.css']
})
export class PricingFormComponent implements OnInit {
  isRent: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getIsRent();
  }

  getIsRent() {
    this.route.queryParams.subscribe(params => {
      console.log('pricingFormComponent::getIsRent(). params: ', params)
      this.isRent = params['isRent'] === 'true';
      console.log('pricingFormComponent::getIsRent(). isRent: ', this.isRent)
    });
  }

  onPricingFormSubmit(values: any){
    console.log('pricingFormComponent::onPricingFormSubmit(). values: ', values)
  }
}

