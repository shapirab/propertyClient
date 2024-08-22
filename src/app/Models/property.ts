import { ParkingType } from "./parkingType";
import { PropertyType } from "./propertyType";

export interface Property{
  id: string,
  type: PropertyType,
  numberOfBedrooms: number,
  furnishing: boolean,
  address:{
    city: string,
    state: string
  }
  floor?: number,
  totalFloors?: number,
  specialFeatures?:string,
  availibility: Date,
  propertyAge: number,
  isGate?: boolean,
  mainEntrance?: string,
  totalPropertyArea: number,
  builtArea?: number,
  carpetArea?: number,
  carParking?: ParkingType,
  commercialUse?: string
  comments?: string
}
