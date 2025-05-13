import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.css']
})
export class ListPropertyComponent implements OnInit {
  selectedIndex = 0;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.router.navigateByUrl('/home/list-property/basic-info');
      this.activatedRoute.url.subscribe(() => {
      this.updateSelectedTab();
    });
    }

    updateSelectedTab() {
    const url = this.router.url;
    if (url.includes('pricing')) {
      this.selectedIndex = 1;
    }
    else if (url.includes('address')) {
      this.selectedIndex = 2;
    }
    else if (url.includes('other-details')) {
      this.selectedIndex = 3;
    }
    else if (url.includes('photos')) {
      this.selectedIndex = 4;
    }
    else {
      this.selectedIndex = 0;
    }
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
