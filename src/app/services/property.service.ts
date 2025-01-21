import { Injectable } from '@angular/core';
import { Furnishing, Property } from '../Models/property';
import { PropertyType } from '../Models/propertyType';
import { CommercialType } from '../Models/commercialUse';
import { ParkingType } from '../Models/parkingType';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  properties:Property[] = [];
  constructor() {
    this.populateProperties();
  }

  getAllProperties(){
    return this.properties;
  }

  getRentalProperties(){
    return this.properties.filter(property => property.commercialUse.commercialType === CommercialType.Rent);
  }

  getSaleProperties(){
    return this.properties.filter(property => property.commercialUse.commercialType === CommercialType.Sell);
  }

  getPropertyById(id: number): Property | undefined{
    return this.properties.find(property => property.id === id);
  }

  populateProperties(){
    this.properties = [
      {
        id: 1,
        title: 'Marco Home',
        type: PropertyType.House,
        profileImage: '../../assets/images/house_default.png',
        numberOfBedrooms: 3,
        propertyAge: 2,
        floor: 2,
        carParking: ParkingType.DrivewayParking,
        furnishing: Furnishing['Fully Furnished'],
        address: {
          street: '5b Yaakov Street',
          city: 'Jerusalem',
          state: 'Israel'
        },
        availibility: new Date(),
        totalPropertyArea: 100,
        commercialUse: {
          id: 1,
          commercialType: CommercialType.Sell,
          price: 100_000,
        },
        builtArea: 1200,
        carpetArea: 900,
        isGate: true,
        photos: [
          {id: 1, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 2, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 3, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 4, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 5, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 6, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 7, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 8, url: 'assets/images/mountains.jpg', isMain: false},

        ]
      },
      {
        id: 2,
        title: 'A Beautiful House',
        type: PropertyType.House,
        profileImage: '../../assets/images/house_default.png',
        numberOfBedrooms: 2,
        furnishing: Furnishing['Semi Furnished'],
        address: {
          street: '25 Beni Har',
          city: 'Tel Aviv',
          state: 'Israel'
        },
        availibility: new Date(),
        totalPropertyArea: 50,
        commercialUse: {
          id: 1,
          commercialType: CommercialType.Sell,
          price: 200_000,
        },
        photos: [
          {id: 1, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 2, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 3, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 4, url: 'assets/images/mountains.jpg', isMain: false},

        ]
      },
      {
        id: 3,
        title: 'Moshico Home',
        type: PropertyType.Apartment,
        profileImage: '../../assets/images/house_default.png',
        numberOfBedrooms: 3,
        furnishing: Furnishing['Not Furnished'],
        address: {
          street: '27 HaNaalaim Street',
          city: 'Jerusalem',
          state: 'Israel'
        },
        floor: 2,
        availibility: new Date(),
        totalPropertyArea: 80,
        commercialUse: {
          id: 2,
          commercialType: CommercialType.Rent,
          monthlyPrice: 1000,
          securityDeposit: 1000,
        },
        photos: [
          {id: 1, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 2, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 3, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 4, url: 'assets/images/mountains.jpg', isMain: false},

        ]
      },
      {
        id: 4,
        title: 'Some Property',
        type: PropertyType.Apartment,
        profileImage: '../../assets/images/house_default.png',
        numberOfBedrooms: 3,
        furnishing: Furnishing['Semi Furnished'],
        address: {
          street: '508 Jafa Street',
          city: 'Jerusalem',
          state: 'Israel'
        },
        availibility: new Date(),
        totalPropertyArea: 80,
        commercialUse: {
          id: 2,
          commercialType: CommercialType.Rent,
          monthlyPrice: 1000,
          securityDeposit: 1000
        },
        photos: [
          {id: 1, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 2, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 3, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 4, url: 'assets/images/mountains.jpg', isMain: false},

        ]
      },
      {
        id: 5,
        title: 'Dream World Palace',
        type: PropertyType.House,
        profileImage: '../../assets/images/house_default.png',
        numberOfBedrooms: 3,
        furnishing: Furnishing['Not Furnished'],
        address: {
          street: '44 Mishkenot Avenue',
          city: 'Jerusalem',
          state: 'Israel'
        },
        totalFloors: 3,
        availibility: new Date(2025, 11, 11),
        totalPropertyArea: 80,
        commercialUse: {
          id: 2,
          commercialType: CommercialType.Rent,
          monthlyPrice: 1000,
          securityDeposit: 1000,
          maintainance: 300
        },
        photos: [
          {id: 1, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 2, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 3, url: 'assets/images/mountains.jpg', isMain: false},
          {id: 4, url: 'assets/images/mountains.jpg', isMain: false},

        ]
      }
    ]
  }
}
