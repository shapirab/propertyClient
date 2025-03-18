import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/Models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  properties: Property[];
  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getSaleProperties().subscribe({
      next: properties => this.properties = properties,
      error: err => console.log(err)
    });
  }

}
