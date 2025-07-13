import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from 'src/app/services/form-data.service';
import { FormDataObj } from 'src/app/Models/formData';

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

  constructor(private formDataService: FormDataService, private router: Router, private route: ActivatedRoute){ }

  city: string | null = null;

  ngOnInit(): void {

  }

  onBasicFormSubmit(values: any){
    console.log('basicInfoComponent::OnBasicFormSubmit(). values: ', values)
    const formData: FormDataObj = {
      transactionType: values.transactionType,
      selectedBHK: values.selectedBHK,
      selectedPropertyType: values.selectedPropertyType,
      selectedFurnishing: values.selectedFurnishing,
      city: values.city
    };

    // Save to BehaviorSubject
    this.formDataService.updateFormData(formData);
    this.router.navigateByUrl(`home/list-property/pricing?isRent=${this.isRent}`);
  }
}
