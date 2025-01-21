import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/Models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-photos',
  templateUrl: './property-photos.component.html',
  styleUrls: ['./property-photos.component.css']
})
export class PropertyPhotosComponent implements OnInit {
  property: Property | undefined;

  constructor(private activeRoute: ActivatedRoute, private propertiesService: PropertyService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.activeRoute.parent?.params.subscribe(params => {
      let propertyID = +params['id'];
      this.property = this.propertiesService.getPropertyById(propertyID);
    });
  }

  //TODO: This does not work
  scrollLeft(){
    let gallery = document.querySelector('.photos__gallery');
    console.log(gallery)
    gallery?.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  }

  scrollRight(){
    let gallery = document.querySelector('.photos__gallery');
    console.log(gallery)
    gallery?.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  }

}
