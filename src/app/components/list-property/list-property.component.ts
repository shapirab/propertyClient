import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.css']
})
export class ListPropertyComponent implements OnInit {

  constructor(private router: Router) { }

    ngOnInit(): void {
      this.router.navigateByUrl('/home/list-property/basic-info');
    }

    onTabChange(event: any): void {
      let tabIndex = event.index;
      if (tabIndex === 0) {
        this.router.navigateByUrl('/home/list-property/basic-info');
      } else if (tabIndex === 1) {
        this.router.navigateByUrl('/home/list-property/pricing');
      }
      else if (tabIndex === 2) {
        this.router.navigateByUrl('/home/list-property/address-form');
      }
      else if (tabIndex === 3) {
        this.router.navigateByUrl('/home/list-property/details-form');
    }

  }
}
