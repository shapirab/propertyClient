import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/Models/property';

@Component({
  selector: 'app-property-info-tabs',
  templateUrl: './property-info-tabs.component.html',
  styleUrls: ['./property-info-tabs.component.css']
})
export class PropertyInfoTabsComponent implements OnInit {
  @Input() property: Property | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.property){
      this.router.navigate(['/property', this.property.id, 'overview']);
    }
  }

}
