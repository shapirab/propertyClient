import { CommercialUse } from "./commercialUse";
import { ParkingType } from "./parkingType";
import { Photo } from "./photo";
import { PropertyType } from "./propertyType";

export interface Property{
  id: number,
  title: string,
  type: PropertyType,
  profileImage: string | ArrayBuffer | null | undefined,
  numberOfBedrooms: number,
  furnishing: Furnishing,
  address:{
    street: string,
    city: string,
    state: string
  }
  floor?: number,
  totalFloors?: number,
  specialFeatures?:string,
  availibility: Date,
  propertyAge?: number,
  isGate?: boolean,
  mainEntrance?: string,
  totalPropertyArea: number,
  builtArea?: number,
  carpetArea?: number,
  carParking?: ParkingType,
  commercialUse: CommercialUse,
  photos: Photo[],
  comments?: string
}

export enum Furnishing{
  "Not Furnished",
  "Semi Furnished",
  "Fully Furnished"
}
