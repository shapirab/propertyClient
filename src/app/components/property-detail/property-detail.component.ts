import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/Models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  propertyId: number | null = null;
  property: Property | undefined;
  constructor(private activatedRoute: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.propertyId = +(params.get('id') || 0);
      this.getProperty(this.propertyId);
    });
  }

  getProperty(id: number){
    if(id != null && id > 0){
      this.property = this.propertyService.getPropertyById(id);
    }
  }
}
