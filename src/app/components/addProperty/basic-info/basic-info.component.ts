import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
   transactionType: string = 'sell';
    isRent: boolean = false;
  // For BHK selection group
  selectedBHK: number | null = null;

  // For property type group
  selectedPropertyType: string | null = null;

  // For furnishing group
  selectedFurnishing: string | null = null;
  constructor(private router: Router, private route: ActivatedRoute){ }

  city: string | null = null;

  ngOnInit(): void {

  }

  onBasicFormSubmit(values: any){
    console.log('basicInfoComponent::onBasicFormSubmit(), Value: ', values)
    this.router.navigateByUrl(`home/list-property/pricing?isRent=${this.isRent}`);
  }
}
