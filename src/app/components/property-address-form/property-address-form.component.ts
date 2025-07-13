import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-property-address-form',
  templateUrl: './property-address-form.component.html',
  styleUrls: ['./property-address-form.component.css']
})
export class PropertyAddressFormComponent implements OnInit  {
  isAppartment: boolean;
  floor: number;
  totalFloors: number;
  address: string;
  landmark: string;
  constructor(private formDataService: FormDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPropertyType();
  }

  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

  getPropertyType(){
    this.formDataService.formData$.subscribe({
      next: formData => {
        console.log('propertyAddressForm::getPropertyType(). propertyType: ', formData.selectedPropertyType);
        if(formData.selectedPropertyType == 'appartment'){
          this.isAppartment = true;
        }
        else{
          this.isAppartment = false;
        }
      },
      error: err => console.log(err)
    });
  }

  onAddressSubmit(event: any){}

}
