import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/Models/photo';
import { Property } from 'src/app/Models/property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-photos',
  templateUrl: './property-photos.component.html',
  styleUrls: ['./property-photos.component.css']
})
export class PropertyPhotosComponent implements OnInit {
  property: Property | undefined;
  selectedPhoto?: Photo;

  photoWidth = 200;
  photoPosition = this.photoWidth * 4;

  constructor(private activeRoute: ActivatedRoute, private propertiesService: PropertyService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.activeRoute.parent?.params.subscribe(params => {
      let propertyID = +params['id'];
      this.property = this.propertiesService.getPropertyById(propertyID);
      if(!this.selectedPhoto){
        this.selectedPhoto = this.property?.photos[0];
      }
    });
  }

  scrollLeft(){
    let gallery = document.querySelector('.photos__gallery');
    gallery?.scrollBy({
      left: -this.photoWidth,
      behavior: 'smooth'
    });
  }
  //TODO: fix so that the scroll is disabled if no more photos exist
  scrollRight(){
    let gallery = document.querySelector('.photos__gallery');
    if(this.checkPhotoPosition()){
      gallery?.scrollBy({
        left: this.photoWidth,
        behavior: 'smooth'
      });
      this.photoPosition+= this.photoWidth;
    }
    else{
      this.disableRightScroll();
    }
  }
  // scrollRight(){
  //   let gallery = document.querySelector('.photos__gallery');
  //   gallery?.scrollBy({
  //       left: this.photoWidth,
  //       behavior: 'smooth'
  //     });
  // }

  selectPhoto(photo: Photo){
    this.selectedPhoto = photo;
  }

  checkPhotoPosition(): boolean{
    if(this.property?.photos.length){
      let endOfGallery = this.property?.photos.length * this.photoWidth;
      console.log(`endOfGallery: ${endOfGallery}`)
      console.log(`photoPosition: ${this.photoPosition}`)
      this.photoPosition < endOfGallery ? true : false
    }
    return false;
  }

  disableRightScroll(){
    console.log('right scroll disabled')
  }

  enableRightScroll(){
    console.log('right scroll enabled')
  }
}
