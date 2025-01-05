export enum CommercialType{
  Rent = 'rent',
  Sell = 'sell'
}

export interface CommercialUse{
  id: number,
  commercialType: CommercialType,
  monthlyPrice?: number,
  price?: number,
  securityDeposit?: number,
  maintainance?: number
}
