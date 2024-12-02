import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Furnishing, Property } from 'src/app/Models/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  @Input() property: Property | undefined;
  url:string | ArrayBuffer | null | undefined;
  constructor(private route:Router) {
    this.url = '../../assets/images/house_default.png'
  }

  ngOnInit(): void {
  }

  getFurnishingText(furnishing: Furnishing | undefined): string {
    if(furnishing === undefined){
      return 'Unknown furnishing status';
    }
    return Furnishing[furnishing];
  }

  getAvailabilityText(availabilityDate: Date | undefined): string{
    if(availabilityDate === undefined){
      return "Unknown availibility";
    }

    let today = this.stripTime(new Date());
    let availability = this.stripTime(availabilityDate);

    if(availability <= today){
      return "Ready to move";
    }

    let options: Intl.DateTimeFormatOptions = {
      year: 'numeric', month: '2-digit', day: '2-digit'
    };
      return `Ready to move in ${availability.toLocaleDateString(undefined, options)}`;
  }

  stripTime(date: Date): Date {
    let newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  }

  navigateToDetailPage(id:number | undefined){
    if(id != undefined){
      this.route.navigate(['/property', id]);
    }
  }
}
