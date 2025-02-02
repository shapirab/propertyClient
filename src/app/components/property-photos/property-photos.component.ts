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
  minPhotoPosition = this.photoWidth * 4;

  leftScrollArrow = document.querySelector('.left');
  rightScrollArrow = document.querySelector('.right');

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

  scrollRight(){
    let gallery = document.querySelector('.photos__gallery');
    if(this.checkPhotoRightPosition()){
      this.enableLeftScroll();
      gallery?.scrollBy({
        left: this.photoWidth,
        behavior: 'smooth'
      });
      this.photoPosition += this.photoWidth;
    }
    //This change from coPilot made the difference: call the chechPhoto() again to disable if neccessary
    this.checkPhotoRightPosition();
  }

scrollLeft(){
    let gallery = document.querySelector('.photos__gallery');
    if(this.checkPhotoLeftPosition()){
      this.enableRightScroll();
      gallery?.scrollBy({
        left: -this.photoWidth,
        behavior: 'smooth'
      });
      this.photoPosition -= this.photoWidth;
    }
    this.checkPhotoLeftPosition();
  }

  selectPhoto(photo: Photo){
    this.selectedPhoto = photo;
  }

  checkPhotoRightPosition(): boolean{
    if(this.property?.photos.length){
      let endOfGallery = (this.property.photos.length) * this.photoWidth; // Adjust the end position
      if (this.photoPosition < endOfGallery) {
        this.enableRightScroll();
        return true;
      } else {
        this.disableRightScroll();
        return false;
      }
    }
    return false;
  }

checkPhotoLeftPosition(): boolean{
    if(this.property?.photos.length){
      if (this.photoPosition > this.minPhotoPosition) {
        this.enableLeftScroll();
        return true;
      } else {
        this.disableLeftScroll();
        return false;
      }
    }
    return false;
  }

  disableRightScroll(){
    let rightScrollBtn = document.querySelector('.right');
    rightScrollBtn?.classList.add('disabled');
  }

  enableRightScroll(){
    let rightScrollBtn = document.querySelector('.right');
    rightScrollBtn?.classList.remove('disabled');
  }
  disableLeftScroll(){
    let leftScrollBtn = document.querySelector('.left');
    leftScrollBtn?.classList.add('disabled');
  }

  enableLeftScroll(){
    let leftScrollBtn = document.querySelector('.left');
    leftScrollBtn?.classList.remove('disabled');
  }
}
