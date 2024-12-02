import { Injectable } from '@angular/core';
import { Furnishing, Property } from '../Models/property';
import { PropertyType } from '../Models/propertyType';
import { CommercialType } from '../Models/commercialUse';

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
        type: PropertyType.House,
        profileImage: '../../assets/images/house_default.png',
        numberOfBedrooms: 3,
        furnishing: Furnishing['Fully Furnished'],
        address: {
          city: 'Jerusalem',
          state: 'Israel'
        },
        availibility: new Date(),
        totalPropertyArea: 100,
        commercialUse: {
          id: 1,
          commercialType: CommercialType.Sell,
          price: 100_000,
          securityDeposit: 0
        }
      },
      {
        id: 2,
        type: PropertyType.House,
        profileImage: '../../assets/images/house_default.png',
        numberOfBedrooms: 2,
        furnishing: Furnishing['Semi Furnished'],
        address: {
          city: 'Tel Aviv',
          state: 'Israel'
        },
        availibility: new Date(),
        totalPropertyArea: 50,
        commercialUse: {
          id: 1,
          commercialType: CommercialType.Sell,
          price: 200_000,
          securityDeposit: 0
        }
      },
      {
        id: 3,
        type: PropertyType.Apartment,
        profileImage: '../../assets/images/house_default.png',
        numberOfBedrooms: 3,
        furnishing: Furnishing['Not Furnished'],
        address: {
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
        }
      },
      {
        id: 4,
        type: PropertyType.Apartment,
        profileImage: '../../assets/images/house_default.png',
        numberOfBedrooms: 3,
        furnishing: Furnishing['Semi Furnished'],
        address: {
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
        }
      },
      {
        id: 5,
        type: PropertyType.Apartment,
        profileImage: '../../assets/images/house_default.png',
        numberOfBedrooms: 3,
        furnishing: Furnishing['Not Furnished'],
        address: {
          city: 'Jerusalem',
          state: 'Israel'
        },
        availibility: new Date(2025, 11, 11),
        totalPropertyArea: 80,
        commercialUse: {
          id: 2,
          commercialType: CommercialType.Rent,
          monthlyPrice: 1000,
          securityDeposit: 1000
        }
      }
    ]
  }
}
