import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Furnishing, Property } from 'src/app/Models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  propertyId: number | null = null;
  property: Property | undefined;
  url:string | ArrayBuffer | null | undefined;
  constructor(private activatedRoute: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.propertyId = +(params.get('id') || 0);
      this.getProperty(this.propertyId);
      if(this.property?.profileImage != null){
        this.url = this.property?.profileImage;
      }
      else{
        this.url = '../../assets/images/house_default.png';
      }
    });
  }

  getProperty(id: number){
    if(id != null && id > 0){
      this.property = this.propertyService.getPropertyById(id);
    }
  }

  getFurnishingText(furnishing: Furnishing | undefined): string {
    if(furnishing === undefined){
      return 'Unknown furnishing status';
    }
    return Furnishing[furnishing];
  }

}
