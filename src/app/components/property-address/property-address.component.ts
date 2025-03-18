import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/Models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-address',
  templateUrl: './property-address.component.html',
  styleUrls: ['./property-address.component.css']
})
export class PropertyAddressComponent implements OnInit {
  property: Property | undefined;
  constructor(private activeRoute: ActivatedRoute, private propertiesService: PropertyService) { }

  ngOnInit(): void {
    this.activeRoute.parent?.params.subscribe(params => {
      let propertyID = +params['id'];
      this.propertiesService.getPropertyById(propertyID).subscribe({
        next: property => this.property = property,
        error: err => console.log(err)
      });
    });
  }

}
