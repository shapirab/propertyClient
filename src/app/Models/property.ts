import { CommercialUse } from "./commercialUse";
import { ParkingType } from "./parkingType";
import { PropertyType } from "./propertyType";

export interface Property{
  id: string,
  type: PropertyType,
  profileImage: string | ArrayBuffer | null | undefined,
  numberOfBedrooms: number,
  furnishing: Furnishing,
  address:{
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
  commercialUse: CommercialUse
  comments?: string,
}

export enum Furnishing{
  "Not Furnished",
  "Semi Furnished",
  "Fully Furnished"
}
