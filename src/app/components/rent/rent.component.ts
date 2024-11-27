import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/Models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  properties: Property[];
  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.properties = this.propertyService.getRentalProperties();
  }

}
