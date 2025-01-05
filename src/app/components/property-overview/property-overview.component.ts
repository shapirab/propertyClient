import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommercialType, CommercialUse } from 'src/app/Models/commercialUse';
import { Property } from 'src/app/Models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-overview',
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.css']
})
export class PropertyOverviewComponent implements OnInit {
  property: Property | undefined;
  constructor(private activeRoute: ActivatedRoute, private propertiesService: PropertyService) { }

  ngOnInit(): void {
    this.activeRoute.parent?.params.subscribe(params => {
      let propertyID = +params['id'];
      this.property = this.propertiesService.getPropertyById(propertyID);
      console.log(this.property?.commercialUse.commercialType)
    });
  }

}
